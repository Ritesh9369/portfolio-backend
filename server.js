import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

// ✅ Correct CORS (Netlify + Mobile + Railway)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://riteshchauhan-portfolio.netlify.app",
      "https://ritesh-portfolio-frontend.netlify.app"
    ],
    methods: ["GET", "POST"]
  })
);

app.use(express.json());

// ✅ Test route (to check server is running)
app.get("/", (req, res) => {
  res.send("Portfolio Email Backend Running ✔");
});

// ✅ All API routes
app.use("/api", mailRoutes);

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
