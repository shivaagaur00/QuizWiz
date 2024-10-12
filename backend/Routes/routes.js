import { Router } from "express";
import { addStudent, getStudent } from "./../Controllers/Student.js";
import { addExaminer, getExaminer } from "./../Controllers/Examiner.js";

const route = Router();

route.post("/addStudent", addStudent);
route.post("/getStudent", getStudent);

route.post("/addExaminer", addExaminer);
route.post("/getExaminer", getExaminer);

export default route;
