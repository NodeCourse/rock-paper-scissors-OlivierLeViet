const express = require('express');
const randomItem = require('random-item');
const bodyParser = require('body-parser');
const app = express();

const results = ['Égalité !', 'Gagné !', 'Perdu !'];
const choices = (['paper', 'rock', 'scissors']);

console.log("Server listening : localhost:3000");

const result = null;

function userVsComputer(result, userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        result = results[0];
    } else if (userChoice === "rock" && computerChoice === "paper") {
        result = results[2];
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result = results[1];
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        result = results[2];
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        result = results[1];
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        result = results[2];
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result = results[1];
    }

    return result;
}


app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:choice', (req, res) => {
    res.render("play", {choice: req.params.choice}, {result: req.params.result});
});

app.listen(3000);