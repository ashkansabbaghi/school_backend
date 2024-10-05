import express from 'express';
import { getAllStudents, createStudent } from '../controllers/studentController.js';
import { verifyToken, checkRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, checkRole('student'), getAllStudents);
router.post('/', verifyToken, checkRole('admin'), createStudent);

export default router;
