import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);


const MONGO = process.env.MONGO_URI || 'mongodb://mongo:27017/ai-chat';
mongoose.connect(MONGO).then(()=> console.log('mongo ok'))
.catch(e=> console.error(e));


app.listen(process.env.PORT||4000, ()=> console.log('api up'));