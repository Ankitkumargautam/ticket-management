import mongoose from "mongoose";

const passSchema = new mongoose.Schema(
  {
    departureLocation: {
      type: String,
      required: true,
    },
    arrivalLocation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pass = mongoose.models.Pass || mongoose.model("Pass", passSchema);

export default Pass;
