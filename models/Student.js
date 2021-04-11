import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  register_date: { type: Date, default: Date.now },
});

export default model("Student", studentSchema);
