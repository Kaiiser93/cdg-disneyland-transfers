import type { Metadata } from 'next';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fleet & Prices — CDG to Disneyland Paris Transfer | Obrigado Transports',
  description:
    'Tesla Model 3/Y from €80 or Mercedes V-Class from €120. Fixed prices, no hidden fees. CDG, Orly and Paris city to Disneyland Paris. Free child seats included.',
};

const routes = [
  { from: 'CDG Airport', tesla: 80, van: 120 },
  { from: 'Orly Airport', tesla: 90, van: 130 },
  { from: 'Paris city centre', tesla: 90, van: 130 },
  { from: 'Versailles', tesla: 100, van: 145 },
  { from: 'Beauvais Airport', tesla: 200, van: 255 },
];

const teslaFeatures = [
  'Up to 4 passengers',
  '3 large suitcases',
  'Electric — zero emissions, silent ride',
  'On-board Wi-Fi & USB charging',
  'Air conditioning',
  'Premium leather seats',
];

const vanFeatures = [
  'Up to 7 passengers',
  '7 large suitcases + pushchair',
  'Mercedes V-Class or EQV (electric)',
  'Individual captain seats',
  'Privacy sliding partition',
  'Ideal for families & groups',
];

const included = [
  'Meet & Greet with name sign at arrivals hall',
  'Real-time flight tracking (free waiting if delayed)',
  'Free child seat, baby seat or booster on request',
  'Mineral water on board',
  'All motorway tolls (péage)',
  'Luggage assistance to/from vehicle',
  'No surcharge for late-night or early-morning',
  'Fixed price confirmed at booking — no meter',
];

export default function FleetPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#0F1525] to-[#090D18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="section-title mb-4">Fleet &amp; Prices</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fixed one-way prices from CDG Airport to Disneyland Paris.
            No hidden fees. No meter. Luggage and tolls included.
          </p>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="py-16 bg-[#090D18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Tesla */}
            <div className="card-dark border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <div>
                  <h2 className="text-white font-bold text-xl">Executive Eco</h2>
                  <p className="text-blue-400 text-sm font-medium">Tesla Model 3 / Model Y</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {teslaFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={15} className="text-blue-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4">
                <span className="text-gray-400 text-xs block mb-1">CDG → Disneyland from</span>
                <span className="text-white font-black text-3xl">€80</span>
              </div>
            </div>

            {/* Van */}
            <div className="card-dark border-gold/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🚐</span>
                <div>
                  <h2 className="text-white font-bold text-xl">Premium Van</h2>
                  <p className="text-gold text-sm font-medium">Mercedes V-Class / EQV</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {vanFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={15} className="text-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                <span className="text-gray-400 text-xs block mb-1">CDG → Disneyland from</span>
                <span className="text-gold font-black text-3xl">€120</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-4">Full Price Table</h2>
          <p className="text-gray-400 text-center text-sm mb-10">
            All prices are one-way, fixed, and inclusive of tolls. No supplements.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#263044]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A2235] border-b border-[#263044]">
                  <th className="text-left px-6 py-4 text-gold font-semibold">From →  Disneyland Paris</th>
                  <th className="text-center px-4 py-4 text-blue-400 font-semibold">⚡ Tesla</th>
                  <th className="text-center px-4 py-4 text-gold font-semibold">🚐 Van</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr
                    key={r.from}
                    className={`border-b border-[#263044]/50 hover:bg-gold/5 transition-colors ${
                      i % 2 === 0 ? 'bg-[#090D18]' : 'bg-[#0A0E1A]'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-300 font-medium">{r.from}</td>
                    <td className="px-4 py-4 text-center text-blue-300 font-bold text-base">€{r.tesla}</td>
                    <td className="px-4 py-4 text-center text-gold font-bold text-base">€{r.van}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs text-center mt-4">
            Return journey? Same fixed price. Book both directions for peace of mind.
          </p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-16 bg-[#090D18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-10">Everything Included — No Extras</h2>
          <div className="card-dark">
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book Your Transfer?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us your flight details via WhatsApp — we confirm your fixed price in English within minutes.
          </p>
          <a
            href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-4 text-base inline-flex"
          >
            <MessageCircle size={20} />
            Get My Fixed Price via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
