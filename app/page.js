import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPosts = getSortedPostsData();

  /* ==========================================================================
     📌 CONFIGURACIÓN DE TU PERFIL / INFORMACIÓN PERSONAL
     Modifica estos datos fácilmente con tu información y foto.
     Para tu foto: Coloca tu imagen (ej: "mi-foto.jpg") dentro de la carpeta /public
     y pon aquí: avatarUrl: "/mi-foto.jpg"
     ========================================================================== */
  const profile = {
    avatarUrl: '/avatar.svg', // 📸 Ruta a tu foto en /public (ej: "/avatar.png", "/foto.jpg")
    name: 'Edgar', // 👤 Tu nombre
    role: 'Desarrollador de Software & Tech Enthusiast', // 💼 Tu rol o especialidad
    bio: '¡Hola! 👋 Bienvenido a mi blog personal. Aquí comparto notas, artículos y aprendizajes sobre desarrollo de software, algoritmos, proyectos y tecnología.',
    status: 'Disponible para nuevos proyectos', // 🟢 Estado / Badge
    skills: ['Next.js', 'React', 'JavaScript', 'Algoritmos', 'Frontend / Backend'],
    socials: [
      { name: 'GitHub', url: 'https://github.com/lolxde121', icon: '💻' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
      { name: 'Email', url: 'mailto:contacto@ejemplo.com', icon: '✉️' },
    ],
  };

  return (
    <>
      {/* 🔹 APARTADO DE INFORMACIÓN PERSONAL / SOBRE MÍ */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar-glow" />
            <img
              src={profile.avatarUrl}
              alt={`Foto de ${profile.name}`}
              className="profile-avatar-img"
              width={115}
              height={115}
            />
          </div>

          <div className="profile-info">
            {profile.status && (
              <span className="profile-status">
                <span className="status-dot" />
                {profile.status}
              </span>
            )}

            <h1 className="profile-name">{profile.name}</h1>
            <p className="profile-role">{profile.role}</p>
            <p className="profile-bio">{profile.bio}</p>

            {profile.skills && profile.skills.length > 0 && (
              <div className="profile-tags">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="profile-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {profile.socials && profile.socials.length > 0 && (
              <div className="profile-links">
                {profile.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-btn"
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🔹 LISTADO DE ARTÍCULOS */}
      <section>
        <div className="section-header">
          <h2 className="section-title">Artículos Recientes</h2>
          <span className="posts-count">
            {allPosts.length} {allPosts.length === 1 ? 'artículo' : 'artículos'}
          </span>
        </div>

        {allPosts.length === 0 ? (
          <div className="post-card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              No se encontraron artículos en la carpeta <code>/posts</code>.
            </p>
          </div>
        ) : (
          <ul className="posts-list">
            {allPosts.map(({ id, date, title, description }) => (
              <li key={id} className="post-card">
                <h2>
                  <Link href={`/posts/${id}`}>{title}</Link>
                </h2>
                <div className="post-meta">
                  <span className="meta-icon">📅</span>
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
                  Leer artículo completo <span>&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
