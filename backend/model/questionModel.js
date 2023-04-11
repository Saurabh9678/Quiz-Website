const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    trim: true,
    required: [true, "Please enter 6 digit number"],
  },
  questions: [
    {
      id: { type: Number },
      question: { type: String },
      options: {
        type: Array,
        default: [],
        required: [true, "Please provide options for the question"],
        answer: {
          type: Number,
          required: [true, "Please provide answer"],
        },
      },
    },
  ],
  category: {
    type: String,
    default: "custom",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", questionSchema);
