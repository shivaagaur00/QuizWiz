import axios from "axios";
const URL = "http://localhost:8000";
export const QuizDetails = async (data) => {
  try {
    let res = await axios.post(`${URL}/getQuiz`, data);
    return { data: res.data, status: res.status };
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};
