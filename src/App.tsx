import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './components/PageContents/PageContents';
import Admin from './components/Admin/Admin';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mt-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/:pageName" element={<Page />} />
          <Route path="/pages/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;







