import dotenv from 'dotenv';
import express from 'express';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3222;

// console.log("Server running on port", PORT); For testing

