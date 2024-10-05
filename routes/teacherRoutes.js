import express from 'express';
import { getAllTeachers, createTeacher, getTeacherById, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';
import { verifyToken, checkRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

// دریافت تمام معلمان
router.get('/', verifyToken, checkRole('teacher'), getAllTeachers);

// ایجاد معلم جدید
router.post('/', verifyToken, checkRole('admin'), createTeacher);

// دریافت اطلاعات یک معلم بر اساس ID
router.get('/:id', verifyToken, checkRole('teacher'), getTeacherById);

// ویرایش اطلاعات یک معلم بر اساس ID
router.put('/:id', verifyToken, checkRole('admin'), updateTeacher);

// حذف یک معلم بر اساس ID
router.delete('/:id', verifyToken, checkRole('admin'), deleteTeacher);

export default router;
