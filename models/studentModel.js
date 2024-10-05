import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  grade: { type: Number, required: true },
  class_id: { type: Number, required: true },
  parent_id: { type: Number, required: true },
  contact_number: { type: String },
  email: { type: String }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
