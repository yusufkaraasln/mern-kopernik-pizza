import mongoose from "mongoose";

const ProductSchcema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 50,
      required: true,
    },
    description: {
      type: String,
      maxlength: 500,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extras: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchcema);
