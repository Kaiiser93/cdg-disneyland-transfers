'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ContactWhatsApp() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello, my name is ${name}.\n\n${message}`;
    window.open(`https://wa.me/33189706414?text=${encodeURIComponent(text)}`, '_blank');
  }

  return (
    <div className="card-dark">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">💬</span>
        <div>
          <h3 className="text-white font-bold">Message Us on WhatsApp</h3>
          <p className="text-gray-500 text-xs">Fastest response — typically within minutes</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Your name *</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-dark"
            placeholder="e.g. Sarah Johnson"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Your message *</label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-dark resize-none"
            placeholder="e.g. Hello, I need a transfer from CDG Terminal 2E on 15th August for 2 adults and 2 children aged 4 and 7..."
          />
        </div>
        <button type="submit" className="btn-whatsapp w-full py-3 text-sm">
          <MessageCircle size={16} />
          Open in WhatsApp
        </button>
      </form>
    </div>
  );
}
