'use client';

import { useState } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

const pickupOptions = [
  'CDG Terminal 1',
  'CDG Terminal 2E',
  'CDG Terminal 2F',
  'CDG Terminal 2G',
  'CDG Terminal 3',
  'Orly Airport',
  'Paris city centre',
  'Other (specify in message)',
];

const vehicleOptions = [
  { id: 'tesla', label: '⚡ Tesla Model 3/Y — Executive Eco', capacity: 'Up to 4 passengers', price: '€80' },
  { id: 'van', label: '🚐 Mercedes V-Class — Premium Van', capacity: 'Up to 7 passengers', price: '€120' },
];

export default function BookingForm() {
  const [vehicle, setVehicle] = useState('tesla');
  const [form, setForm] = useState({
    name: '',
    pickup: 'CDG Terminal 2E',
    date: '',
    time: '',
    flight: '',
    passengers: '2',
    children: '0',
    childAges: '',
    notes: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const selectedVehicle = vehicleOptions.find((v) => v.id === vehicle);
    const hasChildren = parseInt(form.children) > 0;

    const message = [
      `🚗 *New Booking Request — CDG to Disneyland Paris*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📍 *Pickup:* ${form.pickup} → Disneyland Paris`,
      `📅 *Date:* ${form.date}`,
      `🕐 *Arrival time:* ${form.time}`,
      form.flight ? `✈️ *Flight number:* ${form.flight}` : '',
      `👥 *Passengers:* ${form.passengers} adult(s)${hasChildren ? ` + ${form.children} child(ren)` : ''}`,
      hasChildren && form.childAges ? `🧒 *Children's ages:* ${form.childAges}` : '',
      `🚐 *Vehicle:* ${selectedVehicle?.label}`,
      form.notes ? `📝 *Notes:* ${form.notes}` : '',
      ``,
      `Please confirm availability and send me a payment link. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/33189706414?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  const selectedPrice = vehicle === 'tesla' ? '€80' : '€120';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Vehicle selector */}
      <div className="grid grid-cols-2 gap-3">
        {vehicleOptions.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setVehicle(v.id)}
            className={`text-left p-3 rounded-xl border transition-all ${
              vehicle === v.id
                ? 'border-gold bg-gold/10 text-white'
                : 'border-[#263044] bg-[#111827] text-gray-400 hover:border-gold/40'
            }`}
          >
            <div className="text-xs font-semibold leading-tight mb-1">{v.label.split('—')[0].trim()}</div>
            <div className="text-[10px] text-gray-500">{v.capacity}</div>
            <div className={`text-sm font-bold mt-1 ${vehicle === v.id ? 'text-gold' : 'text-gray-500'}`}>
              From {v.price}
            </div>
          </button>
        ))}
      </div>

      {/* Name + Pickup */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Your name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="input-dark"
            placeholder="e.g. Sarah Johnson"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Pickup point *</label>
          <div className="relative">
            <select
              name="pickup"
              required
              value={form.pickup}
              onChange={handleChange}
              className="input-dark appearance-none pr-8"
            >
              {pickupOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Arrival date *</label>
          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
            className="input-dark"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Arrival time *</label>
          <input
            type="time"
            name="time"
            required
            value={form.time}
            onChange={handleChange}
            className="input-dark"
          />
        </div>
      </div>

      {/* Flight + Passengers */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Flight number</label>
          <input
            name="flight"
            value={form.flight}
            onChange={handleChange}
            className="input-dark"
            placeholder="e.g. BA304"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Adults *</label>
          <div className="relative">
            <select name="passengers" value={form.passengers} onChange={handleChange} className="input-dark appearance-none pr-8">
              {['1','2','3','4','5','6','7'].map((n) => <option key={n}>{n}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Children 🧒</label>
          <div className="relative">
            <select name="children" value={form.children} onChange={handleChange} className="input-dark appearance-none pr-8">
              {['0','1','2','3','4','5'].map((n) => <option key={n}>{n}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Child ages (conditional) */}
      {parseInt(form.children) > 0 && (
        <div>
          <label className="block text-gray-400 text-xs mb-1">
            Children&apos;s ages (for free child seats) *
          </label>
          <input
            name="childAges"
            required
            value={form.childAges}
            onChange={handleChange}
            className="input-dark"
            placeholder="e.g. 2 years, 5 years"
          />
        </div>
      )}

      {/* Notes */}
      <div>
        <label className="block text-gray-400 text-xs mb-1">Special requests (optional)</label>
        <textarea
          name="notes"
          rows={2}
          value={form.notes}
          onChange={handleChange}
          className="input-dark resize-none"
          placeholder="e.g. large suitcases, wheelchair, special assistance..."
        />
      </div>

      {/* Price summary */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-gray-400 text-xs block">Fixed price (one way)</span>
          <span className="text-gold font-bold text-lg">{selectedPrice}</span>
        </div>
        <div className="text-right">
          <span className="text-gray-500 text-xs block">Included</span>
          <span className="text-white text-xs">Meet &amp; Greet · Child seat · Flight tracking</span>
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="btn-whatsapp w-full py-4 text-base font-bold">
        <MessageCircle size={20} />
        Check Price &amp; Book via WhatsApp
      </button>

      <p className="text-gray-600 text-xs text-center">
        Your request opens WhatsApp — we confirm in English within minutes.
      </p>
    </form>
  );
}
