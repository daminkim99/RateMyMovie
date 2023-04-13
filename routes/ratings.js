const express = require("express");
const ratings = require("../controllers/ratings");
const router = express.Router();
// const upload = require("../middleware/multer");
const ratingsController = require("../controllers/ratings");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, ratingsController.getRatings);

router.get("/add", ratingsController.getMovie)

router.get("/searchMovie/:names", ratingsController.searchMovie)

router.post("/addMovie",ratingsController.addMovie)

// router.post("/createPost", upload.single("file"), ratingsController.createPost);

// router.put("/likePost/:id", ratingsController.likePost);

// router.delete("/deletePost/:id", ratingsController.deletePost);

module.exports = router;