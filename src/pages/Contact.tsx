import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MessageSquare, Send, CheckCircle, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejaswipathak39@gmail.com',
      href: 'mailto:tejaswipathak39@gmail.com',
      color: 'text-neon-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9356563105',
      href: 'tel:+919356563105',
      color: 'text-neon-purple'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      value: 'tej_21018708',
      href: '#',
      color: 'text-neon-indigo'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Tejaswi-Pathak',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tejaswi-pathak',
      color: 'hover:text-neon-indigo'
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <Terminal className="w-6 h-6 text-neon-cyan" />
              <span className="terminal-text text-sm">~/contact</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-neon-cyan">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto body-text">
              Let's discuss DevOps opportunities, collaborate on projects, or just connect. I'm always open to new challenges and conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6 font-sans">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-4 p-4 neon-glass-strong rounded-lg hover:neon-glow-cyan transition-all duration-300 group neon-card"
                    >
                      <div className="p-2 neon-glass rounded-lg">
                        <item.icon className={`w-6 h-6 ${item.color} group-hover:text-cyan-300`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white group-hover:text-neon-cyan transition-colors body-text">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className={`w-12 h-12 neon-glass-strong rounded-lg hover:neon-glow-cyan flex items-center justify-center transition-all duration-300 group neon-card`}
                    >
                      <social.icon className={`w-6 h-6 text-gray-400 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Terminal Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="neon-glass rounded-lg p-4 neon-glow-purple"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal className="w-4 h-4 text-neon-purple" />
                  <span className="terminal-text text-neon-purple text-sm">status</span>
                </div>
                <div className="terminal-text text-green-400 text-sm space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full neon-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Open to collaborations</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="neon-glass-strong rounded-lg p-8 hover:neon-glow-indigo transition-all duration-300 neon-card"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 font-sans">Send a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 neon-glow-cyan" />
                  <h3 className="text-xl font-semibold text-white mb-2 font-sans">Message Sent!</h3>
                  <p className="text-gray-400 body-text">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 body-text">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 neon-input rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 body-text">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 neon-input rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 body-text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 neon-input rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full neon-btn text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 neon-glow-cyan"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;