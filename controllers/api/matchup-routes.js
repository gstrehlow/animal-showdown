const router = require('express').Router();
const { Matchup } = require('../../models');

router.get('/', (req, res) => {
    Matchup.findAll()
    .then(dbMatchupData => res.json(dbMatchupData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

module.exports = router;