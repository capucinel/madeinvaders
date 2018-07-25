game.Title = {
	version: game.constants.version,
	version_date: game.constants.version_date,

	draw(renderer, titleFont, versionFont, titleHeight = 50, versionHeight = 130) {
		titleFont.draw(renderer, 'Mehd\'Invader', me.game.viewport.width / 2, titleHeight);
		versionFont.draw(renderer, `version 0 - 25 juillet 2018`, me.game.viewport.width / 2, versionHeight);
	}
};
