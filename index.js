import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const USER_ID = "COLE_SEU_USER_ID_AQUI";

app.get("/discord", async (req, res) => {
  const response = await fetch(
    `https://discord.com/api/v10/users/${USER_ID}`,
    {
      headers: {
        Authorization: `Bot ${process.env.BOT_TOKEN}`
      }
    }
  );

  const user = await response.json();

  res.json({
    id: user.id,
    username: user.username,
    avatar: user.avatar,
    flags: user.public_flags
  });
});

app.listen(3000, () => console.log("Rodando"));
