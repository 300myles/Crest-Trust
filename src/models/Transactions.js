import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
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
    status: { 
      type: String, 
      enum: ["pending", "successful", "failed"], 
      default: "pending", // Transactions start as pending
      required: true 
    },
    balanceAfterTransaction: { 
      type: Number, 
      required: true 
    }
  },
  { timestamps: true } // Auto-adds createdAt & updatedAt
);

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
