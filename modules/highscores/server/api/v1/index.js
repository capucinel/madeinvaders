module.exports = (app) => {
	// Scores
	require('./scores/top10')(app);
	require('./scores/user')(app);

	// Versions
	require('./versions/find')(app);
};
