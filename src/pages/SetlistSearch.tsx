import { useState } from 'react'
import './SetlistSearch.css'

function SetlistSearch() {
    const [artistName, setArtistName] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!artistName.trim()) return

        setIsSearching(true)
        // TODO: Implement setlist.fm API integration
        console.log('Searching for:', artistName)

        // Simulate API call
        setTimeout(() => {
            setIsSearching(false)
        }, 1500)
    }

    return (
        <div className="setlist-search">
            <div className="container">
                <div className="search-header fade-in">
                    <h1>Buscar Setlists</h1>
                    <p>Encuentra setlists de conciertos de tus artistas favoritos</p>
                </div>

                <div className="search-section card fade-in">
                    <form onSubmit={handleSearch} className="search-form">
                        <div className="search-input-group">
                            <input
                                type="text"
                                placeholder="Nombre del artista o banda..."
                                value={artistName}
                                onChange={(e) => setArtistName(e.target.value)}
                                disabled={isSearching}
                                className="search-input"
                            />
                            <button
                                type="submit"
                                className="btn-primary search-button"
                                disabled={isSearching || !artistName.trim()}
                            >
                                {isSearching ? (
                                    <>
                                        <span className="spinner-small"></span>
                                        Buscando...
                                    </>
                                ) : (
                                    <>
                                        🔍 Buscar
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="search-info">
                        <p className="info-text">
                            💡 <strong>Tip:</strong> Escribe el nombre del artista tal como aparece en setlist.fm para mejores resultados
                        </p>
                    </div>
                </div>

                <div className="results-section">
                    <div className="placeholder-card card">
                        <div className="placeholder-icon">🎸</div>
                        <h3>Próximamente</h3>
                        <p>La integración con setlist.fm estará disponible pronto</p>
                        <div className="placeholder-features">
                            <div className="placeholder-feature">
                                <span className="check-icon">✓</span>
                                <span>Búsqueda de artistas</span>
                            </div>
                            <div className="placeholder-feature">
                                <span className="check-icon">✓</span>
                                <span>Visualización de setlists</span>
                            </div>
                            <div className="placeholder-feature">
                                <span className="check-icon">✓</span>
                                <span>Exportación a Spotify</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetlistSearch
