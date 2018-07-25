const response = require('../response');

const Highscores = require('../../../schemas/highscore');

function searchHighscores(params) {
	return Highscores
		.find(params)
		.select({ version: 1, _id: 0 });
}

module.exports = (app) => {
	app.get('/api/v1/versions/find', (req, res) => {
		res.redirect('find/all');
	});

	app.get('/api/v1/versions/find/:filter', (req, res) => {
		let params;

		if (req.params.filter === 'all') {
			params = {};
		} else {
			// TODO: semver filtering, for checking major/minor/patch versions.
			response(req, res, `"${req.params.filter}" filter is invalid.`);
		}

		return searchHighscores(params)
			.then(docs => response(req, res, docs.map(item => item.version)));
	});
};
