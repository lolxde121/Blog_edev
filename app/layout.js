import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Edev',
  description: 'Blog de desarrollo, algoritmos y tecnología',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              📝 Edev
            </Link>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
