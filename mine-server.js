var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		// new Date().toString()
		var date = new Date().toString();
		console.log('Request: '+ date + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));



//console.log(__dirname);
app.listen(port, function () {
	console.log('Express server started! at port no: '+port);
});