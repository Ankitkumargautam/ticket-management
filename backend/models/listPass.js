import mongoose from "mongoose";

const listPassSchema = new mongoose.Schema(
    {
      pass: { type: mongoose.Schema.Types.ObjectId, ref: 'Pass', required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const ListPass = mongoose.models.ListPass || mongoose.model("ListPass", listPassSchema);
  
  export default ListPass;
