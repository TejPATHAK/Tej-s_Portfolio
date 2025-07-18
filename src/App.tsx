import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen dark-mode-bg text-white terminal-grid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Enhanced 3D Floating Neon Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full neon-blob-3d" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full neon-blob-3d" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-indigo-500/10 rounded-full neon-blob-3d" style={{ animationDelay: '6s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-cyan-400/10 rounded-full neon-blob-3d" style={{ animationDelay: '9s' }} />
          <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-purple-400/8 rounded-full neon-blob-3d" style={{ animationDelay: '12s' }} />
          <div className="absolute bottom-1/6 right-3/4 w-56 h-56 bg-indigo-400/8 rounded-full neon-blob-3d" style={{ animationDelay: '15s' }} />
        </div>
        
        {/* Enhanced 3D Terminal Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent ring-3d" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent ring-3d" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent ring-3d" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent ring-3d" />
        </div>
      </div>
    </Router>
  );
}

export default App;