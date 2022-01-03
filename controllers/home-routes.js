const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote, Matchup } = require('../models');
const animal_1 = 'Grizzly Bear';
const animal_2 = 'Tiger';
const comments = [{
  comment: "This sucks!",
  color: 2,
  matchup_id: 2, //3 of these for now
  author: "Huntikins" //5 user seeds
},
{
  comment: "RHINOS RULE!!!!",
  color: 1,
  matchup_id: 2,
 author: "huntikins"
},]


router.get('/', (req, res) => {
//  if (!req.session.loggedIn) {
//    res.redirect('/login');
//    return;
//  }
const date = new Date().getFullYear()
  res.render('home', {layout:'main', date, animal_1, animal_2, comments});
});

// directs user to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login', {layout:'main'});
  });

module.exports = router;