const { User } = require('../models');

const userdata = [
  {
    username: 'loser12',
    password: 'password456'
  },
  {
    username: 'uglydude63',
    password: 'password789'
  },
  {
    username: 'XanimalHaterX',
    password: 'password123'
  },
  {
    username: 'HuggyBuggy',
    password: 'password654'
  },
  {
    username: 'old_fart42',
    password: 'password612'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;