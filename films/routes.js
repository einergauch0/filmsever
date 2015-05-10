module.exports = function(app){
	// se carga el esquema desde el archivo film
	var Film = require('./film');

	//GET
	findAllFilms = function(req, res){
		Film.find(function(err, films){
			if(!err) res.send(films);
			else console.log("Error buscar todos: "+err);
		});
	};

	//GET
	findByID = function(req, res){
		Film.findById(req.params.id, function(err, film){
			if(!err) res.send(film);
			else console.log("Error buscar todos: "+err);
		});

	};

	// POST
	addFilm = function(req, res){
       console.log('POST');
       console.log(req.body);
		
		var film = new Film({
			title: req.body.title,
	        year: req.body.year,
			urlTrailer: req.body.urlTrailer,
			description: req.body.description
		}); 

		film.save(function(err){
			if(!err) console.log('Película salvada');
			else console.log('Error salvando la película '+err);
		});

		res.send(film);
	};

	// PUT update
	updateFilm = function(req, res){

		Film.findById(req.params.id, function(err, film){
			
			film.title = req.body.title;
			film.year = req.body.year;
			film.urlTrailer = req.body.urlTrailer;
			film.description = req.body.description;

			film.save(function(err){
				if(!err) console.log('Película actualizada');
				else console.log('Error actualizando la película '+err);
			});

		});

	};

	// Delete
	deleteFilm = function(req, res){
		Film.findById(req.params.id, function(err, film){
			film.remove(function(err){
				if(!err) console.log('Película eliminada');
				else console.log('Error eliminando la película '+err);
			})
		});
		
	};

	// API Routes
	app.get('/film', findAllFilms);
	app.get('/film/:id', findByID);
	app.post('/film', addFilm);
	app.put('/film/:id', updateFilm);
	app.delete('/film/:id', deleteFilm);

} 