// Import de Mongoose 
var mongoose = require('mongoose');

// Module pour colorer les messages affichés à la console
var chalk = require('chalk'); 
var DBurl = require('./properties').DB;

var connected = chalk.bold.blue;
var error = chalk.bold.red;
var disconnected = chalk.bold.yellow;
var terminated = chalk.bold.magenta;

module.exports = function(){
    mongoose.connect(DBurl, {useNewUrlParser: true});
    mongoose.connection.on('connected', function(){
        console.log(connected("Connected via url: ",DBurl))
    })
    mongoose.connection.on('error', function(){
        console.log(error("an error occured due to "))
    })
    mongoose.connection.on('disconnected', function(){
        console.log(disconnected('Disconneted from Mongodb'))
    })
    process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log(terminated('Disconneted from Mongodb due to application exit'));
			process.exit(0);
		})  
    })    
}