import { Router } from 'express';
import { listProjects } from '../controllers/ProjectController';

const router = Router();

router.get('/', listProjects)

export default router;

