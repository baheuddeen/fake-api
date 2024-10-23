import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const absPath = path.resolve();
const dataPath = path.resolve(absPath, 'products.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8').toString());
const router = Router();

router.get('/products', async (req, res) => {
  return res.json(data);
})

router.post('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = data.find((product: any) => product.id == id);
  const body = req.body;
  let updatedData = [];

  if (!product) {
    updatedData = [...data, body];
  } else {
    updatedData = data.map((product: any) => {
      if (product.id == id) {      
        return body;
      }
      return product;
    });
  }

  fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

  return res.json(body);
});

export default router