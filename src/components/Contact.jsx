import { useState } from 'react';
import { BUSINESS, whatsappUrl, telUrl } from '../config';
import { allBreeds } from '../data/breeds';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', breed: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.\nPhone: ${form.phone}\nInterested in: ${form.breed || 'Any breed'}\n\n${form.message}`;
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section--beige">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Get in Touch Today</h2>
          <p className="section__subtitle">
            Call or WhatsApp {BUSINESS.owner} directly at {BUSINESS.phoneDisplay}.
            We respond quickly — usually within minutes.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__actions">
            <a href={telUrl()} className="contact-btn contact-btn--call">
              <span className="contact-btn__icon" aria-hidden="true">📞</span>
              <span>
                <strong>Click to Call</strong>
                <small>{BUSINESS.phoneDisplay}</small>
              </span>
            </a>

            <a
              href={whatsappUrl('Hi, I would like to enquire about puppies.')}
              className="contact-btn contact-btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-btn__icon" aria-hidden="true">💬</span>
              <span>
                <strong>WhatsApp Us</strong>
                <small>Instant reply</small>
              </span>
            </a>

            <a
              href={BUSINESS.instagram}
              className="contact-btn contact-btn--instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-btn__icon" aria-hidden="true">📷</span>
              <span>
                <strong>Instagram</strong>
                <small>{BUSINESS.instagramHandle}</small>
              </span>
            </a>

            <div className="contact__location">
              <span className="contact__location-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Location</strong>
                <p>{BUSINESS.address}</p>
                <p className="contact__location-areas">
                  Serving: {BUSINESS.serviceAreas.join(', ')}
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Quick Enquiry</h3>
            {submitted ? (
              <p className="contact-form__success">
                Opening WhatsApp with your enquiry…
              </p>
            ) : (
              <>
                <label>
                  Your Name
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    required
                    placeholder={BUSINESS.phoneDisplay}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
                <label>
                  Breed Interested In
                  <select
                    value={form.breed}
                    onChange={(e) => setForm({ ...form, breed: e.target.value })}
                  >
                    <option value="">Select a breed</option>
                    {allBreeds.map((breed) => (
                      <option key={breed} value={breed}>
                        {breed}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Enquiry via WhatsApp
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
