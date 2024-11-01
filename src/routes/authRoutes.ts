import { Router } from 'express';
import { register, login, deleteUser } from '../controllers/auth.Controller';
import { authenticate, authorize } from '../middlewares/authMiddleware';
import { Role } from '../config/Roles';

const router = Router();

router.post('/register', authenticate, authorize([Role.SUPER_ADMIN]), register);
router.post('/login', login);
router.delete('/:id', authenticate, authorize([Role.SUPER_ADMIN]), deleteUser);

export default router;
