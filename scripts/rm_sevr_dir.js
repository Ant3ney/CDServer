const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

//Generalize this file

const rmSevrDir = async (dirName) => {
  if(!dirName) {
    console.error('Must give name to rmSevrDir function. Got:', dirName);
    return;
  }
  const testDirectoryPath = path.join(__dirname, `../../${dirName}`);
  let results = null
  try{
    fs.access(testDirectoryPath, async function(error) {
      if (error) console.log("Directory does not exist.");
      else results = await fs.rmSync(testDirectoryPath, { recursive: true});
    });
    
  }
  catch(err){
    console.error(err);
  }

  console.log('results:', results);
  return results;
};

module.exports = rmSevrDir;
