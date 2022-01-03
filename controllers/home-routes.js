const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote, Matchup } = require('../models');
const animal_1 = 'Grizzly Bear';
const animal_2 = 'Tiger';

router.get('/', (req, res) => {
//  if (!req.session.loggedIn) { re-add this when login is working!
//    res.redirect('/login');
//    return;
//  }
  
  const date = new Date().getFullYear()
  res.render('home', {layout:'main', date, animal_1, animal_2});
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