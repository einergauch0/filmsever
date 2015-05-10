// inicializacion de variables
var express = require('express')
var mongoose = require('mongoose')
var app = express();

// se realiza el llamado a la base de datos
mongoose.connect('mongodb://localhost/films', function(err, res){
	if(err) console.log("Error en la conexión a la BD "+err)
	else console.log("Conexión exitosa a la BD");	
});

// permite usar los verbos http
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/',function(req, res){
	res.send("Hola mundo!!");
});

require('./routes')(app);

app.listen(5000);
console.log("Servidor escuchando");