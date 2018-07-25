# Space Invader - Highscores

A MelonJS Space Invaders-like space shooter game - highscores server.
You can play the latest stable release right here in your browser, at https://franciscoknebel.github.io/spaceinvader/.

[![Travis](https://travis-ci.org/FranciscoKnebel/spaceinvader-highscores.svg?branch=master)](https://travis-ci.org/FranciscoKnebel/spaceinvader-highscores)

[![Greenkeeper badge](https://badges.greenkeeper.io/FranciscoKnebel/spaceinvader-highscores.svg)](https://greenkeeper.io/)

## dotenv
```
  PORT=
  API_BASEURL=
  MONGODB_URI=
```


## API - v1
### Scores
Results may have time filter options.
The valid filters are: `all-time`, `today`, `since-yesterday`, `last-week`, `last-month`, `last-semester` and `last-year`.
If no filter is provided, defaults to all-time.

---
#### User
##### `/api/v1/scores/user/:username/:filter`
Returns the best scores from a username, according to the time filter provided.
##### `/api/v1/scores/user/:username/:filter/:version`
Returns the best scores from a username, according to the time filter provided.
Version corresponds to a version of Space Invader ( ex: _0.1.4_ ).

---
#### TOP 10
##### `/api/v1/scores/top10/:filter`
Returns the top10 best scores, according to the time filter provided.

##### `/api/v1/scores/top10/:filter/:version`
Returns the top10 best scores, according to the time filter provided.
Version corresponds to a version of Space Invader ( ex: _0.1.4_ ).

---
### Versions
Finding out all versions which have scores.

---
#### Find
##### `/api/v1/versions/find`
Returns an array of all versions found on the highscores.

##### `/api/v1/versions/find/:filter`
// TODO


-------------------------------------------------------------------------------

## Credits
### Authors
<table style="text-align: center;">
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/FranciscoKnebel?s=75">
      <br>
      <a href="https://github.com/FranciscoKnebel">Francisco Knebel</a>
    </td>
    <td>
      <a href="https://github.com/FranciscoKnebel/spaceinvader-highscores/commits?author=FranciscoKnebel">Contributions</a> by FranciscoKnebel
    </td>
  </tr>
</table>

See also the full list of [contributors](https://github.com/FranciscoKnebel/spaceinvader-highscores/contributors) who participated in this project.

## License
This project is licensed under the _MIT License_ - see the [LICENSE.md](LICENSE.md) file for details.
