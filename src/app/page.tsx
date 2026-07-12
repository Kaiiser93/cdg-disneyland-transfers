import type { Metadata } from 'next';
import { CheckCircle, Star, Shield, Clock, Baby, MapPin } from 'lucide-react';
import BookingForm from '@/components/ui/BookingForm';
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

const reviews = [
  {
    name: 'Sarah T.',
    location: 'London, UK',
    text: 'Absolutely faultless service! Driver was waiting with our name on a sign as we came through arrivals. The Tesla was spotless and the car seat for our 18-month-old was already fitted. Magical start to our Disney trip!',
    stars: 5,
  },
  {
    name: 'James H.',
    location: 'Manchester, UK',
    text: 'Our flight from Heathrow was delayed by 2 hours and the driver waited without any fuss or extra charge. Highly recommend for families — the van was huge with plenty of room for all our cases.',
    stars: 5,
  },
  {
    name: 'Emma R.',
    location: 'Birmingham, UK',
    text: 'Booked via WhatsApp and had confirmation within 10 minutes. Friendly, professional and stress-free. Will definitely use again on the way back to CDG.',
    stars: 5,
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
                <span className="text-gold text-sm font-semibold">4.9/5 · 61 verified reviews</span>
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
                  { from: 'Up to 7 passengers', price: 'From €120 (Van)' },
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

      {/* REVIEWS */}
      <section className="py-24 bg-[#0A0E1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
              </div>
              <span className="text-gold text-sm font-semibold">4.9 / 5 · 61 Google reviews</span>
            </div>
            <h2 className="section-title">What Our Passengers Say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="card-dark flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 italic mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div>
                  <span className="text-white text-sm font-semibold">{r.name}</span>
                  <span className="text-gray-500 text-xs ml-2">{r.location}</span>
                </div>
              </div>
            ))}
          </div>
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
              <p className="text-gray-400 text-sm mb-4">Up to 4 passengers · 3 large suitcases · Electric, silent, zero-emission</p>
              <div className="flex items-center justify-between">
                <span className="text-gold font-bold text-2xl">€80</span>
                <span className="text-gray-500 text-sm">CDG → Disneyland</span>
              </div>
            </div>
            <div className="card-dark border-gold/30">
              <div className="text-3xl mb-3">🚐</div>
              <h3 className="text-white font-bold text-lg mb-1">Premium Van — Mercedes V-Class</h3>
              <p className="text-gray-400 text-sm mb-4">Up to 7 passengers · 7 large suitcases · Perfect for families &amp; groups</p>
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
