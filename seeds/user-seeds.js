const { User } = require('../models');

const userdata = [
  {
    username: 'loser12',
    email: 'loser12@losing.com',
    password: 'password456'
  },
  {
    username: 'uglydude63',
    email: 'mrugly@cool.com',
    password: 'password789'
  },
  {
    username: 'XanimalHaterX',
    email: 'animalHatR@animalPlanet.com',
    password: 'password123'
  },
  {
    username: 'HuggyBuggy',
    email: 'huggybug@google.ru',
    password: 'password654'
  },
  {
    username: 'old_fart42',
    email: 'olfart42@aol.net',
    password: 'password612'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;