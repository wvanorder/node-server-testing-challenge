const router = require('express').Router();
const VideoGames = require('./videoGamesModel.js');

router.get('/', (req, res) => {
    VideoGames.find()
      .then(games => {
          res.json(games)
      })
      .catch(err => {
          res.status(500).json({ message: 'could not load games, internal error' })
      })
});

router.post('/newgame', (req, res) => {
    const newGame = req.body;

    VideoGames.add(newGame)
      .then(game => {
          res.status(201).json({ success: `${game.name} has been successfully added to the archives. Hopefully ${game.protagonist} wins this time!`, game})
      })
      .catch(err => {
        res.status(500).json({ Error: 'the flood invaded during the add.', err })
      })
});


router.delete('/:id', (req, res) => {
    
    VideoGames.remove(req.params.id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: 'Your game was deleted.'});
        } else {
            res.status(404).json({ message: 'could not find game to delete' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'internal server error on your wonderful deletion' });
    })
});


module.exports = router;