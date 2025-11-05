import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'dev_secret';
export default function(req,res,next){
const h = req.headers.authorization?.split(' ');
if(!h||h[0] !== 'Bearer') return res.status(401).send('no auth');
try{
req.user = jwt.verify(h[1], SECRET);
next();
}catch(e){res.status(401).send('invalid');}
}