import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Mail, ExternalLink, Github, Linkedin, Terminal, Zap, Cpu, Code, Database, Cloud } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 relative z-10">
      {/* Floating 3D Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-16 h-16 floating-element-3d"
        >
          <Code className="w-full h-full text-cyan-400/30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/6 w-20 h-20 floating-element-3d"
        >
          <Database className="w-full h-full text-purple-400/30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/4 w-18 h-18 floating-element-3d"
        >
          <Cloud className="w-full h-full text-indigo-400/30" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="flex items-center space-x-2 mb-4"
              >
                <Terminal className="w-6 h-6 text-neon-cyan-3d" />
                <span className="terminal-text text-sm">~/tejaswi-pathak</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-baseline space-x-4"
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-sans hero-text-3d">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-neon-cyan-3d inline-block">
                    Tejaswi Pathak
                  </span>
                </h1>
              </motion.div>
              
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 mono mt-4">
                <TypewriterEffect
                  texts={[
                    'DevOps Engineer',
                    'CI/CD Specialist', 
                    'Kubernetes Expert',
                    'GitOps Practitioner',
                    'Jenkins Automation',
                    'Infrastructure as Code'
                  ]}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="neon-glass-3d rounded-lg p-6 neon-glow-cyan-3d card-3d"
            >
              <p className="text-lg text-gray-300 leading-relaxed body-text">
                B.Tech CSE Graduate passionate about building scalable, automated infrastructure. 
                Specializing in CI/CD pipelines, Kubernetes orchestration, and DevOps best practices.
              </p>
              
              {/* DevOps Status Indicators with 3D effect */}
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full neon-pulse-3d status-indicator-3d"></div>
                  <span className="text-cyan-400 text-sm terminal-text">CI/CD Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full neon-pulse-3d status-indicator-3d" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-blue-400 text-sm terminal-text">K8s Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full neon-pulse-3d status-indicator-3d" style={{ animationDelay: '1s' }}></div>
                  <span className="text-purple-400 text-sm terminal-text">DevOps</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D Profile Image with Buttons and Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Profile Image */}
            <div className="relative profile-container-3d">
              {/* Multiple Animated Outer Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400/20 neon-glow-cyan-3d ring-3d"
                style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-purple-400/20 neon-glow-purple-3d ring-3d"
                style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-indigo-400/10 neon-glow-indigo-3d ring-3d"
                style={{ width: '130%', height: '130%', top: '-15%', left: '-15%' }}
              />
              
              {/* DevOps Icons Orbiting with 3D effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 orbit-3d"
                style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
              >
                <Terminal className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 text-cyan-400 orbit-icon-3d" />
                <Zap className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-purple-400 orbit-icon-3d" />
                <Cpu className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 text-indigo-400 orbit-icon-3d" />
                <Database className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-cyan-400 orbit-icon-3d" />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, z: 20 }}
                className="relative profile-image-3d"
              >
                <img
                  src="/images/Photo.jpg"
                  alt="Tejaswi Pathak"
                  className="relative w-64 h-64 rounded-full object-cover neon-glass-strong-3d neon-glow-cyan-3d shadow-2xl border-2 border-cyan-400/30 image-3d"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/10 via-transparent to-purple-400/10 overlay-3d" />
                
                {/* Multiple Floating DevOps Badges */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 neon-glass-3d rounded-full p-3 neon-glow-purple-3d badge-3d"
                >
                  <span className="text-purple-400 text-2xl">🚀</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0],
                    scale: [1.1, 1, 1.1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 neon-glass-3d rounded-full p-3 neon-glow-cyan-3d badge-3d"
                >
                  <span className="text-cyan-400 text-2xl">⚡</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-6 neon-glass-3d rounded-full p-2 neon-glow-indigo-3d badge-3d"
                >
                  <span className="text-indigo-400 text-xl">☸️</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-start lg:justify-start mt-16 lg:ml-0"
            >
              <motion.div whileHover={{ scale: 1.05, z: 20 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="neon-btn-3d text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 neon-glow-cyan-3d button-3d text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Projects</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, z: 20 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/resume/TejaswiPathak_Resume.pdf"
                  download
                  className="neon-btn-3d text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 neon-glow-purple-3d button-3d text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
              
              {/* Contact Me with Social Icons */}
              <motion.div 
                whileHover={{ scale: 1.05, z: 20 }} 
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Link
                  to="/contact"
                  className="border border-cyan-400/30 text-cyan-400 hover:neon-glass-strong-3d hover:neon-glow-cyan-3d px-5 py-2.5 rounded-l-lg font-medium transition-all duration-300 flex items-center space-x-2 button-3d text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </Link>
                <div className="flex border-l border-cyan-400/30">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -1 }}
                    href="https://github.com/Tejaswi-Pathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-l-0 border-cyan-400/30 text-gray-400 hover:text-neon-cyan-3d hover:neon-glass-strong-3d hover:neon-glow-cyan-3d transition-all p-2.5 button-3d social-icon-3d"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -1 }}
                    href="https://linkedin.com/in/tejaswi-pathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-l-0 border-cyan-400/30 text-gray-400 hover:text-neon-indigo-3d hover:neon-glass-strong-3d hover:neon-glow-cyan-3d transition-all p-2.5 rounded-r-lg button-3d social-icon-3d"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* DevOps Quote Section - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="neon-glass-3d rounded-lg p-8 neon-glow-purple-3d card-3d text-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <div className="flex items-center space-x-2 bg-green-500/10 border border-green-400/30 rounded-full px-4 py-2 neon-glow-cyan-3d">
                <div className="w-2 h-2 bg-green-400 rounded-full neon-pulse-3d"></div>
                <span className="text-green-400 font-medium">Status: Available for opportunities</span>
              </div>
            </motion.div>

            {/* DevOps Quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed body-text"
              >
                <span className="text-neon-cyan font-semibold">DevOps</span> is not just a skill — it's my mindset. 
                With every <span className="text-neon-cyan">build</span>, <span className="text-neon-cyan">deploy</span>, 
                <span className="text-neon-cyan"> rollback</span>, and <span className="text-neon-cyan">sync</span>, 
                I move closer to becoming the DevOps engineer I aspire to be.
              </motion.p>
              
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 30px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Let's innovate, automate, and elevate together.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;