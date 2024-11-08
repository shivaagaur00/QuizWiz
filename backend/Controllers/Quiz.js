import Quiz from "../Models/Quiz.js";

const generateCode = async () => {
  let code;
  let exists = true;
  while (exists) {
    code = Math.floor(100000 + Math.random() * 900000).toString();
    const existingQuiz = await Quiz.findOne({ code });
    exists = existingQuiz !== null;
  }
  return code;
};

export const generateQuiz = async (req, res) => {
  try {
    const {
      scheduledTime,
      quizName,
      quizDuration,
      timePerQuestion,
      questionShuffle,
      optionShuffle,
      questions,
      generator,
      numberOfQuestions,
      quizTitle,
    } = req.body;

    console.log(req.body);

    const code = await generateCode();
    const newQuiz = new Quiz({
      code,
      scheduledTime,
      quizName,
      quizDuration,
      timePerQuestion,
      questionShuffle,
      optionShuffle,
      questions,
      generator,
      numberOfQuestions,
      quizTitle,
    });

    console.log(newQuiz);

    const savedQuiz = await newQuiz.save();
    return res.status(201).json(savedQuiz);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Could not create quiz" });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const { Code } = req.body;
    const data = await Quiz.findOne({ code: Code });
    if (!data) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Could not fetch data" });
  }
};
