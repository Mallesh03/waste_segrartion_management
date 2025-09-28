import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  keywords: { type: [String], default: [] }, 
  category: { type: String, required: true }, 
  biodegradable: { type: Boolean, required: true },
  disposalInstructions: { type: String, required: true },
});

export default mongoose.model("Category", categorySchema);
