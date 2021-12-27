const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Matchup extends Model {} //is a child of Model

Matchup.init( //this represents two animals, and their 'matchup'
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        animal_1: { //animal 1 name
            type: DataTypes.STRING,
            allowNull: false
        },
        animal_2: { //animal 2 name
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'matchups'
    }
);

module.exports = Matchup;