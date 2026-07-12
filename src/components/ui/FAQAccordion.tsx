'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What happens if my flight from the UK is delayed?',
    a: "Absolutely nothing to worry about. We track your flight in real time from the moment it departs. If your flight is delayed by 30 minutes, 2 hours or more, your driver automatically adjusts and waits at no extra charge. You will never arrive at CDG to find nobody there. This is included in every booking at no extra cost.",
  },
  {
    q: 'Are child seats and baby seats really free?',
    a: "Yes, completely free. We provide rear-facing infant seats (0–13 kg), forward-facing child seats (9–18 kg) and booster seats (15–36 kg) at no additional charge. Simply let us know your children's ages and weights when booking, and the appropriate seat will be pre-fitted in the vehicle before you land.",
  },
  {
    q: 'How do I pay securely?',
    a: "We process all payments via Stripe, one of the world's most trusted payment platforms. After confirming your booking via WhatsApp, we send you a secure Stripe payment link. You can pay by card (Visa, Mastercard, Amex) or Apple Pay / Google Pay. Your card details are never stored by us.",
  },
  {
    q: 'Is the price really fixed — what if there are traffic jams?',
    a: "The price is 100% fixed regardless of traffic conditions, time of day, or journey duration. Whether it takes 45 minutes or 90 minutes to reach Disneyland Paris due to motorway works or heavy traffic, the price you were quoted is the price you pay. There is no meter running.",
  },
  {
    q: 'How will I find my driver at CDG Airport?',
    a: "After collecting your luggage and clearing customs, look for your driver holding a sign with your surname in the arrivals hall. The exact meeting point depends on your terminal (T1, 2E, 2F, 2G or T3 — see our CDG Airport Guide for precise locations). Your driver will be there before your flight lands.",
  },
  {
    q: 'Can you pick us up from any CDG terminal?',
    a: "Yes — we cover all CDG terminals: Terminal 1, Terminal 2E, Terminal 2F, Terminal 2G, and Terminal 3 (Ryanair). Just tell us your flight number at booking and we will know exactly which terminal to come to.",
  },
  {
    q: 'We have a lot of luggage — pushchair, suitcases, bags. Will it all fit?',
    a: "If you are travelling with more than 4 passengers or have a large amount of luggage (pushchairs, sport equipment, etc.), we recommend booking the Mercedes V-Class van. It accommodates up to 7 passengers with up to 7 large suitcases and a folded pushchair. If in doubt, mention your luggage in the booking form and we will advise the right vehicle.",
  },
  {
    q: 'How far in advance should I book?',
    a: "We accept bookings up to 6 months in advance and recommend booking as early as possible for popular Disney dates (school holidays, Christmas, Easter). Last-minute bookings (same day) may be possible — contact us via WhatsApp to check availability. However, to guarantee your child seat and your preferred vehicle, book early.",
  },
  {
    q: 'What is your cancellation policy?',
    a: "Full refund if cancelled more than 48 hours before your scheduled pickup. 50% refund if cancelled between 48 and 6 hours before pickup. No refund for cancellations within 6 hours or no-shows. If your airline cancels your flight, we offer a full refund or free rebooking regardless of timing.",
  },
  {
    q: 'Do you offer the return journey from Disneyland to CDG?',
    a: "Yes — same fixed price, same service. We recommend booking both journeys at the same time so your return transfer is confirmed and your mind is at ease. We will pick you up from your Disney hotel or Disney Village at the time you specify.",
  },
  {
    q: 'My family does not speak any French. Will there be a language barrier?',
    a: "Not at all. All booking confirmations, communication and customer support are handled in English. Your driver may have limited English but will have your booking details printed in advance. WhatsApp messages and booking confirmations are fully in English.",
  },
  {
    q: 'Do you accept GBP (British pounds)?',
    a: "Our prices are quoted in Euros (€) as the service takes place in France. Your UK bank card will automatically convert at the current exchange rate when you pay via Stripe. Most UK Visa and Mastercard issuers apply a very small conversion fee — check with your bank.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#263044] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-white font-semibold text-sm sm:text-base group-hover:text-gold transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <div className="card-dark">
      {faqs.map((item) => (
        <FAQItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
