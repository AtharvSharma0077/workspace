import express from "express";
import cors from "cors";
import fs from "fs";
import natural from "natural";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let documentText = "";

// 🗂 Load text file
try {
  documentText = fs.readFileSync("./uploads/data.txt", "utf8");
  console.log("📄 Text file loaded successfully.");
} catch (err) {
  console.error("❌ Error loading text file:", err.message);
}

// 🧠 Chat route
app.post("/chat", async (req, res) => {
  try {
    const userQuery = req.body.message?.toLowerCase();
    if (!userQuery) return res.json({ reply: "⚠️ Please type something first." });

    if (!documentText) {
      return res.json({ reply: "❌ No document loaded. Please add a .txt file in /uploads folder." });
    }

    // Split into sentences instead of full lines
    const sentences = documentText.split(/(?<=[.?!])\s+/);

    // TF-IDF similarity
    const tfidf = new natural.TfIdf();
    sentences.forEach((s) => tfidf.addDocument(s));

    let bestIndex = -1;
    let bestScore = 0;

    tfidf.tfidfs(userQuery, (i, measure) => {
      if (measure > bestScore) {
        bestScore = measure;
        bestIndex = i;
      }
    });

    if (bestScore < 0.05) {
      return res.json({ reply: "🤔 Sorry, I couldn't find relevant info in the document." });
    }

    // Context lines
    const context = [
      sentences[bestIndex - 1] || "",
      sentences[bestIndex],
      sentences[bestIndex + 1] || "",
    ]
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    res.json({ reply: context });
  } catch (error) {
    console.error("❌ Error in chat endpoint:", error);
    res.status(500).json({ reply: "Internal server error." });
  }
});

// 🚀 Server start
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
