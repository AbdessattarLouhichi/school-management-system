import { Router } from 'express';
import { tenantMiddleware } from '../middlewares/tenantMiddlewares';
import { createStudent, getStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/student.Controller';

const router = Router();

router.post('/:tenantId/students', tenantMiddleware, createStudent);
router.get('/:tenantId/students', tenantMiddleware, getStudents);
router.get('/:tenantId/students/:id', tenantMiddleware, getStudentById);
router.put('/:tenantId/students/:id', tenantMiddleware, updateStudent);
router.delete('/:tenantId/students/:id', tenantMiddleware, deleteStudent);


export default router;
