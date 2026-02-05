import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
let views = 0;

const USER_ID = "1462586784067358894";

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
app.get("/view", (req, res) => {
  views++;
  res.json({ views });
});
