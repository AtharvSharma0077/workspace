import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple AI-like logic
app.post("/chat", (req, res) => {
  const msg = req.body.message?.toLowerCase() || "";
  let reply = "I'm not sure I understand 🤔";

 if (msg.includes("hello") || msg.includes("hi")) {
  reply = "Hello there! 👋 How can I help you today?";
} else if (msg.includes("your name")) {
  reply = "I'm your friendly AI chatbot built with Node.js and React 💻";
} else if (msg.includes("time")) {
  reply = `The current time is ${new Date().toLocaleTimeString()}`;
} else if (msg.includes("date")) {
  reply = `Today's date is ${new Date().toLocaleDateString()}`;
} else if (msg.includes("capital of india")) {     // ✅ NEW CONDITION
  reply = "The capital of India is New Delhi 🇮🇳";
} else if (msg.includes("bye")) {
  reply = "Goodbye! 👋 Have a great day!";
} else {
  reply = "I'm not sure about that 🤔";
}


  res.json({ reply });
});

app.listen(4000, () => console.log("🚀 Server running on port 4000"));
