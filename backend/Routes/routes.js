import { Router } from "express";
import { addStudent, getStudent } from "./../Controllers/Student.js";

const route = Router();

route.post("/addStudent", addStudent);
route.post("/getStudent", getStudent);

export default route;
