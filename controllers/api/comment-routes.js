const router = require('express').Router();
const { Comment } = require('../../models'); 

router.get('/', (req, res) => {
    Comment.findAll()
    res.json('hello');
});

module.exports = router;