const express = require('express');
const randomItem = require('random-item');
const bodyParser = require('body-parser');
const app = express();

console.log("Server listening : localhost:3000");

// Use Pug to render views
app.set('view engine', 'pug');

// Serve assets from the public folder
app.use(express.static('public'));

// Decode form data
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON body
app.use(bodyParser.json());

// Render the home page
app.get('/', (req, res) => {
    // Express will look for a page named index.pug
    // in the "views" folder so you should have a "views/index.pug" file
    res.render('index');
});

app.get('/:choice', (req, res) => {
    // req.params.username holds the username so you could
    // get the corresponding user from the database here
    const playerChoice = choices.find(choices);
    const pcChoice = randomItem(choices);


    


    let winner;
    res.render("play")
});

app.listen(3000);