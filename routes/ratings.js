const express = require("express");
const ratings = require("../controllers/ratings");
const router = express.Router();
// const upload = require("../middleware/multer");
const ratingsController = require("../controllers/ratings");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Ratings Routes
router.get("/", ensureAuth, ratingsController.getRatings)

router.get("/add", ensureAuth, ratingsController.getMovie)

router.get("/searchMovie", ensureAuth, ratingsController.searchMovie)

router.post("/addMovie",ratingsController.addMovie)

router.delete("/deleteRating/:id", ratingsController.deleteRating)

router.put("/starMovie/:id", ratingsController.starMovie)

router.put("/unStarMovie/:id", ratingsController.unStarMovie)


module.exports = router;