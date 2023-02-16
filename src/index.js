// Packages
const express = require('express');
const chalk = require('chalk');

// Express
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {});

// Start listening
app.listen(3000, () => {
    console.log(
        chalk.green('INFO') +
        ' ' +
        chalk.blue('listening on port 3000')
    );
});