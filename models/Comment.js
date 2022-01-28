const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {} //is a child of Model

Comment.init( //this represents two animals, and their 'matchup'
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false, //will be 1 or 2
            validate: {
                len: [1, 250]
            }
        },
        color: { //1 for blue 2 for red
            type: DataTypes.INTEGER,
            allowNull: false
        },
        matchup_id: { //fk for matchup
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'matchup',
                key: 'id'
            }
        },
        user_id: { //fk for user
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false //will be 1 or 2
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    }
);

module.exports = Comment;