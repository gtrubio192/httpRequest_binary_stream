import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import logRoutes from './routes.js';

const app = express()

app.use(bodyParser.json({ limit: '32mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }))

let corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8080']
}

app.use(cors(corsOptions));

app.use('/logs', logRoutes)

const PORT = 5432 || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));