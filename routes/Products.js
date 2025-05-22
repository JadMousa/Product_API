import express from 'express';
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 }
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

export default router;
