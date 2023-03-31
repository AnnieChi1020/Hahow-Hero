import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroesPage from './pages/HeroesPage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/heroes" element={<HeroesPage />} />
                    <Route path="/heroes/:heroId" element={<HeroesPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
