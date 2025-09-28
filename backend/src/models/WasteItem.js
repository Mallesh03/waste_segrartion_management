import mongoose from "mongoose";

const wasteItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    description: { type: String },
    type: { type: String }, 
    biodegradable: { type: String }, 
    disposalInstructions: { type: String },
  },
  { timestamps: true }
);

const WasteItem = mongoose.model("WasteItem", wasteItemSchema);
export default WasteItem;
