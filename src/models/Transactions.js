import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  type: { 
    type: String, 
    enum: ["deposit", "withdrawal"], 
    required: true 
  },
  name: { 
    type: String, 
    enum: ["USDT", "Litecoin", "Ethereum", "Bitcoin"], 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  balanceAfterTransaction: { 
    type: Number, 
    required: true 
  }
});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
