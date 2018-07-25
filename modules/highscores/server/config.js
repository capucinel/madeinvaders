const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

module.exports = (app) => {
	app.use(helmet());
	app.use(morgan('[:date[clf]] :method :url :status :response-time ms - :res[content-length]'));

	app.engine('html', require('ejs').renderFile);

	app.set('view engine', 'html');

	const allowedOrigins = [
		'http://localhost:8000',
		'http://franciscoknebel.github.io',
		'https://franciscoknebel.github.io'
	];

	app.use(cors({
		origin(origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) {
				return callback(null, true);
			}

			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = `The CORS policy for this site does not allow access from the specified "${origin}" Origin.`;
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		}
	}));
};
