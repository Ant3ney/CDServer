const express = require("express");
const app = express();
require("dotenv").config();
const { exec } = require("child_process");
const rmSevrDir = require('./scripts/rm_sevr_dir');
const cloneRepoAtDir = require('./scripts/clone_repo_at_dir');
const insNodeDir = require('./scripts/ins_node_dir');
const confAppPrmis = require('./scripts/conf_app_prmis');
const confPM2App =  require('./scripts/conf_pm2_app');
const buildENV = require('./scripts/build_ENV');
const port = process.env.PORT || 3000;
const marvaENV = require('./marvaENV');
const delAireENV = require('./delaireENV');
const delaireemailENV = require('./delaireemailENV');
const singularityemailENV = require('./singularityemailENV');
const stopPM2App = require('./scripts/stop_pm2_app');

app.get("/", (req, res) => {
  res.send("Welcome to the continuous deployment server :)");
});

app.post("/deploy/marva", async (req, res) => {
	await configureAppFromENV(marvaENV);
	res.send('CD Server deploy ' + marvaENV.APP_NAME);
});
app.post("/deploy/delaire", async (req, res) => {
	await configureAppFromENV(delAireENV);
	res.send('CD Server deploy' + delAireENV.APP_NAME);
});
app.post("/deploy/delaireemail", async (req, res) => {
        await configureAppFromENV(delaireemailENV);
        res.send('CD Server deploy' + delaireemailENV.APP_NAME);
});
app.post("/deploy/singularityemail", async (req, res) => {
        await configureAppFromENV(singularityemailENV);
        res.send('CD Server deploy' + singularityemailENV.APP_NAME);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

async function configureAppFromENV(ENV){
	console.log('Stoping exzisting PM2 App');
	await stopPM2App(ENV.APP_NAME);
	console.log('Removing old app');
	await rmSevrDir(ENV.APP_NAME);
	console.log('Cloning new app from repo');
	await cloneRepoAtDir(ENV.REPO, ENV.APP_NAME);
	console.log('Installing new repo');
	await insNodeDir(ENV.APP_NAME);
	console.log('Reconfiguring app directory permissions');
	await confAppPrmis(ENV.APP_NAME);
	console.log('Building new ENV file');
	await buildENV(ENV.APP_NAME);
	console.log('Configuring pm2 to app ' + ENV.APP_NAME);
	await confPM2App(ENV);
}

