const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote, Matchup } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
const date = new Date().getFullYear()
  res.render('home', {layout:'main', date});
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