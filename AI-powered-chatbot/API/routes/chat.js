import express from 'express';
import auth from '../middleware/auth.js';
import Message from '../models/message.js';
import providers from '../services/provider/index.js';
const router = express.Router();


router.post('/stream', auth, async (req,res)=>{
const { sessionId, provider='mock' } = req.body;
// basic safety
const text = (req.body.text||'').slice(0,2000);
if(!text) return res.status(400).send('empty');


// store user message
await Message.create({ sessionId, role:'user', text });


// SSE headers
res.writeHead(200, {
'Content-Type': 'text/event-stream',
'Cache-Control': 'no-cache',
Connection: 'keep-alive'
});
res.write('\n');


const onChunk = async (chunk)=>{
// send chunk
res.write(`data: ${JSON.stringify({chunk})}\n\n`);
// also store partial assistant message? you can store final only
};


// call provider stream
const ctx = { lastUser: text };
try{
await providers[provider].stream(ctx, onChunk);
// end
res.write(`event: done\ndata: {}
\n`);
res.end();
}catch(e){
res.write(`event: error\ndata: ${JSON.stringify({msg:e.message})}\n\n`);
res.end();
}
});


export default router;