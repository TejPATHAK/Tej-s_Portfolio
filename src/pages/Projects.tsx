import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Terminal, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <Terminal className="w-6 h-6 text-neon-cyan" />
              <span className="terminal-text text-sm">~/projects</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-neon-cyan">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto body-text">
              Explore my DevOps projects showcasing automation, scalability, and modern infrastructure practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="neon-glass-strong rounded-lg overflow-hidden hover:neon-glow-cyan transition-all duration-300 group neon-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  
                  {/* DevOps Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="neon-glass rounded-full p-2 neon-glow-purple">
                      <Zap className="w-4 h-4 text-neon-purple" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 body-text">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="neon-glass text-neon-cyan px-2 py-1 rounded text-sm hover:neon-glow-cyan transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center space-x-2 text-neon-cyan hover:text-cyan-300 transition-colors neon-glass px-3 py-2 rounded-lg hover:neon-glow-cyan neon-btn"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href="https://github.com/Tejaswi-Pathak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors neon-glass px-3 py-2 rounded-lg hover:neon-glow-purple neon-btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Terminal Command Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 neon-glass rounded-lg p-6 max-w-4xl mx-auto neon-glow-indigo"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-5 h-5 text-neon-indigo" />
              <span className="terminal-text text-neon-indigo">tejaswi@devops:~/projects$</span>
            </div>
            <div className="terminal-text text-green-400 space-y-2">
              <div className="terminal-prompt">git clone https://github.com/Tejaswi-Pathak/devops-projects</div>
              <div className="terminal-prompt">cd devops-projects && ls -la</div>
              <div className="text-gray-400 text-sm mt-4">
                Each project includes complete documentation, code samples, and deployment guides 📚
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;