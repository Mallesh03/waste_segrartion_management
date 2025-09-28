import WasteItem from "../models/WasteItem.js";

export const classifyWaste = async (wasteName) => {
  const item = await WasteItem.findOne({ name: wasteName }).populate("category");
  if (!item) {
    return { success: false, message: "Waste item not found" };
  }
  return { success: true, data: item };
};
