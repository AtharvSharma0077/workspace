import React, { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">💬 Simple Chatbot</h1>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border rounded px-4 py-2 w-64"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>

      {reply && (
        <div className="mt-4 p-4 bg-gray-200 rounded w-64 text-center">
          {reply}
        </div>
      )}
    </div>
  );
}
