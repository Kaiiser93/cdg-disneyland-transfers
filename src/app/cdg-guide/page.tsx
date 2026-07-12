import type { Metadata } from 'next';
import { MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CDG Airport Arrival Guide — Transfer to Disneyland Paris | Obrigado Transports',
  description:
    'Everything UK families need to know about arriving at CDG Airport and getting to Disneyland Paris. Terminal guide, Meet & Greet process and what to expect.',
};

const terminals = [
  {
    id: 'T1',
    label: 'Terminal 1',
    airlines: 'Air France (some), United, Air Canada, Lufthansa',
    meetingPoint: 'Arrivals hall level — look for the name board area just past the baggage reclaim exit.',
    tip: 'Terminal 1 is round. Follow signs for "Sortie" (exit) after customs.',
  },
  {
    id: '2E',
    label: 'Terminal 2E',
    airlines: 'Most Air France European & long-haul flights from UK',
    meetingPoint: 'Hall L or Hall M arrivals — your driver will be standing with a sign showing your name.',
    tip: 'The most common terminal for UK arrivals. Very well signposted.',
  },
  {
    id: '2F',
    label: 'Terminal 2F',
    airlines: 'EasyJet, Vueling, low-cost Air France',
    meetingPoint: 'Arrivals hall ground floor — meeting area immediately after exiting customs.',
    tip: 'Compact terminal — easy to find your driver.',
  },
  {
    id: '2G',
    label: 'Terminal 2G',
    airlines: 'Short-haul & regional Air France (shuttle bus from 2E/2F)',
    meetingPoint: 'After the shuttle bus, follow signs to arrivals — driver will be at the main exit.',
    tip: 'You will arrive by bus — allow 10 extra minutes to reach your driver.',
  },
  {
    id: 'T3',
    label: 'Terminal 3',
    airlines: 'Ryanair, Transavia, Wizz Air',
    meetingPoint: 'Ground floor arrivals — name board area is directly in front of the customs exit.',
    tip: 'Ryanair lands here. Very straightforward arrival.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Land at CDG',
    desc: 'Your driver is already tracking your flight from the moment it departs the UK. If your plane is early or late, your driver adjusts accordingly — at no extra cost.',
    icon: '✈️',
  },
  {
    num: '2',
    title: 'Collect your luggage',
    desc: 'Head to baggage reclaim as normal. Take your time — your driver is not on a meter and will wait as long as needed.',
    icon: '🧳',
  },
  {
    num: '3',
    title: 'Clear customs (no stress)',
    desc: 'As an EU/Schengen arrival from the UK, you will pass through the passport control queue. Your driver monitors this too.',
    icon: '🛂',
  },
  {
    num: '4',
    title: 'Spot your name sign',
    desc: 'Exit customs and look for your driver holding a sign with your name. They will be standing in the designated meeting area (see terminal guide below).',
    icon: '📋',
  },
  {
    num: '5',
    title: 'Walk to your vehicle',
    desc: 'Your driver will carry your bags. The vehicle is parked in the official pick-up area — a short 2-3 minute walk. Child seats are already fitted if requested.',
    icon: '🚗',
  },
  {
    num: '6',
    title: 'Direct to Disneyland Paris',
    desc: 'Approximately 45–55 minutes depending on traffic. Sit back, relax, charge your phones, and let the magic begin. No stops, no detours.',
    icon: '✨',
  },
];

export default function CDGGuidePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#0F1525] to-[#090D18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
            <MapPin size={14} />
            CDG Airport — Arrival Guide for UK Travellers
          </span>
          <h1 className="section-title mb-6">
            What to Expect When You Land at CDG
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Never been to Paris-Charles de Gaulle Airport before? This guide explains exactly
            what happens from the moment you land to the moment your driver greets you —
            so your family can arrive stress-free.
          </p>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="py-16 bg-[#090D18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-12">Your Step-by-Step Arrival</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 card-dark">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm">
                  {s.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">
                    {s.icon} {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLIGHT DELAY INFO */}
      <section className="py-12 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 flex gap-4">
            <AlertCircle size={24} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">What if my flight is delayed?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We track your flight in real time using your flight number. If your London
                departure is delayed by 1 hour, 2 hours or even more — your driver adjusts
                automatically and waits at no additional charge. You will never land to an
                empty arrivals hall wondering where your driver is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL GUIDE */}
      <section className="py-16 bg-[#090D18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-4">Terminal-by-Terminal Guide</h2>
          <p className="text-gray-400 text-center text-sm mb-10">
            CDG has several terminals spread over a large area. Here is where your driver will meet you in each one.
          </p>
          <div className="space-y-4">
            {terminals.map((t) => (
              <div key={t.id} className="card-dark">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-gold/10 border border-gold/30 text-gold font-bold text-sm px-3 py-2 rounded-lg">
                      {t.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs mb-2">
                      <span className="text-gray-400 font-medium">Airlines: </span>
                      {t.airlines}
                    </p>
                    <div className="flex gap-2 mb-2">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">
                        <span className="text-white font-medium">Meeting point: </span>
                        {t.meetingPoint}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs pl-5">
                      💡 {t.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET & GREET DETAIL */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-12">The Meet &amp; Greet Experience</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Your name on a sign',
                desc: 'Your driver holds a clear sign with your surname. No hunting around, no confusion — visible from the customs exit.',
              },
              {
                icon: '👔',
                title: 'Professional presentation',
                desc: 'Your driver is dressed smartly and will introduce themselves by name. They speak enough English to greet your family warmly.',
              },
              {
                icon: '🧳',
                title: 'Luggage assistance',
                desc: 'No carrying bags through crowds. Your driver takes your suitcases and pushchair directly to the vehicle.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CDG TO DISNEY */}
      <section className="py-16 bg-[#090D18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-dark">
            <h2 className="text-white font-bold text-xl mb-4">CDG to Disneyland Paris — The Journey</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <p className="mb-3">
                  <span className="text-white font-medium">Distance: </span>
                  Approximately 35–40 km depending on route.
                </p>
                <p className="mb-3">
                  <span className="text-white font-medium">Journey time: </span>
                  45–55 minutes in normal traffic conditions.
                </p>
                <p className="mb-3">
                  <span className="text-white font-medium">Route: </span>
                  Via the A104 and A4 motorways — direct and stress-free.
                </p>
              </div>
              <div>
                <p className="mb-3">
                  <span className="text-white font-medium">No queues: </span>
                  Unlike the CDG Express train, you travel door-to-door with no changes, no queues and no platform hunting with tired children.
                </p>
                <p>
                  <span className="text-white font-medium">Drop-off: </span>
                  Directly at the hotel entrance or Disney Village — whichever is most convenient for your accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book Your Meet &amp; Greet Transfer?
          </h2>
          <p className="text-gray-400 mb-8">
            Send us your flight number and arrival date — we do the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Meet%20%26%20Greet%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-base inline-flex"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </a>
            <Link href="/" className="btn-outline-gold px-8 py-4 text-base inline-flex">
              ✨ Check Prices
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
