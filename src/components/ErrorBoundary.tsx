import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[OBSCURA]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            background: '#07080C',
            color: '#F4F3F8',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#8B7CFF' }}>
            OBSCURA®
          </p>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ color: '#999EAE', maxWidth: '32ch', margin: 0 }}>
            Please refresh the page. If the problem continues, try another browser.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#F4F3F8',
              color: '#07080C',
              border: 'none',
              borderRadius: '999px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
