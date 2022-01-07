const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {} //is a child of Model

Vote.init( //this represents two animals, and their 'matchup'
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: false //will be 1 or 2
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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'votes'
    }
);

module.exports = Vote;