import express from "express";
import cors from "cors";
import wasteRoutes from "./routes/wasteRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/waste", wasteRoutes);
app.use("/api/categories", categoryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

export default app;
