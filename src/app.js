
import express from "express";
import businessRoutes from "./routes/businessRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Business Discovery API is running",
  });
});

app.use("/api/businesses", businessRoutes);

export default app;
