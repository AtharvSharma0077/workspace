import mongoose from 'mongoose';
const Session = new mongoose.Schema({
userId: String,
title: String,
createdAt: { type: Date, default: Date.now }
});
Session.index({ createdAt: 1 }, { expireAfterSeconds: 60*60*24*7 }); // 7 days TTL
export default mongoose.model('Session', Session);