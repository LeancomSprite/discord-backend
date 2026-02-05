import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

let views = 0;

app.get("/view", (req, res) => {
  views++;
  res.json({ views });
});

app.get("/", (req, res) => {
  res.send("Backend do contador funcionando");
});

app.listen(3000, () => {
  console.log("Contador rodando");
});
