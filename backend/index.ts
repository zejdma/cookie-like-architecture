import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { ParsedQs } from 'qs';
import hobbiesRouter from './src/interfaces/http/hobbiesRouter.ts';



const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('API is running 🚀');
});

// ✅ router mount
app.use('/hobbies', hobbiesRouter);

// ✅ hobby detail
app.get('/hobbies/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: 'ID missing' });
    return
  }

  try {
    const hobby = await prisma.hobby.findFirst({ where: { id } });
    res.json(hobby);
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch hobby with id: ${id}` });
  }
});

// ✅ create hobby
app.post('/hobbies', async (req: Request, res: Response) => {
  const { name, description, locations, img } = req.body;
  if (!name || !description || !locations || !img) {
    res.status(400).json({ error: 'Some fields is missing' });
  }

  try {
    const existing = await prisma.hobby.findFirst({ where: {name}});
    if (existing) {
      return res.status(422).json({data: null, errors: {name: "Hobby with this name already exist"} });
    }
    const hobby = await prisma.hobby.create({ data: { name, description, locations, img } });
    res.status(201).json({data: hobby, errors: null});
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hobby' });
  }
});

// ✅ get vegetables
app.get('/vegetables', async (_req: Request, res: Response) => {
  try {
    const vegetables = await prisma.vegetable.findMany();
    res.json(vegetables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vegetables' });
  }
});

// ✅ get vegetable by id
app.get('/vegetables/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
     res.status(400).json({ error: 'Missing ID' });
  }

  try {
    const vegetable = await prisma.vegetable.findFirst({ where: { id } });
    res.json(vegetable);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vegetable' });
  }
});

// ✅ create vegetable
app.post('/vegetables', async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
  }

  try {
    const vegetable = await prisma.vegetable.create({ data: { name } });
    res.status(201).json(vegetable);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vegetable' });
  }
});

// ✅ update vegetable
app.put('/vegetables/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!id || !name) {
    res.status(400).json({ error: 'Missing ID or name' });
  }

  try {
    const updated = await prisma.vegetable.update({ where: { id }, data: { name } });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update vegetable' });
  }
});

// ✅ delete vegetable
app.delete('/vegetables/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id || id.length !== 24) {
    res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const deleted = await prisma.vegetable.delete({ where: { id } });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vegetable' });
  }
});

// ✅ positions with query params
app.get(
  '/positions',
  async (
    req: Request<{}, {}, {}, { q?: string | ParsedQs; page?: string; limit?: string }>,
    res: Response
  ) => {
    const { q = '', page = '1', limit = '10' } = req.query;

    const parsedPage = parseInt(page as string, 10);
    const parsedLimit = parseInt(limit as string, 10);
    const skip = (parsedPage - 1) * parsedLimit;
    const query = (q as string).toLowerCase();

    try {
      const [positions, total] = await Promise.all([
        prisma.position.findMany({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          skip,
          take: parsedLimit,
          orderBy: { name: 'asc' },
        }),
        prisma.position.count({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
        }),
      ]);

      res.json({ positions, total, page: parsedPage, limit: parsedLimit, q: query });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch positions' });
    }
  }
);

app.listen(3000, () => {
  console.log('✅ API listening at http://localhost:3000');
});
