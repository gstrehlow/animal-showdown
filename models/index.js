const User = require("./User");
const Matchup = require("./Matchup");
const Vote = require('./Vote');
const Comment = require('./Comment');
// create associations
//vote's foreignkeys
User.hasMany(Vote, { //user owns vote
    foreignKey: 'user_id'
});
Vote.belongsTo(User, { //vote is owned by user
    foreignKey: 'user_id',
});
Matchup.hasMany(Vote, { //matchup owns vote
    foreignKey: 'user_id'
});
Vote.belongsTo(Matchup, { //vote is owned by matchup
    foreignKey: 'user_id',
});
//comment's foreignkeys
User.hasMany(Comment, { //user owns comment
    foreignKey: 'user_id'
});
Comment.belongsTo(User, { //comment is owned by user
    foreignKey: 'user_id',
});
Matchup.hasMany(Comment, { //matchup owns comment
    foreignKey: 'user_id'
});
Comment.belongsTo(Matchup, { //comment is owned by matchup
    foreignKey: 'user_id',
});

module.exports = { User, Matchup, Vote, Comment };