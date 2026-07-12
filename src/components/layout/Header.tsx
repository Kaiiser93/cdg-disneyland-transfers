'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/fleet', label: 'Fleet & Prices' },
  { href: '/cdg-guide', label: 'CDG Airport Guide' },
  { href: '/faq', label: 'FAQ & Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090D18]/95 backdrop-blur-md border-b border-[#263044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">✨</span>
          <div>
            <span className="text-white font-bold text-sm sm:text-base leading-tight block">CDG Disneyland</span>
            <span className="text-gold text-xs font-medium leading-tight block">Transfers</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-gold text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex btn-whatsapp px-4 py-2 text-sm"
        >
          <MessageCircle size={16} />
          Book via WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#263044] bg-[#111827]">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-gold py-3 px-4 rounded-xl hover:bg-[#1A2235] text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2 py-3 text-sm"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
