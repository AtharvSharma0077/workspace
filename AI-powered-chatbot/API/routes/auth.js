import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();


const SECRET = process.env.JWT_SECRET || 'dev_secret';


// POST /auth/login { username }
router.post('/login', (req,res)=>{
const { username } = req.body;
// demo only: accept any username and sign
const token = jwt.sign({ username }, SECRET, { expiresIn: '6h'});
res.json({ token });
});


export default router;