const timeFilter = require('../timeFilter');
const response = require('../response');

const Highscores = require('../../../schemas/highscore');

function searchHighscores(params) {
	return Highscores
		.find(params)
		.select({ _id: 0, __v: 0, updatedAt: 0 })
		.limit(10)
		.sort({ score: -1 });
}

module.exports = (app) => {
	app.get('/api/v1/scores/top10', (req, res) => {
		res.redirect('top10/all-time');
	});

	app.get('/api/v1/scores/top10/:filter', (req, res) => {
		const params = timeFilter(req.params.filter);
		if (params === false) {
			response(req, res, `"${req.params.filter}" filter is invalid.`);
		}

		return searchHighscores(params).then(docs => response(req, res, docs));
	});

	app.get('/api/v1/scores/top10/:filter/:version', (req, res) => {
		const params = timeFilter(req.params.filter);
		if (params === false) {
			response(req, res, `"${req.params.filter}" filter is invalid.`);
		}
		params.version = req.params.version;

		return searchHighscores(params).then(docs => response(req, res, docs));
	});
};
