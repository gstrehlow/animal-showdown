const router = require("express").Router();
const { Vote } = require('../../models');
const auth = require("../../utils/auth");

//test like this: localhost:3001/api/votes
//expects: { "vote": INT, "matchup_id": INT }
router.post('/', auth, (req, res) =>{ //vote on a matchup (triggered in a client side js script)
    const user_id = req.session.user_id;
    const {vote, matchup_id} = req.body;
    console.log(user_id)
    Vote.findOne({where: {matchup_id, user_id}})
    .then(voteSearch =>{
        if (voteSearch === null){ //user hasn't voted yet on this matchup
            Vote.create({
                vote: vote,
                matchup_id: matchup_id,
                user_id: user_id
            })
            .then(userVote => res.json('vote received!'))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        }
        else res.json('User has already voted on this matchup!'); //shouldn't be 409, is a fine req
    })
    .catch(err => {
        console.log('Find one vote error!');
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;