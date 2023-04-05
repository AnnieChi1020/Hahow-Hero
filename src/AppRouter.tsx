import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';
import HeroesPage from './pages/HeroesPage';

function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/heroes" element={<HeroesPage />} />
                    <Route path="/heroes/:heroId" element={<HeroesPage />} />
                    <Route path="/" element={<Navigate to="/heroes" />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRouter;
