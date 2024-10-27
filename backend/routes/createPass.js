import express from "express";
import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { errorJoiMiddleware } from "../config/errorMiddleware";
import { createPass } from "../controllers/pass";

const validator = createValidator({ passError: true });
const router = express.Router();

const driverSchema = Joi.object({
  name: Joi.string().required().label("Name"),
  Id: Joi.string().required().label("Id"),
  licenseNo: Joi.string().required().label("License Number"),
  contact: Joi.string().required().label("Contact"),
  alcohol: Joi.boolean().default(true).label("Alcohol"),
  mask: Joi.boolean().default(true).label("Mask"),
  dress: Joi.boolean().default(false).label("Dress"),
  image: Joi.string()
    .allow("")
    .uri()
    .default(
      "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75"
    )
    .label("Image"),
});

const conductorSchema = Joi.object({
  name: Joi.string().required().label("Name"),
  Id: Joi.string().required().label("Id"),
  licenseNo: Joi.string().required().label("License Number"),
  contact: Joi.string().required().label("Contact"),
  alcohol: Joi.boolean().default(true).label("Alcohol"),
  mask: Joi.boolean().default(true).label("Mask"),
  dress: Joi.boolean().default(false).label("Dress"),
  image: Joi.string()
    .allow("")
    .uri()
    .default(
      "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75"
    )
    .label("Image"),
});

const passSchema = Joi.object({
  routeName: Joi.string().required().label("Route Name"),
  originDepot: Joi.string().required().label("Origin Depot"),
  destinationDepot: Joi.string().required().label("Destination Depot"),
  targetIncome: Joi.number().required().label("Target Income"),
  actualInTime: Joi.string().allow(""),
  actualIncome: Joi.number().allow(""),
  departure: Joi.string().required().label("Departure"),
  arrival: Joi.string().required().label("Arrival"),
  travelDate: Joi.string().isoDate().required().label("Travel Date"),
  busNumber: Joi.string().required().label("Bus Number"),
  dutySlipNo: Joi.string().required().label("Duty Slip Number"),
  issueDiesel: Joi.string().required().label("Issue Diesel"),
  schOutTime: Joi.string().required().label("Scheduled Out-Time"),
  schTrip: Joi.string().required().label("Scheduled Trip"),
  schKm: Joi.number().required().label("Scheduled Kilometers"),
  drivers: Joi.array().items(driverSchema).min(1).required().label("Drivers"),
  conductors: Joi.array()
    .items(conductorSchema)
    .min(1)
    .required()
    .label("Conductors"),
});

router.post(
  "/createPass",
  validator.body(passSchema, {
    joi: { convert: true, allowUnknown: false },
    errorHttpStatusCode: 400,
  }),
  createPass
);

// Custom error handler middleware
router.use(errorJoiMiddleware);

export default router;
