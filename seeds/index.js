const seedMatchups = require('./matchup-seeds');
const seedUsers = require('./user-seeds');
const seedVotes = require('./vote-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

async function seedAll(){
    await sequelize.sync({ force: true});
    await seedMatchups();
    console.log('seeded matchups!');
    await seedUsers();
    console.log('seeded users!');
    await seedVotes();
    console.log('seeded votes!');
    await seedComments();
    console.log('seeded comments!');

    process.exit(0); //manually exits a node program I guess
}

seedAll();