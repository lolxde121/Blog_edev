import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <section>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 800 }}>
        Artículos Recientes
      </h1>

      {allPosts.length === 0 ? (
        <p>No se encontraron artículos en la carpeta /posts.</p>
      ) : (
        <ul className="posts-list">
          {allPosts.map(({ id, date, title, description }) => (
            <li key={id} className="post-card">
              <h2>
                <Link href={`/posts/${id}`}>{title}</Link>
              </h2>
              <div className="post-meta">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              {description && <p className="post-description">{description}</p>}
              <Link href={`/posts/${id}`} className="read-more">
                Leer artículo completo &rarr;
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
