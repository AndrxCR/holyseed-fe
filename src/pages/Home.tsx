import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="container">
                <section className="hero fade-in">
                    <h1 className="hero-title">
                        Convierte Setlists en Playlists
                    </h1>
                    <p className="hero-subtitle">
                        Busca setlists de tus conciertos favoritos y crea playlists automáticamente en Spotify
                    </p>

                    <div className="hero-actions">
                        <Link to="/setlist-search" className="btn-primary">
                            Comenzar Ahora
                        </Link>
                    </div>
                </section>

                <section className="features">
                    <div className="feature-grid">
                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🎵</div>
                            <h3>Busca Setlists</h3>
                            <p>Encuentra setlists de conciertos de tus artistas favoritos usando la base de datos de setlist.fm</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">📝</div>
                            <h3>Selecciona Canciones</h3>
                            <p>Revisa las canciones tocadas en el concierto y selecciona las que quieres incluir</p>
                        </div>

                        <div className="feature-card card fade-in">
                            <div className="feature-icon">🎧</div>
                            <h3>Crea en Spotify</h3>
                            <p>Genera automáticamente una playlist en tu cuenta de Spotify con un solo clic</p>
                        </div>
                    </div>
                </section>

                <section className="info-section">
                    <div className="info-card card">
                        <h2>¿Cómo funciona?</h2>
                        <ol className="steps-list">
                            <li>
                                <strong>Conecta tu cuenta de Spotify</strong> - Autoriza la aplicación para crear playlists
                            </li>
                            <li>
                                <strong>Busca un artista</strong> - Encuentra setlists de conciertos usando setlist.fm
                            </li>
                            <li>
                                <strong>Selecciona un setlist</strong> - Elige el concierto que te interesa
                            </li>
                            <li>
                                <strong>Crea tu playlist</strong> - Genera automáticamente la playlist en Spotify
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
