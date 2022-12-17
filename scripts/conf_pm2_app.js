const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');
const stopPM2App = require('./stop_pm2_app');
const isPM2RningApp = require('./is_pm2_rnig_app.js');

const configurePM2App = async (app) => {
        return new Promise(async (res, rej) => {
		console.log('Checking if PM2 is already running app');
		const isAlreadyRunningApp = await isPM2RningApp(app);
		if(isAlreadyRunningApp){
			console.log('Stoping exzisting PM2 App');
	        	await stopPM2App(app);
		}
		res();
	});
};

module.exports = configurePM2App;
