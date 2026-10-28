import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';
const section = (id: string) => `${base}/#${id}`;


const navItems = [
  { label: 'Work', href: section('work') },
  { label: 'About', href: section('about') },
  { label: 'Services', href: section('services') },
  { label: 'Contact', href: section('contact') },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="OBSCURA home">
          <span className="header__logo-mark">OBSCURA</span>
          <span className="header__logo-reg">®</span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="header__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href={section('contact')} className="header__cta">
            Let’s Talk
          </a>
          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="header__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={section('contact')}
                className="header__mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Let’s Talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
