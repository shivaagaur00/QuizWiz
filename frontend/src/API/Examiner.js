import axios from "axios";
const URL = "https://quizwiz-hnwc.onrender.com";
export const addExaminer = async (data) => {
  try {
    let res = await axios.post(`${URL}/addExaminer`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getExaminer = async (data) => {
  try {
    let res = await axios.post(`${URL}/getExaminer`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
