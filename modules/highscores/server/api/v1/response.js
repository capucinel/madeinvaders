module.exports = (req, res, data) => {
	const responseObject = {
		request: {
			url: req.url,
			method: req.method,
			params: req.params
		},
		data
	};

	return res.send(responseObject);
};
