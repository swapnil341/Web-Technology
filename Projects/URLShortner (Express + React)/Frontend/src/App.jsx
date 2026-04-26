import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import AllLinks from './pages/AllLinks'; // 1. Import the new page
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        <nav className="nav-bar">
          <h1 className="nav-title">🔗 Linkify</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link primary">Create</Link>
            <Link to="/analytics" className="nav-link secondary">Stats</Link>
            {/* 2. Add the Navigation Link */}
            <Link to="/links" className="nav-link">Database</Link> 
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* 3. Add the Route */}
          <Route path="/links" element={<AllLinks />} /> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;