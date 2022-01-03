const router = require("express").Router();
const { Vote, Comment } = require('../../models');

//test like this: localhost:3001/api/votes
//expects: { "vote": INT, "matchup_id": INT, "user_id": INT }
router.post('/', (req, res) =>{ //vote on a matchup (triggered in a client side js script)
    const {vote, matchup_id, user_id} = req.body;
    Vote.findOne({where: {matchup_id: matchup_id, user_id: user_id}})
    .then(voteDupeSearch =>{
        if (voteDupeSearch === null){ //user hasn't voted yet on this matchup
            Vote.create({
                vote: vote,
                matchup_id: matchup_id,
                user_id: user_id
            })
            .then(userVote =>{
                Vote.findAll({
                    where: {matchup_id: matchup_id},
                    attributes: ['vote'] //users only need to know the vote counts
                })
                .then(voteData =>{
                    Comment.findAll({
                        where: {matchup_id: matchup_id},
                        attributes: ['comment', 'color', 'username', 'createdAt']
                        //users only need to know these
                    })
                    .then(commentData =>{
                        const sendData = {voteData, commentData};
                        res.json(sendData);
                    })
                    .catch(err => {
                        console.log('Comment data not found!');
                        res.status(500).json(err);
                    })
                })
                .catch(err => {
                    console.log('Vote data not found!');
                    res.status(500).json(err);
                })
            })
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