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
  code: { type: Number, required: true, unique: true },
  TimePerQuestion: { type: Number, default: null },
  quizTitle: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  numberOfQuestions: { type: Number, required: true },
  shuffleQuestions: { type: Boolean, default: false },
  generator: { type: String, required: true },
  startingTime: { type: String, required: true },
  activeTime: { type: Number, required: true },
  difficultyLevel: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  attemptedBy: { type: [attemptSchema], default: [] },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
