import axios from "axios";
const URL = "http://localhost:8000";
export const quizDetails = async (data) => {
  try {
    let res = await axios.get(`${URL}/quiz/getQuiz`, data);
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};
