import {Router} from 'express';

import * as taskController from '../controllers/taskController';

const router = Router();


router.get('/tasks', taskController.getTasks);
router.post('/tasks/add', taskController.addTask);

export default router;