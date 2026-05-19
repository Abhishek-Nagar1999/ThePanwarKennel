import { useState } from 'react';
import { faqItems } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">FAQ</p>
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__subtitle">
            Common questions about buying puppies in Delhi and our kennel services.
          </p>
        </header>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
            >
              <button
                type="button"
                className="faq-item__question"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <span className="faq-item__icon" aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
