const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const buildENV = async (app) => {
	const appENV = require(`../${app}ENV`);
	const envContents = [];
	for(let prop in appENV){
		const newENVLine = `${prop}=${appENV[prop]}`;
		envContents.push(newENVLine);
	}
	
	return new Promise((res, rej) => {
		const envText = envContents.join('\n');
		const envLocation = `/home/Anthony/${app}/.env`;
		fs.appendFile(`/home/Anthony/${app}/.env`, envText, err => {
			if (err) return rej(err);
			console.log(`Created env file at ${envLocation} with content ${envText}`);
			res(envText);
		});
	});
};

module.exports = buildENV;
