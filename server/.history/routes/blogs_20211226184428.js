const express = require("express");
const blogController = require("../controllers/blogController.js");
const router = express.Router();

//get all the blogs
router.get("/", (req, res) => {
  res.send("fucker");
});
router.get("/get", blogController.getAllBlog);
router.get("/get/:slug", blogController.getBlogBySlug);

//create one blog post
router.post("/post", blogController.createBlog);

module.exports = router;
