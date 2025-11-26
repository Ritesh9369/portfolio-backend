import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();
const app = express();

// 🔥 Correct CORS (Netlify + Railway)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ritesh-portfolio-frontend.netlify.app"
    ],
    methods: ["GET", "POST"]
  })
);

app.use(express.json());

// 🔍 Test route
app.get("/", (req, res) => {
  res.send("Portfolio Email Backend Running ✔");
});

// 📩 Mail API route
app.use("/api", mailRoutes);

// 🚀 Railway MUST use env PORT (no fallback!)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
