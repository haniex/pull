import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';
const section = (id: string) => `${base}/#${id}`;


export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            OBSCURA<span>®</span>
          </Link>
          <nav className="footer__nav" aria-label="Footer">
            <a href={section('work')}>Work</a>
            <a href={section('about')}>About</a>
            <a href={section('services')}>Services</a>
            <a href={section('contact')}>Contact</a>
          </nav>
          <button
            className="footer__top-btn"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
            <span>Top</span>
          </button>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} OBSCURA®. Conceptual portfolio. All
            projects are fictional case studies.
          </p>
          <p className="footer__note">
            Independent Digital Designer & Creative Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
