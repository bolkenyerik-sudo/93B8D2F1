const express = require("express");
const { readFileSync } = require("fs");

const app = express();
const PORT = 3000;

app.get("/adatok", (req, res) => {
  const raw = readFileSync("./src/data.json", "utf-8");
  const json = JSON.parse(raw);
  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});