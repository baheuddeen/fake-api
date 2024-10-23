import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const absPath = path.resolve();
const dataPath = path.resolve(absPath, 'products.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8').toString());
const router = Router();

router.get('/products', async (req, res) => {
  return res.json(data);
});

export default router