//api express routes
const router = require("express").Router();

const commentRoutes = require("./comment-routes");
const voteRoutes = require("./vote-routes");
const matchupRoutes = require("./matchup-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/votes", voteRoutes);
router.use("/matchups", matchupRoutes);

module.exports = router;