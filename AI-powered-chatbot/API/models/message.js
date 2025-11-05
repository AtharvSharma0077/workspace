import mongoose from 'mongoose';
const Message = new mongoose.Schema({
sessionId: String,
role: String, // user | assistant | system
text: String,
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Message', Message);