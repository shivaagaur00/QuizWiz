import { Router } from "express";
import {
  addStudent,
  getStudent,
  updateScore,
} from "./../Controllers/Student.js";
import { addExaminer, getExaminer } from "./../Controllers/Examiner.js";
import { getQuiz, generateQuiz } from "../Controllers/Quiz.js";
const route = Router();

{
  /*  Student  */
}
route.post("/addStudent", addStudent);
route.post("/getStudent", getStudent);
route.post("/updateScore", updateScore);

{
  /*  Examiner  */
}
route.post("/addExaminer", addExaminer);
route.post("/getExaminer", getExaminer);

{
  /*  Quiz  */
}
route.post("/getQuiz", getQuiz);
route.post("/generateQuiz", generateQuiz);

export default route;
