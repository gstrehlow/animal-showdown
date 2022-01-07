const { Matchup } = require('../models'); //gets the index.js file in models

const matchupData = [
    {
        animal_1: "Grizzly Bear",
        animal_2: "Tiger"
    },
    {
        animal_1: "Rhinoceros",
        animal_2: "Elephant"
    },
    {
        animal_1: "Gorilla",
        animal_2: "Jaguar"
    },
    {
        animal_1: "Cheetah",
        animal_2: "Hyena"
    },
    {
        animal_1: "Polar Bear",
        animal_2: "Hippopotamus"
    },
    {
        animal_1: "Ostrich",
        animal_2: "Kangaroo"
    },
    {
        animal_1: "Lion",
        animal_2: "Black Bear"
    },
    {
        animal_1: "Crocodile",
        animal_2: "Walrus"
    },
    {
        animal_1: "Komodo Dragon",
        animal_2: "Mountain Lion"
    },
    {
        animal_1: "Bull",
        animal_2: "Anaconda"
    },
    {
        animal_1: "Moose",
        animal_2: "Giraffe"
    },
    {
        animal_1: "Great White Shark",
        animal_2: "Colossal Squid"
    }
]

const seedMatchups = () => Matchup.bulkCreate(matchupData);

module.exports = seedMatchups;