import express from 'express';
import trailerRoutes from './Routes/Trailer.js';

const app = express();
app.use(express.json());

app.use(trailerRoutes);

export default app;