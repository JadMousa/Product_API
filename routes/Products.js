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

// GET product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  router.post('/', (req, res) => {
    try {
      const { name, price } = req.body;
  
      if (!name || price === undefined) {
        return res.status(400).json({ message: "Name and price are required" });
      }
  
      // Get the highest existing ID and add 1
      const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
  
      const newProduct = {
        id: maxId + 1,
        name,
        price
      };
  
      products.push(newProduct);
      res.status(201).json(newProduct);
     } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
  

// PUT update product by ID
router.put('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    // Only update if the value is explicitly sent
    if (req.body.name !== undefined) {
      product.name = req.body.name;
    }
  
    if (req.body.price !== undefined) {
      product.price = req.body.price;
    }
  
    res.json(product);
  });

  // DELETE product by ID
router.delete('/:id', (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
      const deleted = products.splice(index, 1);
      res.json({ message: "Product deleted", product: deleted[0] });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });
  
  

export default router;
