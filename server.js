const express = require('express');
const app = express();
const port = 3000;
let calculatedTip = 0

app.get('/greeting/:name', (req, res) => {
    res.send('Hey there ' + req.params.name + '!');
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    calculatedTip = req.params.total * (req.params.tipPercentage / 100)
    res.send('If total is ' + req.params.total + ', then tip is ' + calculatedTip + '.');
});

app.listen(port,() => {
    console.log('Listening on port' , port);
});