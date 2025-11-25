import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Email Backend Running ✔");
});

// Routes
app.use("/api", mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
