import Category from "../models/Category.js";

export const classifyWasteByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) 
      return res.status(400).json({ message: "Please provide a waste name" });

    const lowerName = name.toLowerCase().trim();

    const categories = await Category.find();

    const matchedCategory = categories.find(cat => 
      Array.isArray(cat.keywords) && cat.keywords.some(k => {
        const keyword = k.toLowerCase().trim();
        return keyword.includes(lowerName) || lowerName.includes(keyword);
      })
    );

    if (!matchedCategory) {
      return res.json({
        name,
        category: "Unknown",
        biodegradable: "Unknown",
        disposalInstructions: "Consult local disposal guidelines."
      });
    }

    return res.json({
      name,
      category: matchedCategory.category,
      biodegradable: matchedCategory.biodegradable ? "Biodegradable" : "Non-Biodegradable",
      disposalInstructions: matchedCategory.disposalInstructions
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error classifying waste" });
  }
};
