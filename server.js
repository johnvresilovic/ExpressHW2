const express = require('express');
const app = express();
const port = 3000;
let calculatedTip = 0

app.get('/greeting/:name', (req, res) => {
    res.send('Hey there ' + req.params.name + '!');
});

app.listen(port,() => {
    console.log('Listening on port' , port);
});