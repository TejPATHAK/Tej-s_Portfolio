import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'DevOps Foundation Certification',
      issuer: 'Linux World Informatics',
      date: '2024',
      description: 'Comprehensive DevOps training covering CI/CD, containerization, and automation.',
      pdfPath: '/certifications/Tejaswi Pathak.pdf',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    },
    {
      id: 2,
      title: 'Generative AI Fundamentals',
      issuer: 'Udemy',
      date: '2024',
      description: 'Understanding AI/ML concepts and their applications in modern development.',
      pdfPath: '/certifications/Udemy_GenAi.pdf',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
    },
    {
      id: 3,
      title: 'Cloud Computing Essentials',
      issuer: 'Industry Certification',
      date: '2024',
      description: 'Cloud infrastructure, deployment strategies, and best practices.',
      pdfPath: '/certifications/UC-36ff877c-7a87-4ee4-a43a-6fe931ebad7b.pdf',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center font-sans">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto body-text">
            Professional certifications that validate my expertise in DevOps, cloud computing, and modern technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-strong rounded-lg overflow-hidden hover:glow-cyan transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors font-sans">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.date}
                  </p>
                  <p className="text-gray-300 mb-6 text-sm body-text">
                    {cert.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 glass-strong hover:glow-cyan text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={cert.pdfPath}
                        download
                        className="flex items-center space-x-2 glass hover:glow-cyan text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 glass-strong rounded-lg p-8 text-center hover:glow-cyan transition-all duration-300"
          >
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4 font-sans">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto body-text">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and expertise 
              in DevOps, cloud computing, and emerging technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;