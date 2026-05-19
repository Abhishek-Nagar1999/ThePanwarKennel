import { useState, useEffect } from 'react';
import { BUSINESS, whatsappUrl } from '../config';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#puppies', label: 'Puppies' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      >
        <div className="container navbar__inner">
          <a href="#home" className="navbar__logo" onClick={closeMenu}>
            <span className="navbar__logo-icon" aria-hidden="true">
              🐾
            </span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-full">{BUSINESS.name}</span>
              <span className="navbar__logo-short">The Panwar Kennel</span>
            </span>
          </a>

          {/* Desktop nav — hidden on mobile via CSS */}
          <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hi ${BUSINESS.owner}, I would like to enquire about puppies.`)}
              className="btn btn--whatsapp navbar__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer — outside navbar to avoid backdrop-filter positioning bug */}
      <div
        className={`navbar-drawer ${menuOpen ? 'navbar-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="navbar-drawer__overlay"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <aside
          id="mobile-drawer"
          className="navbar-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="navbar-drawer__header">
            <span className="navbar-drawer__title">{BUSINESS.name}</span>
            <button
              type="button"
              className="navbar-drawer__close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>
          </div>

          <nav className="navbar-drawer__nav" aria-label="Mobile navigation">
            <ul className="navbar-drawer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hi ${BUSINESS.owner}, I would like to enquire about puppies.`)}
              className="btn btn--whatsapp btn--full navbar-drawer__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
