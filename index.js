const { fork } = require('child_process');
const chalk = require('chalk');
const express = require('express');
const app = express();
const __path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

async function start() {
  const child = fork('./main.js');

  child.on("message", msg => {
    console.log('child to parent =>', msg);
  });

  child.on("close", () => {
    console.log(chalk.black(chalk.bgRed(`Arch md is restarting..`)));
    start();
  });

  child.on("exit", () => {});

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:` + PORT);
  });
}

start();