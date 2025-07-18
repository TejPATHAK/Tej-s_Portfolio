import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-16 animated-gradient flex items-center justify-center">
        <div className="text-center glass-strong rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-cyan-400 hover:text-cyan-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <motion.div whileHover={{ x: -5 }}>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors glass px-4 py-2 rounded-lg hover:glow-cyan"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Project Header */}
          <div className="mb-12">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6 glass-strong glow-cyan"
            />
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-sans">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-400 mb-6 body-text">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="glass text-cyan-400 px-3 py-1 rounded-full text-sm hover:glow-cyan transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://github.com/Tejaswi-Pathak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-strong hover:glow-cyan text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="border border-cyan-400/30 text-cyan-400 hover:glass-strong hover:glow-cyan px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-strong rounded-lg p-8 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white font-sans">Problem</h2>
              </div>
              <p className="text-gray-300 leading-relaxed body-text">
                {project.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-strong rounded-lg p-8 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white font-sans">Solution</h2>
              </div>
              <p className="text-gray-300 leading-relaxed body-text">
                {project.solution}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass-strong rounded-lg p-8 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white font-sans">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 body-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass-strong rounded-lg p-8 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white font-sans">Outcomes & Results</h2>
              </div>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 body-text">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Code Snippets */}
            {project.codeSnippets && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="glass-strong rounded-lg p-8 hover:glow-cyan transition-all duration-300"
              >
               <h2 className="text-2xl font-semibold text-white mb-6 font-sans">Code Examples</h2>
                <div className="space-y-6">
                  {project.codeSnippets.map((snippet, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.2 }}
                      className="glass rounded-lg p-4"
                    >
                      <h3 className="text-lg font-medium text-cyan-400 mb-3 mono">
                        {snippet.title}
                      </h3>
                      <pre className="bg-black/50 rounded p-4 overflow-x-auto glass">
                        <code className="text-green-400 text-sm mono">
                          {snippet.code}
                        </code>
                      </pre>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;