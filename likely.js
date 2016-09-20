var express = require('express');
var app = express();
var Recommender = require('likely');

app.get('/', function (req, res) {
	var inputMatrix = [ [ 9, 7, 6, 6],
	                    [ 1, 9, 0, 10],
	                    [ 0, 0, 6, 9]
	                  ];

	var rowLabels = ['Roudy', 'Tracy', 'Rawan'];
	var colLabels = ['Perfect Illusion', 'The Greatest', 'Closer', 'Blow Your Mind'];

	var model = Recommender.buildModel(inputMatrix, rowLabels, colLabels);

	var recommendations = model.recommendations('Rawan');

  	res.send(recommendations);
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});

