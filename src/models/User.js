import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  balance: { type: Number, required: true },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction"
  }],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
