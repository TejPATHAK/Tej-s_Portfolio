import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center font-sans">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Resume</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto body-text">
            Download or view my complete professional resume showcasing my DevOps expertise and experience.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume/TejaswiPathak_Resume.pdf"
                download
                className="glass-strong hover:glow-cyan text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume/TejaswiPathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400/30 text-cyan-400 hover:glass-strong hover:glow-cyan px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View in New Tab</span>
              </a>
            </motion.div>
          </div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-strong rounded-lg p-4 hover:glow-cyan transition-all duration-300"
          >
            <div className="w-full h-screen max-h-[800px] bg-white rounded">
              <iframe
                src="/resume/TejaswiPathak_Resume.pdf"
                className="w-full h-full rounded"
                title="Tejaswi Pathak Resume"
              />
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-strong rounded-lg p-6 text-center hover:glow-cyan transition-all duration-300"
            >
             <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-sans">Education</h3>
             <p className="text-gray-300 body-text">B.Tech Computer Science</p>
              <p className="text-gray-400 text-sm">2021 - 2025</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-strong rounded-lg p-6 text-center hover:glow-cyan transition-all duration-300"
            >
             <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-sans">Experience</h3>
             <p className="text-gray-300 body-text">DevOps Technical Intern</p>
              <p className="text-gray-400 text-sm">Linux World Informatics</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-strong rounded-lg p-6 text-center hover:glow-cyan transition-all duration-300"
            >
             <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-sans">Specialization</h3>
             <p className="text-gray-300 body-text">CI/CD & Kubernetes</p>
              <p className="text-gray-400 text-sm">DevOps Engineering</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;