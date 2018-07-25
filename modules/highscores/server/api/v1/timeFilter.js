const moment = require('moment');

module.exports = (filter) => {
	let searchParams = {};

	switch (filter) {
	case 'all-time':
		searchParams = {};
		break;
	case 'today':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').toDate()
			}
		};
		break;
	case 'since-yesterday':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'day').toDate()
			}
		};
		break;
	case 'last-week':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'week').toDate()
			}
		};
		break;
	case 'last-month':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'month').toDate()
			}
		};
		break;
	case 'last-semester':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(6, 'month').toDate()
			}
		};
		break;
	case 'last-year':
		searchParams = {
			createdAt: {
				$gte: moment().startOf('day').subtract(1, 'year').toDate()
			}
		};
		break;
	default:
		return false;
	}
	return searchParams;
};
