import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Id: { type: String, required: true },
  licenseNo: { type: String, required: true },
  contact: { type: String, required: true },
  alcohol: { type: Boolean, default: false },
  mask: { type: Boolean, default: false },
  dress: { type: Boolean, default: false },
  image: {
    type: String,
    default:
      "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75",
  },
});

const conductorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Id: { type: String, required: true },
  licenseNo: { type: String, required: true },
  contact: { type: String, required: true },
  alcohol: { type: Boolean, default: false },
  mask: { type: Boolean, default: false },
  dress: { type: Boolean, default: false },
  image: {
    type: String,
    default:
      "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75",
  },
});

const passSchema = new mongoose.Schema(
  {
    routeName: { type: String, required: true },
    originDepot: { type: String, required: true },
    destinationDepot: { type: String, required: true },
    targetIncome: { type: Number, required: true },
    actualInTime: { type: String },
    actualIncome: { type: Number },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    travelDate: { type: String, required: true },
    busNumber: { type: String, required: true },
    dutySlipNo: { type: String, required: true },
    issueDiesel: { type: String, required: true },
    schOutTime: { type: String, required: true },
    schTrip: { type: String, required: true },
    schKm: { type: Number, required: true },
    drivers: [driverSchema],
    conductors: [conductorSchema],
  },
  {
    timestamps: true,
  }
);

const Pass = mongoose.models.Pass || mongoose.model("Pass", passSchema);

export default Pass;
