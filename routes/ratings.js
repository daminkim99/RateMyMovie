const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
const ratingsController = require("../controllers/ratings");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, ratingsController.getRatings);

// router.post("/createPost", upload.single("file"), ratingsController.createPost);

// router.put("/likePost/:id", ratingsController.likePost);

// router.delete("/deletePost/:id", ratingsController.deletePost);

module.exports = router;