import express, { Request, Response, NextFunction , Router} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios'; // Import axios
import businessRoutes from './routes/businessRoutes';
import loginRoute from './routes/loginRoute';
// import authRoutes from './routes/authRoutes';
import { register  } from './controllers/authController';
import { createConnection } from 'typeorm';
import { User } from './entity/User'; 
import { Business } from './entity/Business';
import { KycDocument } from './entity/KycDocument';

dotenv.config();



const app = express();


setInterval(() => { 
  if (global.gc) { 
    global.gc(); 
  } else { 
    console.warn('Garbage collection is not exposed');
   } 
  }, 60000);

// Middleware
app.use(express.json());

app.use(cors({ 
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
  optionsSuccessStatus: 200 
}));

app.use(express.json());
app.use('/api/business', businessRoutes);
app.post('/api/auth/register', register);
app.use('/api', loginRoute);


app.get('/', (req: Request, res: Response) => { res.send('Welcome to the API'); });

app.get('/health-check', (req: Request, res: Response) => { res.send('OK'); });


// TypeORM Connection
createConnection({ 
  type: "mongodb", 
  url: process.env.MONGO_URI,  // Use the connection string from the .env file
  useUnifiedTopology: true,
  entities: [User, Business, KycDocument], 
  synchronize: true 
}).then(() => { 
  console.log("MongoDB connected");
}).catch(error => {
  console.error("MongoDB connection error: ", error);
});

// Error Handling Middleware 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {   
  console.error("Unhandled error:", err.stack); 
  res.status(500).json({
    error: 'Internal Server Error',
    details: err.message
  });
});


// Keep Render active 
const url = `https://enterprisepro-backend.onrender.com`;
 const interval = 30000; 
 function reloadWebsite() { axios.get(url) .then(response => { 
  console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
 }) .catch(error => { console.error(`Error reloading at ${new Date().toISOString()}:`, error.message); 
}); 
} setInterval(reloadWebsite, interval);


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
