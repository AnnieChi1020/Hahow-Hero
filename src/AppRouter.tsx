import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/heroes" element={<HeroListPage />} />
                <Route path="/heroes/:heroId" element={<HeroProfilePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
