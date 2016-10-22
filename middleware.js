// Use module exports to expose middleware

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

module.exports = middleware;