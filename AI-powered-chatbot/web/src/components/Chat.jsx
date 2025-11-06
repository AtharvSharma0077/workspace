import React, { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
    setMessage(''); // clear input
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[22rem] text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">
          💬 Simple Chatbot
        </h1>

        <form
          onSubmit={sendMessage}
          className="flex gap-2 mb-4 w-full justify-center"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>

        {reply && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-gray-800 w-full">
            {reply}
          </div>
        )}
      </div>
    </div>
  );
}
