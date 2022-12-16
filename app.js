const express = require("express");
const app = express();
require("dotenv").config();
const { exec } = require("child_process");
const rmSevrDir = require('./scripts/rm_sevr_dir');
const cloneRepoAtDir = require('./scripts/clone_repo_at_dir');
const insNodeDir = require('./scripts/ins_node_dir');
const buildENV = require('./scripts/build_ENV');
const port = process.env.PORT || 3000;
const marvaENV = require('./marvaENV');

app.get("/", (req, res) => {
  res.send("Welcome to the continuous deployment server :)");
});

app.get("/deploy/marva", async (req, res) => {
  console.log('Removing old app');
  await rmSevrDir(marvaENV.APP_NAME);
  console.log('Cloning new app from repo');
  await cloneRepoAtDir(marvaENV.REPO, marvaENV.APP_NAME);
  console.log('Installing new repo');
  await insNodeDir(marvaENV.APP_NAME);
  console.log('Building new ENV file');
  await buildENV(marvaENV.APP_NAME);
  res.send('CD Server deploy retailer');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
