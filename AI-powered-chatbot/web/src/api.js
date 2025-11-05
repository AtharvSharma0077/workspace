// src/api.js
export async function login(username) {
  const res = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  });
  return res.json(); // { token }
}

export function streamChat({ token, sessionId, text, onChunk, onDone }) {
  const es = new EventSource(`/chat/stream-sse?token=${token}&sessionId=${sessionId}&text=${encodeURIComponent(text)}`);

  es.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.chunk) onChunk(data.chunk);
  };

  es.addEventListener('done', () => {
    es.close();
    if (onDone) onDone();
  });

  es.onerror = (err) => {
    console.error('Stream error', err);
    es.close();
  };
}
