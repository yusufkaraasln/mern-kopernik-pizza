import mongoose from "mongoose";

const OrderSchcema = new mongoose.Schema(
  {
    customer: {
      type: String,
      maxlength: 50,
      required: true,
    },
  
    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    method: {
      type: Number,
      required: true
  },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchcema);
