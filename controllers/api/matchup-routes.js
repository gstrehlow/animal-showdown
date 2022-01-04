const router = require("express").Router();
const { Matchup, Comment, Vote } = require('../../models');

//test like this: localhost:3001/api/matchups
//expects: { "matchup_id": INT, "user_id": INT }
router.get('/', (req, res) =>{
    const {matchup_id, user_id} = req.body;
    Matchup.findOne({where: {id: matchup_id}})
    .then(matchupData =>{
        if (matchupData !== null){ //matchup exists
            Vote.findOne({where: {matchup_id: matchup_id, user_id: user_id}})
            .then(voteSearch =>{
                const hasVoted = (voteSearch !== null); //user hasVoted true or false
                Vote.findAll({
                    where: {matchup_id: matchup_id},
                    attributes: ['vote'] //only need to know the vote counts
                })
                .then(voteData =>{
                    Comment.findAll({
                        where: {matchup_id: matchup_id},
                        attributes: ['comment', 'color', 'username', 'createdAt']
                        //users only need to know these
                    })
                    .then(commentData =>{
                        let blues = 0
                        for (let i = 0; i < voteData.length; i++){
                            if (voteData[i].vote === 1) blues++;
                        }
                        let reds = voteData.length - blues;
                        const sendData = {hasVoted, matchupData, blues, reds, commentData};
                        //**render the matchup + vote totals and comments page**
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
                console.log('Matchup data not found!');
                res.status(500).json(err);
            })
        }
        else res.status(409).json('No matchup with that ID!');
    })
    .catch(err => {
        console.log('Matchup data not found!');
        res.status(500).json(err);
    })
})

module.exports = router;