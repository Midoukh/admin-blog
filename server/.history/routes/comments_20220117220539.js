const express = require("express");
const commentController = require("../controllers/commentsController");
const router = express.Router();

router.post("/add-comment", commentController.handleComment);
