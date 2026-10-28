import { Link } from 'react-router-dom';
import './ProjectPage.css';

export function NotFoundPage() {
  return (
    <div className="project-missing container">
      <h1>404</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn--primary">
        Return home
      </Link>
    </div>
  );
}
