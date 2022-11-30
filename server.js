const express = require('express')
const app = express()
const port = 3000

const eightBallAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

let calculatedTip = 0
let arrayVariable = 0
let possibleFibNumber = 0
let evaluator = 0
let fibArray = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

app.get('/greeting/:name', (req, res) => {
    res.send('Hey there ' + req.params.name + '!')
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    calculatedTip = req.params.total * (req.params.tipPercentage / 100)
    res.send('If total is ' + req.params.total + ', then tip is ' + calculatedTip + '.')
});

app.get('/magic/:userQuestion', (req, res) => {
    arrayVariable = randomNumber(0,19)
    res.send(`<h1>`+ req.params.userQuestion + '? ' + eightBallAnswers[arrayVariable] + `</h1>`)
});

app.listen(port,() => {
    console.log('Listening on port' , port)
});