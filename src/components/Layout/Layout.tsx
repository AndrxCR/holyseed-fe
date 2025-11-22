import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    const location = useLocation()

    return (
        <div className="layout">
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <Link to="/" className="logo">
                            <span className="logo-icon">🌱</span>
                            <span className="logo-text">Holyseed</span>
                        </Link>

                        <div className="nav-links">
                            <Link
                                to="/setlist-search"
                                className={`nav-link ${location.pathname === '/setlist-search' ? 'active' : ''}`}
                            >
                                Buscar Setlists
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="main">
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p className="footer-text">
                        Holyseed - Convierte setlists en playlists de Spotify
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
