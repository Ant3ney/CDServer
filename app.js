const express = require("express");
const app = express();
require("dotenv").config();
const { exec } = require("child_process");
const rmSevrDir = require('./scripts/rm_sevr_dir');
const cloneRepoAtDir = require('./scripts/clone_repo_at_dir');
const insNodeDir = require('./scripts/ins_node_dir');
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the continuous deployment server :)");
});

app.get("/deploy/marva", async (req, res) => { 
  const localEnv = {PORT: '3002', APP_NAME: 'marva', REPO: 'https://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@github.com/Ant3ney/Marvalous-Marvas-Authentication-Server.git'};
  console.log('Removing old app');
  await rmSevrDir(localEnv.APP_NAME);
  console.log('Cloning new app from repo');
  await cloneRepoAtDir(localEnv.REPO, localEnv.APP_NAME);
  console.log('Installing new repo');
  await insNodeDir(localEnv.APP_NAME);
  res.send('CD Server deploy retailer');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
