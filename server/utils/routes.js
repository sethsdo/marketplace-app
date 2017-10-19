const users = require('./../controllers/users.js');
const {resolve} = require('path');


module.exports = function (app) {
	//Set up routes
	// Index route
	console.log("in routes right now")
	app.get('/api/inSession', users.index);
	app.post('/api/create', users.register);
	app.post('/api/login', users.login);
	app.get('/api/dashboard', users.dashboard);
	app.get('/api/logout', users.logout);

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};
