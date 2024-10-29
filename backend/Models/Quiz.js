import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  optionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

const attemptSchema = new mongoose.Schema({
  email: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
});

const quizSchema = new mongoose.Schema({
  quizTitle: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  numberOfQuestions: { type: Number, required: true },
  shuffleQuestions: { type: Boolean, default: false },
  generator: { type: String, required: true },
  startingTime: { type: Date, required: true },
  activeTime: { type: Number, required: true },
  difficultyLevel: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  attemptedBy: { type: [attemptSchema], default: [] },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
