import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  subject: { type: String, required: true },    // درس تخصصی معلم
  salary: { type: Number, required: true },     // حقوق معلم
  contact_number: { type: String, required: true }, // شماره تماس معلم
  email: { type: String, required: true },      // ایمیل معلم
  hire_date: { type: Date, default: Date.now }, // تاریخ استخدام
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;
