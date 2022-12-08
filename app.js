const express = require("express");
const app = express();
const { exec } = require("child_process");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the continuous deployment server");
});

app.get("/deploy/marvasBackend", (req, res) => {
  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send("In marvasBackend");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
