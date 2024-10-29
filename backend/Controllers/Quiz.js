import Quiz from "../Models/Quiz.js";
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
