import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostData, getAllPostIds } from '@/lib/posts';

/**
 * Genera de forma estática los parámetros de ruta en tiempo de compilación (SSG)
 */
export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.id,
  }));
}

/**
 * Genera metadatos dinámicos (SEO) para cada post
 */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${postData.title} | Edev`,
    description: postData.description,
  };
}

/**
 * Componente de la página del Post
 */
export default async function Post({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <article className="post-detail">
      <Link href="/" className="back-link">
        &larr; Volver al inicio
      </Link>

      <header className="post-header">
        <h1>{postData.title}</h1>
        <div className="post-meta">
          <time dateTime={postData.date}>
            {new Date(postData.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
