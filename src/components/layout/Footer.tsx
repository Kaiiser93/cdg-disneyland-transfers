import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060A12] border-t border-[#263044] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <div>
                <span className="text-white font-bold block text-sm">CDG Disneyland Transfers</span>
                <span className="text-gold text-xs">by Obrigado Transports</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Premium private transfers between Paris-CDG Airport and Disneyland Paris.
              Available 24/7, 365 days a year.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/fleet', label: 'Fleet & Prices' },
                { href: '/cdg-guide', label: 'CDG Airport Guide' },
                { href: '/faq', label: 'FAQ & Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>CDG → Disneyland Paris</li>
              <li>Orly → Disneyland Paris</li>
              <li>Paris city → Disneyland</li>
              <li>Family group transfers</li>
              <li>Meet &amp; Greet at arrival</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Book Now</h3>
            <a
              href="https://wa.me/33189706414?text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer%20from%20CDG%20to%20Disneyland%20Paris."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-3 text-sm w-full mb-3"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <p className="text-gray-500 text-xs">
              We reply in English — fast response guaranteed.
            </p>
            <p className="text-gray-600 text-xs mt-3">
              Also serving UK travellers from Heathrow, Gatwick &amp; Eurostar.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E2A3D] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2025 Obrigado Transports · SIREN 877 736 942 · 14 rue Albert Einstein, 93200 Saint-Denis, France
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="https://transfert-aeroports-paris.fr/fr/cgv" className="hover:text-gold transition-colors" target="_blank">
              Terms
            </Link>
            <Link href="https://transfert-aeroports-paris.fr/fr/confidentialite" className="hover:text-gold transition-colors" target="_blank">
              Privacy
            </Link>
            <Link href="https://transfert-aeroports-paris.fr/fr/remboursement" className="hover:text-gold transition-colors" target="_blank">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
