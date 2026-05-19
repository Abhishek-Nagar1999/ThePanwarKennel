import { features } from '../data/features';
import { BUSINESS } from '../config';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Why Choose Us</p>
          <h2 className="section__title">{BUSINESS.name} — Delhi You Can Trust</h2>
          <p className="section__subtitle">
            Led by {BUSINESS.owner}, we deal in all types of puppies and dogs with
            a focus on ethical breeding, health, and lifelong support across Delhi NCR.
          </p>
        </header>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
