import express from 'express';
import { getAllTeachers, createTeacher, getTeacherById, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';

const router = express.Router();

// دریافت تمام معلمان
router.get('/', getAllTeachers);

// ایجاد معلم جدید
router.post('/', createTeacher);

// دریافت اطلاعات یک معلم بر اساس ID
router.get('/:id', getTeacherById);

// ویرایش اطلاعات یک معلم بر اساس ID
router.put('/:id', updateTeacher);

// حذف یک معلم بر اساس ID
router.delete('/:id', deleteTeacher);

export default router;
