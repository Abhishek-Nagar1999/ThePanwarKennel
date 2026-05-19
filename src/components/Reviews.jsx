import { reviews } from '../data/reviews';
import SafeImage from './SafeImage';

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Reviews</p>
          <h2 className="section__title">What Our Customers Say</h2>
          <p className="section__subtitle">
            Real families across Delhi NCR who found their perfect puppy with us.
          </p>
        </header>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              <div className="review-card__header">
                <SafeImage
                  src={review.image}
                  alt={`${review.breed} puppy — ${review.name}`}
                  className="review-card__avatar"
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div>
                  <h3 className="review-card__name">{review.name}</h3>
                  <p className="review-card__meta">
                    {review.location} · {review.breed}
                  </p>
                </div>
              </div>
              <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(review.rating)}
              </div>
              <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
