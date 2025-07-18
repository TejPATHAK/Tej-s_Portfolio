import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, PenTool, Award, Mic, Share2, Settings, GitBranch, Zap, Code, Database, Cloud, Cpu, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'DevOps', 'CI/CD', 'Kubernetes', 'Jenkins', 'Docker', 'GitOps', 'ArgoCD',
    'Infrastructure as Code', 'Continuous Integration',
    'Continuous Delivery', 'Agile', 'Automation', 'Cluster Deployment',
    'NGINX Reverse Proxy', 'Pipeline Orchestration', 'Terraform', 'Prometheus', 'Grafana'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  const educationItems = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "MGM's Jawaharlal Nehru Engineering College",
      duration: "2021 - 2025",
      location: "Maharashtra, India"
    },
    {
      degree: "Higher Secondary Education – Science (PCM/Electronics)",
      institution: "Devgiri Jr College of Science",
      duration: "Jul 2019 – Aug 2021",
      location: "Grade: 11th – 12th"
    },
    {
      degree: "All India Secondary School Examination – Secondary Education",
      institution: "Chate CBSE School",
      duration: "Playgroup – 10th (until May 2019)",
      location: "Board: CBSE"
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative">
            {/* Animated DevOps Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={floatingAnimation}
                className="absolute -top-8 -left-8 w-16 h-16 opacity-20"
              >
                <Settings className="w-full h-full text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 1 }
                }}
                className="absolute -top-4 -right-8 w-12 h-12 opacity-20"
              >
                <GitBranch className="w-full h-full text-purple-400" />
              </motion.div>
              <motion.div
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 2 }
                }}
                className="absolute -bottom-4 -left-4 w-14 h-14 opacity-20"
              >
                <Zap className="w-full h-full text-indigo-400" />
              </motion.div>
            </div>
            
            <motion.h1 
            variants={textVariants}
            className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center font-sans"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-neon-cyan">Me</span>
          </motion.h1>
          </div>

          <div className="space-y-12">
            {/* Main Biography */}
            <motion.div
              variants={textVariants}
              className="neon-glass-strong rounded-lg p-8 neon-glow-cyan neon-card"
            >
              {/* Animated DevOps Icons for Biography */}
              <div className="absolute top-4 right-4 opacity-30">
                <motion.div
                  variants={iconVariants}
                  animate="visible"
                  initial="hidden"
                >
                  <Code className="w-8 h-8 text-cyan-400" />
                </motion.div>
              </div>
              
              <div className="prose prose-lg text-gray-300 max-w-none body-text">
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mb-6"
                >
                  Hi, I'm <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Tejaswi Pathak
                  </motion.strong> — a{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    B.Tech Computer Science graduate (2021–2025)
                  </motion.strong> from{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    MGM's Jawaharlal Nehru Engineering College, Chhatrapati Sambhajinagar, Maharashtra
                  </motion.strong>,
                  and a passionate <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    DevOps Engineer
                  </motion.strong> in the making.
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mb-6"
                >
                  I specialize in building <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    end-to-end CI/CD pipelines
                  </motion.strong>,
                  deploying containerized applications using <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Kubernetes
                  </motion.strong>,{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Jenkins
                  </motion.strong>, and <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Docker
                  </motion.strong>,
                  and leveraging tools like <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Ansible
                  </motion.strong>,{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    ArgoCD
                  </motion.strong> to implement fully automated, scalable infrastructure systems.
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mb-6"
                >
                  As a <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    DevOps Technical Intern at Linux World Informatics Pvt Ltd
                  </motion.strong>,
                  under the mentorship of <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    World Record Holder Mr. Vimal Daga
                  </motion.strong>,
                  I've been immersed in real-world engineering environments — building{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    live Kubernetes clusters
                  </motion.strong>, configuring{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    GitOps-driven NGINX reverse proxies
                  </motion.strong>, managing{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    multi-node Jenkins pipelines
                  </motion.strong>, and deploying containerized{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Ansible automation labs
                  </motion.strong>.
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mb-6"
                >
                  My work is focused on building systems that are <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    scalable
                  </motion.strong>,{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    reproducible
                  </motion.strong>, and <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    production-ready
                  </motion.strong>{' '}
                  — all through <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    Infrastructure as Code (IaC)
                  </motion.strong>,{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    automated deployment strategies
                  </motion.strong>, and{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    continuous delivery pipelines
                  </motion.strong>.
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mb-6"
                >
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    DevOps
                  </motion.strong> is not just a skill — it's my mindset. With every <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    build
                  </motion.strong>,{' '}
                  <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    deploy
                  </motion.strong>, <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    rollback
                  </motion.strong>,
                  and <motion.strong 
                    className="text-neon-cyan"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" 
                    }}
                  >
                    sync
                  </motion.strong>, I move closer to becoming the DevOps engineer I aspire to be.
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed text-neon-cyan font-semibold"
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
              </div>
            </motion.div>

            {/* Education & Experience */}
            <motion.div
              variants={textVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="neon-glass-strong rounded-lg p-6 hover:neon-glow-cyan transition-all duration-300 neon-card"
              >
                {/* Animated Education Icon */}
                <div className="absolute top-4 right-4 opacity-30">
                  <motion.div
                    animate={floatingAnimation}
                  >
                    <Database className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>
                
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-neon-cyan mr-3" />
                  <h3 className="text-xl font-semibold text-white font-sans">Education</h3>
                </div>
                <div className="space-y-6">
                  {educationItems.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h4 className="font-semibold text-neon-cyan">{edu.degree}</h4>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.duration} | {edu.location}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="neon-glass-strong rounded-lg p-6 hover:neon-glow-purple transition-all duration-300 neon-card"
              >
                {/* Animated Experience Icon */}
                <div className="absolute top-4 right-4 opacity-30">
                  <motion.div
                    animate={{
                      ...floatingAnimation,
                      transition: { ...floatingAnimation.transition, delay: 1.5 }
                    }}
                  >
                    <Cloud className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-neon-purple mr-3" />
                  <h3 className="text-xl font-semibold text-white font-sans">Experience</h3>
                </div>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ 
                      x: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h4 className="font-semibold text-neon-purple">DevOps Technical Intern</h4>
                    <p className="text-gray-300">Linux World Informatics Pvt Ltd</p>
                    <p className="text-gray-400 text-sm">Mentored by World Record Holder Mr. Vimal Daga</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Beyond Tech - Human Side */}
            <motion.div
              variants={textVariants}
              className="neon-glass-strong rounded-lg p-8 hover:neon-glow-indigo transition-all duration-300 neon-card"
            >
              {/* Animated Leadership Icons */}
              <div className="absolute top-4 right-4 opacity-20">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Users className="w-8 h-8 text-indigo-400" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6 font-sans">Beyond Tech – The Human Side</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div 
                  variants={itemVariants} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="neon-glass rounded-lg p-4 hover:neon-glow-cyan transition-all duration-300 neon-card"
                >
                  <div className="flex items-start space-x-3">
                    <Mic className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neon-cyan mb-2 font-sans">Event Hosting</h4>
                      <p className="text-gray-300 text-sm body-text">
                        Hosted technical and cultural events, developing strong public speaking and presentation skills.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="neon-glass rounded-lg p-4 hover:neon-glow-purple transition-all duration-300 neon-card"
                >
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-neon-purple mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neon-purple mb-2 font-sans">Team Leadership</h4>
                      <p className="text-gray-300 text-sm body-text">
                        Led final year engineering project team, ensuring collaborative development and deadline alignment.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="neon-glass rounded-lg p-4 hover:neon-glow-indigo transition-all duration-300 neon-card"
                >
                  <div className="flex items-start space-x-3">
                    <PenTool className="w-6 h-6 text-neon-indigo mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neon-indigo mb-2 font-sans">Content Creation</h4>
                      <p className="text-gray-300 text-sm body-text">
                        Writing DevOps concepts in beginner-friendly terms through LinkedIn posts and technical blogs.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="neon-glass rounded-lg p-4 hover:neon-glow-cyan transition-all duration-300 neon-card"
                >
                  <div className="flex items-start space-x-3">
                    <Share2 className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neon-cyan mb-2 font-sans">Social Media and PR</h4>
                      <p className="text-gray-300 text-sm body-text">
                        Member of Social Media and PR Team, managing digital visibility and engagement strategies.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={textVariants}
              className="neon-glass-strong rounded-lg p-8 hover:neon-glow-purple transition-all duration-300 neon-card"
            >
              {/* Animated Skills Icons */}
              <div className="absolute top-4 right-4 opacity-20">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Terminal className="w-8 h-8 text-purple-400" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6 font-sans">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      rotate: [0, -2, 2, 0],
                      textShadow: skill.includes('DevOps') || skill.includes('CI/CD') || skill.includes('Jenkins') || skill.includes('Kubernetes') || skill.includes('GitOps') || skill.includes('Ansible') 
                        ? "0 0 20px rgba(6, 182, 212, 0.8)" 
                        : "0 0 10px rgba(6, 182, 212, 0.5)"
                    }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                    className="neon-glass text-neon-cyan px-3 py-1 rounded-full text-sm hover:neon-glow-cyan transition-all cursor-default neon-card"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;