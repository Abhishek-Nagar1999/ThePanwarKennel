import { puppies } from '../data/puppies';
import { allBreeds } from '../data/breeds';
import { BUSINESS, whatsappUrl } from '../config';
import SafeImage from './SafeImage';

export default function Puppies() {
  return (
    <section id="puppies" className="section section--beige">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Our Puppies &amp; Dogs</p>
          <h2 className="section__title">All Breeds — Puppies for Sale in Delhi NCR</h2>
          <p className="section__subtitle">
            We deal in all types of pure breed puppies and dogs. Featured breeds
            below — don&apos;t see yours? WhatsApp {BUSINESS.owner} for any breed
            availability.
          </p>
        </header>

        <div className="breeds-banner">
          <p>
            <strong>50+ breeds available</strong> — Labrador, Golden Retriever,
            German Shepherd, Husky, Pomeranian, Beagle, Rottweiler, Doberman, Pug,
            Boxer, Dalmatian &amp; more. Enquire for any breed not listed below.
          </p>
          <a
            href={whatsappUrl(`Hi ${BUSINESS.owner}, I am looking for a specific breed. Can you share what is available?`)}
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask About Any Breed
          </a>
        </div>

        <div className="puppies-grid">
          {puppies.map((puppy) => (
            <article key={puppy.id} className="puppy-card">
              <div className="puppy-card__image-wrap">
                <SafeImage
                  src={puppy.image}
                  alt={puppy.alt}
                  className="puppy-card__image"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div className="puppy-card__badges">
                  <span className="puppy-card__badge puppy-card__badge--vax">{puppy.vaccinated}</span>
                </div>
              </div>
              <div className="puppy-card__body">
                <h3 className="puppy-card__breed">{puppy.breed}</h3>
                <p className="puppy-card__desc">{puppy.description}</p>
                <a
                  href={whatsappUrl(
                    `Hi ${BUSINESS.owner}, I'm interested in the ${puppy.breed} puppy. Please share availability and details.`
                  )}
                  className="btn btn--whatsapp btn--full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="breeds-tags">
          <p className="breeds-tags__label">Also available:</p>
          <div className="breeds-tags__list">
            {allBreeds.filter((b) => b !== 'Other / Not Listed').map((breed) => (
              <span key={breed} className="breeds-tags__tag">
                {breed}
              </span>
            ))}
            <span className="breeds-tags__tag breeds-tags__tag--more">+ Many More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
