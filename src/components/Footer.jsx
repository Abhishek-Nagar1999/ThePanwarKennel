import { BUSINESS, whatsappUrl, telUrl } from '../config';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#puppies', label: 'Puppies' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span aria-hidden="true">🐾</span> {BUSINESS.name}
          </a>
          <p className="footer__tagline">{BUSINESS.tagline}</p>
          <p className="footer__address">Owner: {BUSINESS.owner} · {BUSINESS.address}</p>
        </div>

        <div>
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <a href={telUrl()}>{BUSINESS.phoneDisplay}</a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {BUSINESS.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Service Areas</h4>
          <p className="footer__areas">
            {BUSINESS.serviceAreas.join(' · ')}
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="footer__seo">
            Dog kennel in Delhi · Labrador puppy in Delhi · Puppies for sale Delhi NCR · KCI registered puppies Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
