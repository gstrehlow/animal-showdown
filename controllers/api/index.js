const router = require('express').Router();

const voteRoutes = require('./vote-routes.js');
const matchupRoutes = require('./matchup-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/votes', voteRoutes);
router.use('/matchups', matchupRoutes);
router.use('/comments', commentRoutes);

module.exports = router;