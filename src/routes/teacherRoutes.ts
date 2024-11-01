import { Router } from 'express';
import { tenantMiddleware } from '../middlewares/tenantMiddlewares';
import { createTeacher, getTeachers, getTeacherById, updateTeacher, deleteTeacher } from '../controllers/teacher.Controller';

const router = Router();

router.post('/:tenantId/teachers', tenantMiddleware, createTeacher);
router.get('/:tenantId/teachers', tenantMiddleware, getTeachers);
router.get('/:tenantId/teachers/:id', tenantMiddleware, getTeacherById);
router.put('/:tenantId/teachers/:id', tenantMiddleware, updateTeacher);
router.delete('/:tenantId/teachers/:id', tenantMiddleware, deleteTeacher);

export default router;
