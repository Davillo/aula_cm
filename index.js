
var express  = require('express');

var app = express();
var porta = 3000;

app.get('/', function(req, res){
    res.send('Fala ae!');
});

app.listen(porta, function (){
    console.log('Hello World na porta: '+porta);
});