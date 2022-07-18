import {Router} from 'express'

import * as taskCtrl from '../controllers/task.controller'
const router = Router();

router.get('/', taskCtrl.findAllTasks ); // /api/tasks

router.get('/done', taskCtrl.findDoneTasks ); // /api/tasks  (antes que la de id para que la tome)

router.get('/:id', taskCtrl.findOneTask ); // /api/tasks 

router.post('/', taskCtrl.createNewTask); // /api/tasks

router.put('/:id', taskCtrl.updateTask); // /api/tasks 

router.delete('/:id', taskCtrl.deleteTask); // /api/tasks 

export default router;