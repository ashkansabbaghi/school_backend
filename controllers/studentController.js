import Student from '../models/studentModel.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const student = await newStudent.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
