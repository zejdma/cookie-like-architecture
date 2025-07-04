import { getAllHobbiesUseCase } from '../../di/container.ts';
import { Router } from 'express';
const router = Router();
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const hobbies = await getAllHobbiesUseCase.execute({ page, limit });
        res.json({ hobbies, page, limit });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch hobbies' });
    }
});
export default router;
