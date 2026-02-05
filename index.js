import express from "express";

const app = express();
let views = 0;

app.get("/contador", (req, res) => {
  views++;
  res.json({ views });
});

app.listen(3000);
