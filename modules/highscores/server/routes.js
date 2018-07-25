module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index', {
			socketio_client_js: `${process.env.API_BASEURL}/socket.io/socket.io.js`
		});
	});

	require('./api')(app);
};
