import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
let views = 0;
app.get("/view", (req, res) => {
  views++;
  res.json({ views });
});
