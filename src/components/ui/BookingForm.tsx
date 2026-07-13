'use client';

import { useState, useMemo } from 'react';
import { MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';

const locationOptions = [
  'CDG Airport',
  'Orly Airport',
  'BVA Airport (Beauvais)',
  'Paris city centre',
  'Disneyland Paris',
  'Other (specify in message)',
];

// Prix fixes selon l'origine/destination par rapport à Disneyland Paris
const ROUTE_PRICES: Record<string, { tesla: number; van: number }> = {
  'CDG Airport':          { tesla: 80,  van: 120 },
  'Orly Airport':         { tesla: 90,  van: 130 },
  'BVA Airport (Beauvais)': { tesla: 200, van: 255 },
  'Paris city centre':    { tesla: 90,  van: 130 },
};

function getRoutePrice(pickup: string, dropoff: string) {
  // L'un des deux doit être Disneyland Paris pour avoir un prix fixe
  const nonDisney = pickup === 'Disneyland Paris' ? dropoff
    : dropoff === 'Disneyland Paris' ? pickup
    : null;
  if (!nonDisney) return null;
  return ROUTE_PRICES[nonDisney] ?? null;
}

function Select({ name, value, onChange, options }: {
  name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select name={name} value={value} onChange={onChange} className="input-dark appearance-none pr-8" required>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
}

export default function BookingForm() {
  const [vehicle, setVehicle] = useState<'tesla' | 'van'>('tesla');
  const [form, setForm] = useState({
    name: '',
    pickup: 'CDG Airport',
    dropoff: 'Disneyland Paris',
    date: '',
    time: '',
    flight: '',
    passengers: '2',
    children: '0',
    childAges: '',
    notes: '',
  });

  const totalPax = parseInt(form.passengers) + parseInt(form.children);

  // Si total > 4, Tesla indisponible ; si total = 8, Vito obligatoire
  const teslaDisabled = totalPax > 4;
  const requiresVito = totalPax >= 8;

  // Auto-switch Tesla → Van si passagers > 4
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    const newTotal = parseInt(e.target.name === 'passengers' ? e.target.value : form.passengers)
                   + parseInt(e.target.name === 'children' ? e.target.value : form.children);
    if (newTotal > 4 && vehicle === 'tesla') setVehicle('van');
  }

  const routePrice = useMemo(() => getRoutePrice(form.pickup, form.dropoff), [form.pickup, form.dropoff]);

  const displayPrice = routePrice
    ? (vehicle === 'tesla' ? `€${routePrice.tesla}` : `€${routePrice.van}`)
    : null;

  const vanLabel = requiresVito ? '🚐 Mercedes Vito' : '🚐 Mercedes V-Class / Vito';
  const vanCapacity = requiresVito ? 'Up to 8 passengers (Vito required)' : 'Up to 8 passengers';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hasChildren = parseInt(form.children) > 0;
    const vehicleStr = vehicle === 'tesla'
      ? 'Tesla Model 3/Y (up to 4 pax — 2 large + 2 cabin bags · vegan leather)'
      : requiresVito
        ? 'Mercedes Vito (8 pax — 6 large suitcases)'
        : 'Mercedes V-Class or Vito (up to 8 pax — 6 large suitcases)';

    const lines = [
      `🚗 *New Booking Request — Obrigado Transports*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📍 *From:* ${form.pickup}`,
      `🏰 *To:* ${form.dropoff}`,
      `📅 *Date:* ${form.date}`,
      `🕐 *Time:* ${form.time}`,
      form.flight ? `✈️ *Flight:* ${form.flight}` : '',
      `👥 *Passengers:* ${form.passengers} adult(s)${hasChildren ? ` + ${form.children} child(ren)` : ''}`,
      hasChildren && form.childAges ? `🧒 *Children's ages:* ${form.childAges}` : '',
      `🚐 *Vehicle:* ${vehicleStr}`,
      displayPrice ? `💶 *Quoted price:* ${displayPrice} (fixed, one way)` : `💶 *Price:* To be confirmed (route outside standard grid)`,
      form.notes ? `📝 *Notes:* ${form.notes}` : '',
      ``,
      `Please confirm availability and send the Stripe payment link. Thank you!`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/33189706414?text=${encodeURIComponent(lines)}`, '_blank');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Vehicle selector */}
      <div className="grid grid-cols-2 gap-3">
        {/* Tesla */}
        <button
          type="button"
          onClick={() => !teslaDisabled && setVehicle('tesla')}
          disabled={teslaDisabled}
          className={`text-left p-3 rounded-xl border transition-all ${
            teslaDisabled
              ? 'border-[#263044] bg-[#0D1120] text-gray-600 cursor-not-allowed opacity-50'
              : vehicle === 'tesla'
                ? 'border-gold bg-gold/10 text-white'
                : 'border-[#263044] bg-[#111827] text-gray-400 hover:border-gold/40'
          }`}
        >
          <div className="text-xs font-semibold leading-tight mb-1">⚡ Tesla Model 3/Y</div>
          <div className="text-[10px] text-gray-500">
            {teslaDisabled ? 'Not available (max 4 pax)' : 'Up to 4 pax · vegan leather'}
          </div>
          <div className={`text-sm font-bold mt-1 ${vehicle === 'tesla' && !teslaDisabled ? 'text-gold' : 'text-gray-500'}`}>
            {routePrice ? `From €${routePrice.tesla}` : 'Price on request'}
          </div>
        </button>

        {/* Van */}
        <button
          type="button"
          onClick={() => setVehicle('van')}
          className={`text-left p-3 rounded-xl border transition-all ${
            vehicle === 'van'
              ? 'border-gold bg-gold/10 text-white'
              : 'border-[#263044] bg-[#111827] text-gray-400 hover:border-gold/40'
          }`}
        >
          <div className="text-xs font-semibold leading-tight mb-1">{vanLabel}</div>
          <div className="text-[10px] text-gray-500">{vanCapacity}</div>
          <div className={`text-sm font-bold mt-1 ${vehicle === 'van' ? 'text-gold' : 'text-gray-500'}`}>
            {routePrice ? `From €${routePrice.van}` : 'Price on request'}
          </div>
        </button>
      </div>

      {/* Name */}
      <div>
        <label className="block text-gray-400 text-xs mb-1">Your name *</label>
        <input
          name="name" required value={form.name} onChange={handleChange}
          className="input-dark" placeholder="e.g. Sarah Johnson"
        />
      </div>

      {/* Pickup → Drop-off */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Pick-up *</label>
          <Select name="pickup" value={form.pickup} onChange={handleChange} options={locationOptions} />
        </div>
        <div className="pb-3">
          <ArrowRight size={16} className="text-gold" />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Drop-off *</label>
          <Select name="dropoff" value={form.dropoff} onChange={handleChange} options={locationOptions} />
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Date *</label>
          <input
            type="date" name="date" required value={form.date} onChange={handleChange}
            className="input-dark" min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Time *</label>
          <input type="time" name="time" required value={form.time} onChange={handleChange} className="input-dark" />
        </div>
      </div>

      {/* Flight + Passengers */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-gray-400 text-xs mb-1">Flight no.</label>
          <input name="flight" value={form.flight} onChange={handleChange} className="input-dark" placeholder="BA304" />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Adults *</label>
          <Select name="passengers" value={form.passengers} onChange={handleChange} options={['1','2','3','4','5','6','7','8']} />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Children 🧒</label>
          <Select name="children" value={form.children} onChange={handleChange} options={['0','1','2','3','4','5']} />
        </div>
      </div>

      {parseInt(form.children) > 0 && (
        <div>
          <label className="block text-gray-400 text-xs mb-1">Children&apos;s ages (for child seats) *</label>
          <input
            name="childAges" required value={form.childAges} onChange={handleChange}
            className="input-dark" placeholder="e.g. 2 years, 5 years"
          />
        </div>
      )}

      <div>
        <label className="block text-gray-400 text-xs mb-1">Special requests (optional)</label>
        <textarea
          name="notes" rows={2} value={form.notes} onChange={handleChange}
          className="input-dark resize-none"
          placeholder="e.g. large pushchair, skis, wheelchair access..."
        />
      </div>

      {/* Price summary */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-gray-400 text-xs block">Fixed price (one way)</span>
          {displayPrice ? (
            <span className="text-gold font-bold text-lg">{displayPrice}</span>
          ) : (
            <span className="text-gray-400 font-semibold text-sm">Price on request</span>
          )}
          <span className="text-gray-600 text-xs ml-2">
            {form.pickup} → {form.dropoff === 'Disneyland Paris' ? 'Disney' : form.dropoff}
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-500 text-xs block">Always included</span>
          <span className="text-white text-xs">Meet &amp; Greet · Child seat · Flight tracking</span>
        </div>
      </div>

      <button type="submit" className="btn-whatsapp w-full py-4 text-base font-bold">
        <MessageCircle size={20} />
        {displayPrice ? `Book via WhatsApp — ${displayPrice}` : 'Get a Quote via WhatsApp'}
      </button>

      <p className="text-gray-600 text-xs text-center">
        Opens WhatsApp — we confirm in English within minutes.
      </p>
    </form>
  );
}
