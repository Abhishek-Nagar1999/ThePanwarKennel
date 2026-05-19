import { BUSINESS } from '../config';
import SafeImage from './SafeImage';

export default function About() {
  return (
    <section id="about" className="section section--beige">
      <div className="container about__grid">
        <div className="about__images">
          <SafeImage
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80&auto=format"
            alt={`Family-run dog kennel in Delhi — ${BUSINESS.name}`}
            className="about__img about__img--main"
            width={480}
            height={560}
            loading="lazy"
          />
          <SafeImage
            src="https://images.dog.ceo/breeds/shihtzu/n02086240_7207.jpg"
            alt={`Home-raised puppies at ${BUSINESS.name}`}
            className="about__img about__img--secondary"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <p className="section__eyebrow">About Us</p>
          <h2 className="section__title">Meet {BUSINESS.owner}</h2>
          <p className="about__text">
            {BUSINESS.name} is a family-run dog kennel in Delhi, founded and
            managed by <strong>{BUSINESS.owner}</strong>. Built on a genuine passion
            for dogs and ethical breeding, we have helped hundreds of families across
            Delhi NCR find their perfect companion.
          </p>
          <p className="about__text">
            We deal in <strong>all types of puppies and dogs</strong> — not limited
            to one or two breeds. Whether you want a Labrador, Golden Retriever,
            German Shepherd, Husky, Pomeranian, Beagle, or any other pure breed,
            Ankit Panwar will guide you with honesty and care.
          </p>
          <p className="about__text">
            Every puppy receives proper nutrition, early socialisation, full
            vaccinations, and veterinary care. We believe in transparency: you
            meet your puppy, see health records, and get honest guidance before
            you decide.
          </p>
          <ul className="about__list">
            <li>All breeds — puppies &amp; dogs available</li>
            <li>Home-raised, socialised puppies</li>
            <li>Full health &amp; vaccination documentation</li>
            <li>KCI registered puppies Delhi — on request</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
