import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import contentRoutes from './routes/contentRoutes.js';
import { seedInitialContent } from './config/seedContent.js';

// 1. Load environment variables
dotenv.config();

// 2. Initialize Express application
const app = express();

// 3. Connect to Database & Seed Initial Content
connectDB().then(() => {
  seedInitialContent();
});

// 4. Global Middleware
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((u) => u.trim())
  : ['http://localhost:3000', 'http://127.0.0.1:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server, mobile, or tool requests without origin
    if (!origin) return callback(null, true);
    
    // Check allowed origins, wildcard, or vercel preview domains
    const isAllowed =
      allowedOrigins.includes(origin) ||
      allowedOrigins.includes('*') ||
      /\.vercel\.app$/.test(origin);

    if (isAllowed || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: Origin ${origin} not allowed.`));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. API Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Riyadvi Software Technologies API is running smoothly',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// 6. Mount API Routes
app.use('/api', leadRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/content', contentRoutes);

// 6. Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Riyadvi API Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`[Health Check URL]: http://localhost:${PORT}/api/health`);
});

export default app;
