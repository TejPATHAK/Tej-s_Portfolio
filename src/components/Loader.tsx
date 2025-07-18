import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    'Initializing CI/CD pipelines...',
    'Authenticating Tejaswi Pathak...',
    'Spinning up K8s pods...',
    'Loading DevOps Dashboard...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 dark-mode-bg flex items-center justify-center z-50 terminal-grid">
      <div className="text-center relative">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full neon-blob-3d" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full neon-blob-3d" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-indigo-500/20 rounded-full neon-blob-3d" style={{ animationDelay: '4s' }} />
        </div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 3D DevOps Cube with Rotating Faces */}
          <div className="relative w-48 h-48 mx-auto perspective-1000">
            {/* Outer Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30 neon-glow-3d"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* 3D Rotating DevOps Cube */}
            <motion.div
              className="cube-container absolute inset-0 w-full h-full"
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="cube">
                <div className="cube-face cube-front">
                  <div className="text-4xl text-cyan-400">🚀</div>
                </div>
                <div className="cube-face cube-back">
                  <div className="text-4xl text-purple-400">⚡</div>
                </div>
                <div className="cube-face cube-right">
                  <div className="text-4xl text-indigo-400">🔧</div>
                </div>
                <div className="cube-face cube-left">
                  <div className="text-4xl text-cyan-400">🐳</div>
                </div>
                <div className="cube-face cube-top">
                  <div className="text-4xl text-purple-400">☸️</div>
                </div>
                <div className="cube-face cube-bottom">
                  <div className="text-4xl text-indigo-400">🔄</div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating DevOps Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{ width: '130%', height: '130%', top: '-15%', left: '-15%' }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl floating-icon-3d">💻</div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl floating-icon-3d">🌐</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl floating-icon-3d">📊</div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl floating-icon-3d">🔐</div>
            </motion.div>
            
            {/* Pulsating Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/20 neon-ring-3d"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
        
        {/* Terminal Loading Text */}
        <motion.div
          className="neon-glass-3d rounded-lg px-8 py-4 max-w-md mx-auto neon-glow-cyan-3d"
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="terminal-text text-lg">
            <span className="text-cyan-400 mr-3 text-neon-cyan-3d"></span>
            {steps[currentStep]}
          </div>
        </motion.div>
        
        {/* Animated Loading Dots */}
        <div className="mt-8 flex justify-center space-x-3">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full loading-dot-3d"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* DevOps Status Indicators */}
        <motion.div
          className="mt-8 flex justify-center space-x-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full neon-pulse-3d"></div>
            <span className="text-cyan-400 terminal-text">CI/CD</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full neon-pulse-3d" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-blue-400 terminal-text">K8s</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full neon-pulse-3d" style={{ animationDelay: '1s' }}></div>
            <span className="text-purple-400 terminal-text">DevOps</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;