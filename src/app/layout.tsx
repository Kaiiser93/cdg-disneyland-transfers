import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'CDG to Disneyland Paris Transfer | Private Chauffeur — Obrigado Transports',
  description:
    'Premium private transfer from CDG Airport to Disneyland Paris. Electric Tesla or Mercedes Van, free child seats, flight tracking. From €80. Book via WhatsApp.',
  keywords:
    'CDG to Disneyland Paris transfer, Charles de Gaulle airport Disneyland shuttle, private taxi CDG Disney, family transfer CDG Disneyland, car seat baby transfer Paris',
  authors: [{ name: 'Obrigado Transports' }],
  openGraph: {
    title: 'CDG to Disneyland Paris — Premium Private Transfer from €80',
    description:
      'Private chauffeur from CDG Airport to Disneyland Paris. Free child seats. Flight tracking. Tesla or Mercedes Van.',
    url: 'https://cdg-disneyland-transfers.co.uk',
    siteName: 'CDG Disneyland Transfers',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cdg-disneyland-transfers.co.uk',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://cdg-disneyland-transfers.co.uk/#business',
  name: 'CDG Disneyland Transfers — Obrigado Transports',
  description:
    'Premium private chauffeur service from CDG Airport to Disneyland Paris. Electric Tesla sedans and Mercedes Vans. Free child seats. Flight tracking included.',
  url: 'https://cdg-disneyland-transfers.co.uk',
  telephone: '+33189706414',
  email: 'contact@transfert-aeroports-paris.com',
  priceRange: '€€€',
  areaServed: ['Paris', 'Charles de Gaulle Airport', 'Disneyland Paris', 'Île-de-France'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  identifier: {
    '@type': 'PropertyValue',
    name: 'SIREN',
    value: '877736942',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '61',
    bestRating: '5',
    worstRating: '1',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'CDG Airport to Disneyland Paris — Private Transfer',
  description:
    'Premium private transfer from Charles de Gaulle Airport (CDG) to Disneyland Paris. Electric Tesla or Mercedes Van. Free child seats. Meet & Greet included.',
  brand: { '@type': 'Brand', name: 'Obrigado Transports' },
  url: 'https://cdg-disneyland-transfers.co.uk',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '80',
    highPrice: '120',
    priceCurrency: 'EUR',
    offerCount: '2',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '61',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
