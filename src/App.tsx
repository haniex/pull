import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

// Vite injects base (e.g. "/pull/"); React Router wants no trailing slash (or "/")
const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={basename === '/' ? undefined : basename}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
