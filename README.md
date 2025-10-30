♻ #Waste Segregation & Classification System
A smart web app to help users classify and segregate household waste. The system identifies waste types like food, paper, plastic, glass, and organic waste and provides clear disposal instructions, promoting responsible waste management.

🧩 What it does

--> Enter a waste item name (e.g., "banana", "plastic bottle", "glass jar")

--> The system classifies the item into the correct category

--> Shows whether the waste is biodegradable or non-biodegradable

--> Provides disposal instructions for each waste type

--> Dynamic database — easily add new waste items and keywords

⚙ Setup

You'll need Node.js (v18+) and MongoDB. Then:

Install backend dependencies
npm install

Start the backend server
node server.js

Frontend (React)
cd ../frontend npm install npm run dev

Backend runs on http://localhost:5000

Frontend runs on http://localhost:5173

📝 How to use
Type the name of a waste product in the input field

--> Click Submit

--> Get a classification result including:

--> Category (Food Waste, Plastic, Glass, Paper, etc.)

--> Biodegradable status

--> Disposal instructions

🛠 Customizing Waste Data
Edit the seedData.js file to add new waste items:

export const defaultCategories = [ { name: "banana",

keywords: ["banana", "banana peel", "banana skin"],

category: "Food Waste",

biodegradable: true,

disposalInstructions: "Compost or dispose of in organic waste bin"
},

{ name: "plastic bottle",

keywords: ["plastic bottle", "bottle"],

category: "Plastic Waste",

biodegradable: false,

disposalInstructions: "Recycle in plastic bin"
}, ];

💻 Tech Stack
--> Backend: Node.js, Express, MongoDB, Mongoose

--> Frontend: React.js

--> APIs: Axios for HTTP requests

--> Data Storage: MongoDB for waste categories and keywords

⚠ Note
This app is for educational purposes and suggested disposal guidance only.

Always follow local waste disposal regulations.
