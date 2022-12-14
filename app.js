const express = require("express");
const app = express();
require("dotenv").config();
const { exec } = require("child_process");
const rmSevrDir = require('./scripts/rm_sevr_dir');

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the continuous deployment server :)");
});

app.get("/deploy/marvasBackend", async (req, res) => {
  
  await rmSevrDir('delme');
  res.send('CD Server deploy retailer');
  
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
