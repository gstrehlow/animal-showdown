const router = require("express").Router();
const { Vote } = require('../../models');
const auth = require("../../utils/auth");

//test like this: localhost:3001/api/votes
//expects: { "vote": INT, "matchup_id": INT, "user_id": INT }
router.post('/', auth, (req, res) =>{ //vote on a matchup (triggered in a client side js script)
    const user_id = req.session.user_id;
    const {vote, matchup_id} = req.body;
    console.log(req.locals.session)
    Vote.findOne({where: {matchup_id, user_id}})
    .then(voteSearch =>{
        if (voteSearch === null){ //user hasn't voted yet on this matchup
            Vote.create({
                vote: vote,
                matchup_id: matchup_id,
                user_id: user_id
            })
            .then(userVote => res.json(userVote)) //**trigger a matchup get here to refresh page**
            .catch(err => {
                console.log('Could not create vote!');
                res.status(500).json(err);
            })
        }
        else res.status(409).json('User has already voted on this matchup!');
    })
    .catch(err => {
        console.log('Duplicated check data not found!');
        res.status(500).json(err);
    })
})

module.exports = router;