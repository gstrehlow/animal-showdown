const { Comment } = require('../models');

const commentData = [
  {
    comment: "This sucks!",
    color: 2,
    matchup_id: 2, //3 of these for now
    user_id: 3, //5 user seeds
    username: 'stinkysteve'
  },
  {
    comment: "RHINOS RULE!!!!",
    color: 1,
    matchup_id: 2,
    user_id: 1,
    username: 'xXgRaNtXx'
  },
  {
    comment: "bruh tigers on GOD fam fr fr no cap",
    color: 2,
    matchup_id: 1,
    user_id: 2,
    username: 'dumb-Zoomer'
  },
  {
    comment: "*sighs* You're an idiot... It's obvious that a Bear would win.",
    color: 1,
    matchup_id: 1,
    user_id: 4,
    username: 'TipzFedora89'
  },
  {
    comment: "Jamie pull up that clip of the grizzly bear",
    color: 1,
    matchup_id: 1,
    user_id: 5,
    username: 'JRE_fan82'
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;