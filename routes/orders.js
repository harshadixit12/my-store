import express from 'express';
const router = express.Router();

let orders = [];
let nextOrderId = 1;

router.post('/', (req, res) => {
  const { productIds } = req.body;
  if (!Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ error: 'productIds must be a non-empty array' });
  }
  if (productIds.length > 5) {
    return res.status(400).json({ error: 'Cannot order more than 5 items' });
  }
  const order = { id: nextOrderId++, productIds, status: 'active' };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/', (req, res) => {
  const { order_id } = req.query;
  if (order_id) {
    const filtered = orders.filter(o => o.id === parseInt(order_id));
    return res.json(filtered);
  }
  res.json(orders);
});

export default router;
