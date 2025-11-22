import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import SetlistSearch from './pages/SetlistSearch'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/setlist-search" element={<SetlistSearch />} />
            </Routes>
        </Layout>
    )
}

export default App
