import express from "express";
import cors from "cors";
import flowerData from "./flowers.json";

// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

// endpoint for getting all flowers
app.get("/flowers", (req, res) => {
  res.json(flowerData);
});

//endpoint for getting a specific flower by id
app.get("/flowers/:id", (req, res) => {
  const flower = flowerData.find(
    (flower) => flower.id === Number(req.params.id)
  );
  res.json(flower);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
