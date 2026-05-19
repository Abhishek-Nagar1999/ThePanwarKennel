import { BUSINESS, whatsappUrl } from '../config';
import SafeImage from './SafeImage';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Delhi&apos;s Trusted Dog Kennel · {BUSINESS.owner}</p>
          <h1 className="hero__title">
            Healthy Puppies &amp; Dogs — All Breeds in Delhi
          </h1>
          <p className="hero__subtitle">
            {BUSINESS.name} offers all types of pure breed puppies and dogs —
            vaccinated, home-raised, and ethically bred. Labrador, Golden Retriever,
            German Shepherd, Husky, and many more across Delhi NCR.
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
