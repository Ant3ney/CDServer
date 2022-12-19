const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');
const startPM2App = require('./start_pm2_app');
const systemDPM2 = require('./systemd_pm2');
const setUpPM2Path = require('./set_up_pm2_path');
const savePM2 = require('./save_pm2');
const getPM2SystemStatus = require('./gt_pm2_sys_stat');

const configurePM2App = async (env) => {
        return new Promise(async (res, rej) => {
		console.log(`Starting ${env.APP_NAME} app with pm2`);
		await startPM2App(env);
		console.log(`Runing pm2 systemd`);
		await systemDPM2();
		console.log(`Setting up pm2 path`);
		await setUpPM2Path(); 
		console.log(`Saving pm2 config`);
		await savePM2();
		console.log(`Getting pm2 systemd status`);
		await getPM2SystemStatus();
		console.log(`Successfully configured pm2 app`);
		res();
	});
};

module.exports = configurePM2App;
