var Plugin = module.exports = {};
Plugin.load = function (params, callback) {

	var router = params.router;
	var middleware = params.middleware;


	console.log(">>> params", params);

	// Define the function that renders the custom route.
	function render(req, res, next) {

		// Get whatever data you want to send to the template here.
		var data = {whatever: 33};

		// This is the path to your template without the .tpl, relative to the templates directory in plugin.json
		var template = 'homepage'

		// Send the page to the user.
		res.render(template, data);
	}

	// This actually creates the routes, you need two routes for every page.
	// The first parameter is the actual path to your page.
	router.get('/vsvhomepage', middleware.buildHeader, render);
	router.get('/api/vsvhomepage', render);

	callback();
};