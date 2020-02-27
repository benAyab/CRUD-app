var express = require('express');
var bodyParser = require('body-parser');
var log  = require('morgan')('dev');
var join = require('path').join;


const PORT = require('./config/properties').PORT;
var db = require('./config/database');
var articleRoutes = require('./api/artciles/articles.routes');
var app  = express();


//bodyParser init
var bodyParserJson = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

//init express router
var router = express.Router();

//launch mongoDB connectivity function 
db();

//config of app.use()
app.use(log);
app.use(bodyParserJson);
app.use(bodyParserURLEncoded);

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origine", "*");
    res.setHeader("Access-Control-Allow-Credentials", "*");
    res.setHeader("Access-Control-Allow-Methods","DELETE,GET,HEAD,OPTIONS,POST,PUT");
    next();
})
app.use('/api', router);
app.get('/', function(req, res){
        res.sendFile(join(__dirname, '/index.html'))
    });

articleRoutes(router);
app.listen(PORT, (req, res) =>{
    console.log(" Server running on ", PORT);
})