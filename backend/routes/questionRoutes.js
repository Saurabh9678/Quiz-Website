const express = require("express");
const {
  insertQuestion,
  getQuestions,
  deleteUser,
  getCategoryQuestion,
  getCategory,
} = require("../controllers/questionController");
const router = express.Router();

router.route("/question").post(insertQuestion).get(getCategoryQuestion);

router.route("/questions/:userId").get(getQuestions).delete(deleteUser);

router.route("/category").get(getCategory)


module.exports = router;
