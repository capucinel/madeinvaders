const Highscore = require('./schemas/highscore');

module.exports = (http) => {
	const io = require('socket.io')(http);

	const activeUsers = [];

	io.on('connection', (socket) => {
		// add user from active users list.
		activeUsers.push(socket.id);
		console.log(`User ${socket.id} connected.`);

		socket.on('disconnect', () => {
			// remove user from active users list.
			const index = activeUsers.indexOf(socket.id);
			activeUsers.splice(index, 1);

			console.log(`User ${socket.id} disconnected.`);
		});

		socket.on('new score', (score, level, player, mobile, version) => {
			if (version === '<<si_release_version>>') {
				// test version, only do a mock save.
				socket.emit('score saved');
			} else {
				const document = new Highscore({
					score,
					level,
					player,
					mobile,
					version
				});

				document.save()
					.then(() => {
						socket.emit('score saved');
					})
					.catch(() => {
						socket.emit('score save error');
					});
			}
		});
	});
};

// // Find all scores
// Highscore.find().sort({ score: -1 }).then((docs) => {
// 	console.log(docs);
// });
//
// // Delete all scores
// Highscore.remove({}, () => {
// 	console.log('done');
// });
