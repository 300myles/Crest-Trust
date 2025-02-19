import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  isAdmin: { type: Boolean, default: true },
  wallet: {},
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
