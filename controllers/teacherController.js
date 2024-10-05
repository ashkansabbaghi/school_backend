import Teacher from '../models/teacherModel.js';

// دریافت تمام معلمان
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// ایجاد معلم جدید
export const createTeacher = async (req, res) => {
  const { first_name, last_name, subject, salary, contact_number, email } = req.body;

  try {
    const newTeacher = new Teacher({ first_name, last_name, subject, salary, contact_number, email });
    const teacher = await newTeacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error creating teacher' });
  }
};

// دریافت اطلاعات یک معلم بر اساس ID
export const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// ویرایش اطلاعات یک معلم
export const updateTeacher = async (req, res) => {
  const { first_name, last_name, subject, salary, contact_number, email } = req.body;

  try {
    let teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    teacher.first_name = first_name || teacher.first_name;
    teacher.last_name = last_name || teacher.last_name;
    teacher.subject = subject || teacher.subject;
    teacher.salary = salary || teacher.salary;
    teacher.contact_number = contact_number || teacher.contact_number;
    teacher.email = email || teacher.email;

    const updatedTeacher = await teacher.save();
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: 'Error updating teacher' });
  }
};

// حذف معلم
export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    await teacher.deleteOne();
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher' });
  }
};
