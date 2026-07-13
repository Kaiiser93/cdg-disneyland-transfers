import type { Metadata } from 'next';
import { Star, Shield, Clock, Baby, MapPin } from 'lucide-react';
import BookingForm from '@/components/ui/BookingForm';
import CastleIllustration from '@/components/ui/CastleIllustration';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CDG to Disneyland Paris Transfer | From €80 — Obrigado Transports',
  description:
    'Book a premium private transfer from CDG Airport to Disneyland Paris. Free child seats, flight tracking, Tesla or Mercedes Van. Fixed price from €80. No hidden fees.',
};

const trustBadges = [
  {
    icon: <MapPin size={22} className="text-gold" />,
    title: 'Based at CDG',
    desc: 'Our drivers are stationed near the airport — guaranteed on-time pick-up.',
  },
  {
    icon: <Baby size={22} className="text-gold" />,
    title: 'Free Child Seats',
    desc: 'Baby seats, toddler seats and boosters included at no extra charge.',
  },
  {
    icon: <Clock size={22} className="text-gold" />,
    title: 'Flight Tracking',
    desc: 'If your plane from London is delayed, your driver waits — no extra fee.',
  },
  {
    icon: <Shield size={22} className="text-gold" />,
    title: 'Fixed Price',
    desc: 'No meter, no surprises. The price you see is exactly what you pay.',
  },
];


