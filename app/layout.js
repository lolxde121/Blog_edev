import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mi Blog Estático',
  description: 'Blog estático creado con Next.js y Markdown',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              📝 DevBlog
            </Link>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
