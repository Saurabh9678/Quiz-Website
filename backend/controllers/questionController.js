const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Question = require("../model/questionModel");
const ApiFeatures = require("../utils/apiFeatures");

// InsertQuestions
exports.insertQuestion = catchAsyncErrors(async (req, res, next) => {
  const { userId, questions, answers, category } = req.body;
  if (!userId || !questions || !answers) {
    return next(new ErrorHandler("Please provide the neccessary details", 400));
  }
  const id = userId.toString();
  if (id.length != 6) {
    return next(new ErrorHandler("The userid must be of length 6", 400));
  }
  if (questions.length != answers.length) {
    return next(new ErrorHandler("Please provide all answers", 400));
  }
  if (category) {
    const q = await Question.create({ userId, questions, answers, category });
  } else {
    const q = await Question.create({ userId, questions, answers });
  }
  res.status(200).json("Questions saved successfully..!");
});

// Get Questions
exports.getQuestions = catchAsyncErrors(async (req, res, next) => {
  const q = await Question.findOne({ userId: req.params.userId });
  if (!q) {
    return next(new ErrorHandler("No questions available", 400));
  }
  res.status(200).json(q);
});

//Get all question of a category
exports.getCategoryQuestion = catchAsyncErrors(async (req, res, next) => {
  const { category } = req.query;
  const q = await Question.find({ category });
  if (q.length === 0) {
    return next(
      new ErrorHandler("No questions available for this category", 400)
    );
  }
  res.status(200).json(q);
});

//Delete Result
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  let q = await Question.findOne({ userId: req.params.userId });
  if (!q) {
    return next(new ErrorHandler("No user found for this userId", 400));
  }
  await q.deleteOne();
  res.status(200).json("User removed for the respective userId");
});

//Get only categories
exports.getCategory = catchAsyncErrors(async (req, res, next) => {
  const categories = await Question.find({}).distinct("category");
  res.status(200).json({categories});
});
