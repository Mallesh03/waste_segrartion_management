import Category from "../models/Category.js";

export const defaultCategories = [
  {
    name: "banana",
    keywords: ["banana", "banana peel", "banana skin"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },
  {
    name: "apple",
    keywords: ["apple", "apple core", "apple peel"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },
  {
    name: "orange",
    keywords: ["orange", "orange peel", "orange skin"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },

  {
    name: "carrot",
    keywords: ["carrot", "carrot peel", "carrot skin"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },
  {
    name: "potato",
    keywords: ["potato", "potato peel", "potato skin"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },
  {
    name: "tomato",
    keywords: ["tomato", "tomato skin", "tomato peel"],
    category: "Food Waste",
    biodegradable: true,
    disposalInstructions: "Compost or dispose of in organic waste bin"
  },

  {
    name: "newspaper",
    keywords: ["newspaper", "paper", "magazine", "books", "notebook"],
    category: "Paper Waste",
    biodegradable: true,
    disposalInstructions: "Recycle in paper recycling bin"
  },
  {
    name: "cardboard",
    keywords: ["cardboard", "box", "carton"],
    category: "Paper Waste",
    biodegradable: true,
    disposalInstructions: "Recycle in paper recycling bin"
  },

  {
    name: "plastic bottle",
    keywords: ["plastic", "plastic bottle", "plastic container", "plastic jar"],
    category: "Plastic Waste",
    biodegradable: false,
    disposalInstructions: "Recycle in plastic recycling bin"
  },
  {
    name: "plastic bag",
    keywords: ["plastic bag", "bag", "polybag", "shopping bag"],
    category: "Plastic Waste",
    biodegradable: false,
    disposalInstructions: "Recycle in plastic recycling bin"
  },
  {
    name: "plastic cup",
    keywords: ["plastic cup", "cup", "plastic glass"],
    category: "Plastic Waste",
    biodegradable: false,
    disposalInstructions: "Recycle in plastic recycling bin"
  },

  {
    name: "glass bottle",
    keywords: ["glass", "glass bottle",  "glass jar", "jar"],
    category: "Glass Waste",
    biodegradable: false,
    disposalInstructions: "Cover with cloth and dispose in safe area"
  },
  {
    name: "glass cup",
    keywords: ["glass cup", "cup", "drinking glass"],
    category: "Glass Waste",
    biodegradable: false,
    disposalInstructions: "Cover with cloth and dispose in safe area"
  },

  {
    name: "aluminum can",
    keywords: ["aluminum", "aluminum can", "can", "tin can"],
    category: "Metal Waste",
    biodegradable: false,
    disposalInstructions: "Recycle in metal recycling bin"
  },
  {
    name: "battery",
    keywords: ["battery", "AA battery", "AAA battery", "button cell"],
    category: "Hazardous Waste",
    biodegradable: false,
    disposalInstructions: "Dispose at hazardous waste collection points"
  },
  {
    name: "cigarette",
    keywords: ["cigarette", "cigarette butt", "smoke"],
    category: "Non-Biodegradable Waste",
    biodegradable: false,
    disposalInstructions: "Dispose in non-biodegradable waste bin"
  }
];

export const seedCategories = async () => {
  try {
    for (const cat of defaultCategories) {
      const existing = await Category.findOne({ name: cat.name });
      if (!existing) {
        await Category.create(cat);
        console.log(`Seeded ${cat.name}`);
      } else {
        console.log(`Already exists: ${cat.name}`);
      }
    }
    console.log("Done seeding categories ✅");
  } catch (err) {
    console.error("Error seeding categories:", err);
  }
};
