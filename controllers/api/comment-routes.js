const router = require("express").Router();
const { Comment, Vote, User } = require("../../models");
const auth = require("../../utils/auth");

//test like this: localhost:3001/api/comments
//expects: { "comment": STRING, "matchup_id" : INT, "user_id": INT }
router.post("/", auth, (req, res) => {
  //vote on a matchup (triggered in a client side js script)
  const { comment, matchup_id } = req.body;
  Vote.findOne({ where: { matchup_id: matchup_id, user_id: req.session.id } }).then(
    (voteSearch) => {
      if (voteSearch !== null) {
        //user has voted on this matchup, can comment
        //1 = blue, 2 = red (rendered client side)
        if (voteSearch.vote === 1 || 2) {
          color = voteSearch.vote;
          User.findOne({ where: { id: req.session.id } })
            .then((userSearch) => {
              const username = userSearch.username;
              Comment.create({
                comment: comment,
                color: color,
                matchup_id: matchup_id,
                user_id: req.session.user_id,
                username: username,
              }) //**do a matchup route get request after this, it will render comments and votes**
                .then((commentData) => res.json(commentData))
                .catch((err) => {
                  console.log("Could not post comment!");
                  res.status(500).json(err);
                });
            })
            .catch((err) => {
              console.log("Could not find username!");
              res.status(500).json(err);
            });
        } else res.status(409).json("User has not voted on this matchup!");
      } else res.status(409).json("User has not voted on this matchup!");
    }
  );
});

module.exports = router;
