const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote, Matchup } = require('../models');

// directs user to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;