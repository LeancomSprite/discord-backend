import express from "express";

const app = express();
app.use(express.json());

let views = 0;

// rota do contador
app.get("/contador", (req, res) => {
  views++;
  res.json({ views });
});

// porta dinâmica (OBRIGATÓRIO no Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
