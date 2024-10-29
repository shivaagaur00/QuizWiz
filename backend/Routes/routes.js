import { Router } from "express";
import { addStudent, getStudent } from "./../Controllers/Student.js";
import { addExaminer, getExaminer } from "./../Controllers/Examiner.js";
import { getQuiz } from "../Controllers/Quiz.js";
const route = Router();

{
  /*  Student  */
}
route.post("/addStudent", addStudent);
route.post("/getStudent", getStudent);

{
  /*  Examiner  */
}
route.post("/addExaminer", addExaminer);
route.post("/getExaminer", getExaminer);

{
  /*  Quiz  */
}
route.post("/getQuiz", getQuiz);

export default route;