const steps = [
  { step: '01', title: 'Book via WhatsApp', desc: 'Fill in our quick form and we confirm your booking in English within minutes.' },
  { step: '02', title: 'We track your flight', desc: 'Your driver monitors your flight in real time. Delays? Your driver adjusts automatically.' },
  { step: '03', title: 'Meet & Greet at arrivals', desc: 'Your chauffeur waits with a name sign right after customs. Walk straight to your car.' },
  { step: '04', title: 'Direct to the magic ✨', desc: 'Fixed price. No detours. Arrive at Disneyland Paris relaxed and ready for the adventure.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-[#090D18] via-[#0F1525] to-[#090D18] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />

        {/* Castle silhouette — decorative background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] pointer-events-none opacity-[0.08] hidden lg:block">
          <CastleIllustration />
        </div>

        {/* Twinkling stars */}
        {[
          { top: '12%', left: '8%', delay: '0s', size: 3 },
          { top: '25%', left: '3%', delay: '1.2s', size: 2 },
          { top: '8%', right: '5%', delay: '0.6s', size: 3 },
          { top: '18%', right: '12%', delay: '2s', size: 2 },
          { top: '40%', left: '5%', delay: '0.9s', size: 2 },
          { top: '55%', right: '4%', delay: '1.8s', size: 3 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none animate-twinkle"
            style={{ top: s.top, left: s.left as string | undefined, right: s.right as string | undefined, animationDelay: s.delay }}
          >
            <svg width={s.size * 6} height={s.size * 6} viewBox="0 0 24 24" fill="#C9A96E">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Hero text */}
            <div>
              {/* Rating badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-gold text-sm font-semibold">5/5 · 61 Google reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Premium Private{' '}
                <span className="text-gold">Transfers</span>{' '}
                from CDG to{' '}
                <span className="text-gold">Disneyland Paris</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Skip the stress of taxis and public transport. We pick your family up
                at CDG arrivals with a name sign and take you directly to the magic —
                in a spotless Tesla or spacious Mercedes Van.
              </p>

              {/* Price pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { from: 'CDG → Disneyland', price: 'From €80' },
                  { from: 'Orly → Disneyland', price: 'From €90' },
                  { from: 'Up to 8 passengers', price: 'From €120 (Van)' },
                ].map((p) => (
                  <div
                    key={p.from}
                    className="flex items-center gap-2 bg-[#1A2235] border border-[#263044] rounded-full px-4 py-2"
                  >
                    <span className="text-gray-400 text-sm">{p.from}</span>
                    <span className="text-gold text-sm font-bold">{p.price}</span>
                  </div>
                ))}
              </div>

              {/* Trust list */}
              <ul className="space-y-2 mb-8">
                {[
                  '✅ Free child seats & baby seats on request',
                  '✅ Flight tracking — we wait if you are delayed',
                  '✅ Meet & Greet with name sign at arrivals',
                  '✅ No hidden fees — price locked at booking',
                ].map((item) => (
                  <li key={item} className="text-gray-300 text-sm">{item}</li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#booking" className="btn-gold px-6 py-4 text-base font-bold">
                  ✨ Check Price & Book
                </a>
                <a
                  href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-6 py-4 text-base font-bold"
                >
                  💬 Book via WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Booking form */}
            <div
              id="booking"
              className="bg-[#111827] border border-[#263044] rounded-3xl p-6 shadow-2xl"
            >
              <h2 className="text-white font-bold text-xl mb-2 text-center">
                Get Your Fixed Price Instantly
              </h2>
              <p className="text-gray-500 text-sm text-center mb-6">
                Fill in the form below — confirmation in minutes.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#0A0E1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From booking to the gates of Disneyland Paris — a completely stress-free journey for your family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="card-dark relative">
                <div className="text-4xl font-black text-gold/20 mb-3">{s.step}</div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-24 bg-[#090D18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-14">Why UK Families Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.title} className="card-dark text-center">
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h3 className="text-white font-bold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGICAL DESTINATION */}
      <section className="py-16 bg-[#090D18] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-3 animate-twinkle-slow inline-block">
            ✦ Your magical destination ✦
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Just 35 km from CDG Airport
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Skip the RER B, the bus connections and the stress. Your private car goes directly from the arrivals hall to the gates of Disneyland Paris.
          </p>
          <div className="animate-float max-w-lg mx-auto">
            <CastleIllustration className="w-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            {[
              { icon: '⏱', label: '~40 min door-to-door' },
              { icon: '🚗', label: 'Direct — no stops' },
              { icon: '✅', label: 'Confirmed & fixed price' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-gray-300">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-20 bg-[#0A0E1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
            </div>
            <span className="text-gold text-sm font-semibold">5 / 5 · 61 Google reviews</span>
          </div>
          <h2 className="section-title mb-4">What Our Passengers Say</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm">
            61 verified reviews on Google — from real families who trusted us for their Disney trip.
            We are a French company based at Roissy-CDG.
          </p>
          <a
            href="https://www.google.com/search?q=Obrigado+Transports+VTC+Roissy+CDG+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 bg-[#1A2235] border border-[#263044] hover:border-gold/40 rounded-2xl px-8 py-5 transition-all group w-full sm:w-auto justify-center sm:justify-start"
          >
            <svg width="36" height="36" viewBox="0 0 48 48" aria-hidden="true" className="flex-shrink-0">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-gold text-gold" />)}
              </div>
              <div className="text-white font-bold text-sm">Read our 61 Google reviews</div>
              <div className="text-gray-400 text-xs mt-0.5">Obrigado Transports · Based at Roissy-CDG, France</div>
            </div>
            <span className="text-gold text-lg group-hover:translate-x-1 transition-transform ml-auto hidden sm:block">→</span>
          </a>
        </div>
      </section>

      {/* FLEET TEASER */}
      <section className="py-24 bg-[#090D18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-4">Our Fleet</h2>
          <p className="text-gray-400 text-center mb-12">Two vehicles, one standard of excellence.</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card-dark border-blue-500/30">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-1">Executive Eco — Tesla Model 3/Y</h3>
              <p className="text-gray-400 text-sm mb-4">Up to 4 passengers · 2 large + 2 cabin bags · Vegan leather, electric</p>
              <div className="flex items-center justify-between">
                <span className="text-gold font-bold text-2xl">€80</span>
                <span className="text-gray-500 text-sm">CDG → Disneyland</span>
              </div>
            </div>
            <div className="card-dark border-gold/30">
              <div className="text-3xl mb-3">🚐</div>
              <h3 className="text-white font-bold text-lg mb-1">Premium Van — Mercedes Vito</h3>
              <p className="text-gray-400 text-sm mb-4">Up to 8 passengers · 6 large suitcases · Perfect for families &amp; groups</p>
              <div className="flex items-center justify-between">
                <span className="text-gold font-bold text-2xl">€120</span>
                <span className="text-gray-500 text-sm">CDG → Disneyland</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/fleet" className="btn-outline-gold px-6 py-3 text-sm">
              View full price table →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[#090D18]/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start the Magic? ✨
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book your private transfer now — we confirm in English within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="btn-gold px-8 py-4 text-base font-bold">
              ✨ Book Now
            </a>
            <a
              href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-base font-bold"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
