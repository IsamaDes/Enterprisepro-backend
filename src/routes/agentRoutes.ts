import { Router } from 'express';
import { createAgent, getAgent, updateAgent, deleteAgent } from '../controllers/agentController';

const router = Router();

router.post('/', createAgent);
router.get('/:id', getAgent);
router.patch('/:id', updateAgent);
router.delete('/:id', deleteAgent);

export default router;
