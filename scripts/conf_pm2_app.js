const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');
const startPM2App = require('./start_pm2_app.js');

const configurePM2App = async (env) => {
        return new Promise(async (res, rej) => {
		console.log(`Starting ${env.APP_NAME} app with pm2`);
		await startPM2App(env);
		res();
	});
};

module.exports = configurePM2App;
