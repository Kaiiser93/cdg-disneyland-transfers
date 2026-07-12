import type { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactWhatsApp from '@/components/ui/ContactWhatsApp';

export const metadata: Metadata = {
  title: 'FAQ & Contact — CDG to Disneyland Paris Transfer | Obrigado Transports',
  description:
    'Answers to the most common questions from UK families: child seats, flight delays, payment, cancellation policy and how to find your driver at CDG Airport.',
};

export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#0F1525] to-[#090D18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="section-title mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything UK families ask us before booking their CDG to Disneyland Paris transfer.
            Not answered below? Message us directly.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-10 bg-[#090D18]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FAQAccordion />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-[#0A0E1A]" id="contact">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 text-center mb-12">
            We respond to all enquiries in English — usually within a few minutes.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <ContactWhatsApp />

            <div className="space-y-4">
              <div className="card-dark">
                <h3 className="text-white font-semibold mb-3">Contact Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MessageCircle size={15} className="text-[#25D366]" />
                    <span>WhatsApp: +33 1 89 70 64 14</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={15} className="text-gold" />
                    <span>contact@transfert-aeroports-paris.com</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <span className="text-gold mt-0.5">🕐</span>
                    <span>Transfers available 24/7 — 365 days a year</span>
                  </div>
                </div>
              </div>

              <div className="card-dark">
                <h3 className="text-white font-semibold mb-3">When to Contact Us</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    'To book a transfer (WhatsApp preferred)',
                    'To ask about group rates for 8+ passengers',
                    'To modify or cancel an existing booking',
                    'For corporate accounts & regular transfers',
                    'If you have a question not answered above',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold text-xs mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark border-gold/30 bg-gold/5">
                <p className="text-gold text-sm font-semibold mb-1">English-speaking support</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  All booking confirmations, quotes and correspondence are handled
                  in English. You will never need to communicate in French.
                </p>
              </div>

              <Link href="/" className="btn-gold w-full py-3 text-sm inline-flex justify-center">
                ✨ Book Your Transfer Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
