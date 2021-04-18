import Student from "../models/Student.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student)
      return res
        .status(404)
        .json({ message: `Student with ID of ${id} not found` });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newStudent = await Student.create({
      first_name,
      last_name,
      email,
      password,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    const updateStudent = await Post.findOneAndUpdate(
      { _id: id },
      { first_name, last_name, email, password },
      { new: true }
    );
    res.json(updateStudent);
  } catch (error) {}
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.deleteOne({ _id: id });
    res.json({ success: `Student with id of ${id} was deleted` });
  } catch (error) {}
};
