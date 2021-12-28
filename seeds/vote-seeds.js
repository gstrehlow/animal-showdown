const { Vote } = require('../models');

const voteData = [
  {
    vote: 1, //either 1 or 2
    matchup_id: 1, //3 matchup seeds for now
    user_id: 3 //5 user seeds
  },
  {
    vote: 1,
    matchup_id: 1,
    user_id: 2
  },
  {
    vote: 2,
    matchup_id: 1,
    user_id: 1
  },
  {
    vote: 1,
    matchup_id: 2,
    user_id: 3
  },
  {
    vote: 2,
    matchup_id: 2,
    user_id: 5
  },
  {
    vote: 1,
    matchup_id: 3,
    user_id: 1
  },
  {
    vote: 2,
    matchup_id: 3,
    user_id: 4
  },
  {
    vote: 2,
    matchup_id: 3,
    user_id: 3
  },
  {
    vote: 2,
    matchup_id: 3,
    user_id: 5
  }
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;