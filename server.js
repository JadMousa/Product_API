import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import ProductRoutes from './routes/Products.js';


const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const PORT = process.env.PORT || 3222;

// console.log("Server running on port", PORT); For testing

app.use('/api/Products',ProductRoutes); // http://localhost:3001/api/Products

// 404 fallback
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); //string interpotation
  });


