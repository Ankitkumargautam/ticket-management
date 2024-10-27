import Pass from "../models/pass";
import ListPass from "../models/listPass";

export const createPass = async (req, res) => {
  try {
    const payload = req.body;

    const createPass = await Pass.create(payload);

    const createListPass = await ListPass.create({ pass: createPass._id });

    if (createPass && createListPass) {
      return res.status(200).json({
        status: 200,
        data: createPass,
        message: "Pass created successfully!!",
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Pass not created!" });
    }
  } catch (error) {
    return res.status(400).json({ status: 400, message: "Pass not created" });
  }
};

// listPass
export const listPass = async (req, res) => {
  try {
    const payload = req.query;

    const page = parseInt(payload.page, 10) || 1; // Convert to number and default to 1
    const limit = parseInt(payload.limit, 10) || 10; // Convert to number and default to 10
    const skip = (page - 1) * limit;

    const query = [
      {
        $lookup: {
          from: "passes",
          let: { pass: "$pass" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$pass"], // Corrected order of fields
                },
              },
            },
          ],
          as: "passes",
        },
      },
      {
        $unwind: { path: "$passes", preserveNullAndEmptyArrays: true },
      },
      { $sort: { createdAt: -1 } },
    ];

    const pagination = [{ $skip: skip }, { $limit: limit }];

    const pipeline = query.concat(pagination); // Concatenate query and pagination arrays

    const passes = await ListPass.aggregate(pipeline);

    // Calculate total count without pagination
    const total = await ListPass.aggregate([...query, { $count: "total" }]);
    const totalCount = total.length > 0 ? total[0].total : 0;

    // const total = await Employee.find();
    // const totalCount = total.length > 0 ? total.length : 0;

    return res.status(200).json({
      status: 200,
      data: passes,
      message: "All passes",
      total: totalCount,
    });
  } catch (error) {
    console.error("Error:", error); // Log any errors that occur
    return res.status(400).json({ status: 400, message: "Passes not found" });
  }
};

// detailPass
export const detailPass = async (req, res) => {
  try {
    const passDetail = await Pass.findById(req.query.Id);

    return res.status(200).json({
      status: 200,
      data: passDetail,
      message: "Fetched pass",
    });
  } catch (error) {
    console.error("Error:", error); // Log any errors that occur
    return res.status(400).json({ status: 400, message: "Pass not found" });
  }
};
