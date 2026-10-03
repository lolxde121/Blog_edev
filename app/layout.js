import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Edev | Blog de Desarrollo y Tecnología',
  description: 'Blog personal sobre desarrollo de software, algoritmos, proyectos y tecnología.',
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-brand">
              <span className="brand-icon">⚡</span>
              <span className="site-title">Edev</span>
            </Link>
            <nav className="site-nav">
              <Link href="/" className="nav-link">
                Inicio
              </Link>
              <a
                href="https://github.com/lolxde121/Blog_edev"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© {currentYear} Edev. Desarrollado con Next.js.</p>
            <p>
              Explorando código, algoritmos y diseño marino 🌊
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
