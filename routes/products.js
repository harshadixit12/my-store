import express from 'express';
const router = express.Router();

const products = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.99 },
  { id: 2, name: 'Yoga Mat', category: 'Fitness', price: 15.49 },
  { id: 3, name: 'Coffee Mug', category: 'Kitchenware', price: 9.99 },
  { id: 4, name: 'Bluetooth Speaker', category: 'Electronics', price: 45.00 },
  { id: 5, name: 'Running Shoes', category: 'Fitness', price: 65.99 },
  { id: 6, name: 'Notebook', category: 'Stationery', price: 3.49 },
  { id: 7, name: 'Water Bottle', category: 'Fitness', price: 12.75 },
  { id: 8, name: 'LED Desk Lamp', category: 'Home Decor', price: 29.99 },
  { id: 9, name: 'Ceramic Plate Set', category: 'Kitchenware', price: 34.50 },
  { id: 10, name: 'Backpack', category: 'Accessories', price: 40.00 }
];

router.get('/', (req, res) => {
  const productCategory = req.query["product-category"];
  if (productCategory) {
    const filtered = products.filter(p => p.category === productCategory);
    return res.json(filtered);
  }
  res.json(products);
});


// Product by ID

router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  let product;
  products.map((obj) => {
    if (obj.id == productId) {
      product = obj
    }
  })
  if (product) {
    return res.json(product);
  }
  res.status(404);
});

export default router;
