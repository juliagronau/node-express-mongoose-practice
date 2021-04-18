import express from "express";
import {
  getAllStudents,
  createNewStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/students.js";

const students = express.Router();

students.get("/", getAllStudents);
students.get("/:id", getSingleStudent);
students.post("/", createNewStudent);
students.put("/:id", updateStudent);
students.delete("/:id", deleteStudent);

export default students;
