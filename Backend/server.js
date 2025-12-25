import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/equipment", equipmentRoutes);

app.get("/", (req, res) => {
  res.send("Equipment Tracker API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
