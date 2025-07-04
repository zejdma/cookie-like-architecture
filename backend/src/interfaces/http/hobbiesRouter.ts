import { Request, Response }  from 'express';
import { getAllHobbiesUseCase } from '../../di/container.ts';

import { Router } from 'express';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const {hobbies, total} = await getAllHobbiesUseCase.execute({ page, limit });
    res.json({ hobbies, total, page, limit });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hobbies' });
  }
});

export default router;

