import { BUSINESS } from '../config';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: BUSINESS.name,
    founder: {
      '@type': 'Person',
      name: BUSINESS.owner,
    },
    description:
      'The Woof House in Delhi — all breeds of healthy, vaccinated, KCI registered pure breed puppies and dogs. Owned by Ankit Panwar. Labrador puppies in Delhi, Golden Retrievers, German Shepherds, Huskies, Pomeranians, Beagles and more. Puppies for sale Delhi NCR.',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    areaServed: [
      ...BUSINESS.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area,
      })),
      {
        '@type': 'City',
        name: 'Delhi NCR',
      },
    ],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [BUSINESS.instagram],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you deal in all types of puppies and dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Woof House deals in all types of pure breed puppies and dogs across Delhi NCR. Contact Ankit Panwar on WhatsApp at 9568333393.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is The Woof House located in Delhi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Woof House is based in Delhi, serving all of Delhi NCR including Gurgaon, Noida, Faridabad, and Ghaziabad.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your puppies KCI registered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer KCI registered puppies in Delhi for select breeds.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
