import { BUSINESS, whatsappUrl } from '../config';
import SafeImage from './SafeImage';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Delhi&apos;s Trusted Dog Kennel · {BUSINESS.owner}</p>
          <p className="hero__tagline">{BUSINESS.tagline}</p>
          <h1 className="hero__title">
            Puppies in Delhi &amp; Dogs in Delhi NCR — All Breeds Available
          </h1>
          <p className="hero__subtitle">
            {BUSINESS.name} is a trusted Delhi dog kennel offering puppies in Delhi,
            Labrador puppies in Delhi, and healthy family-ready dogs across Delhi NCR.
            Vaccinated, home-raised, KCI registered puppies for sale in Delhi.
          </p>
          <div className="hero__cta">
            <a href="#puppies" className="btn btn--primary">
              View Puppies
            </a>
            <a
              href={whatsappUrl(`Hi ${BUSINESS.owner}, I would like to enquire about puppies at ${BUSINESS.name}.`)}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="hero__trust">
            <span>✓ All Breeds</span>
            <span>✓ Vaccinated</span>
            <span>✓ KCI Registered</span>
          </div>
        </div>
        <div className="hero__image-wrap">
          <SafeImage
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=85&auto=format"
            alt={`Healthy puppies and dogs at ${BUSINESS.name} Delhi`}
            className="hero__image"
            width={600}
            height={700}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
