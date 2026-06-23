import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Target, Users, Award, TrendingUp, Heart, Shield, Clock, ArrowRight, Play, Pause } from 'lucide-react';

const AboutSection = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const milestones = [
    {
      year: '2026',
      title: 'Our Beginning',
      description: 'Souranova Technology was founded with a vision to transform digital experiences.',
      icon: Sparkles
    },
    {
      year: '2026',
      title: 'Building Our Team',
      description: 'Assembling passionate developers and designers ready to make an impact.',
      icon: Heart
    },
    {
      year: '2026',
      title: 'First Projects',
      description: 'Embarking on our initial projects to showcase our capabilities.',
      icon: Zap
    },
    {
      year: '2027',
      title: 'Growing Together',
      description: 'Expanding our services and building lasting client relationships.',
      icon: TrendingUp
    },
    {
      year: '2028',
      title: 'Future Vision',
      description: 'Becoming a trusted partner for businesses worldwide.',
      icon: Target
    }
  ];

  const stats = [
    { value: 5, label: 'Team Members', icon: Heart, color: 'from-orange-500 to-orange-600' },
    { value: 3, label: 'Technologies', icon: Zap, color: 'from-orange-400 to-orange-500' },
    { value: 1, label: 'Year Founded', icon: Clock, color: 'from-orange-600 to-orange-700' },
    { value: 100, label: 'Passion %', icon: Award, color: 'from-orange-300 to-orange-400' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Every project undergoes rigorous quality assurance to ensure excellence.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and rapid delivery without compromising quality.',
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      icon: Heart,
      title: 'Client Centric',
      description: 'Your success is our priority. We work closely with you at every step.',
      gradient: 'from-orange-600 to-pink-500'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, milestones.length]);

  const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}+</span>;
  };

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full filter blur-3xl opacity-15"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-medium mb-8 shadow-lg shadow-orange-500/30"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            About Our Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6"
          >
            Building the{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Future
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A fresh startup founded in 2026, driven by passion and innovation. We're here to transform your digital vision into reality with cutting-edge technology and creative excellence.
          </motion.p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-orange-100 rounded-full hover:bg-orange-200 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-orange-600" /> : <Play className="w-5 h-5 text-orange-600" />}
            </button>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full transform -translate-y-1/2" />
            
            {/* Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveMilestone(index)}
                  className="relative cursor-pointer group"
                >
                  {/* Milestone Dot */}
                  <motion.div
                    animate={{
                      scale: activeMilestone === index ? 1.5 : 1,
                      backgroundColor: activeMilestone === index ? '#FF6B35' : '#FED7AA'
                    }}
                    className="w-6 h-6 rounded-full mx-auto mb-4 relative z-10 border-4 border-white shadow-lg"
                  />
                  
                  {/* Milestone Card */}
                  <motion.div
                    animate={{
                      y: activeMilestone === index ? -10 : 0,
                      scale: activeMilestone === index ? 1.05 : 1
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all"
                  >
                    <div className="text-3xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                    <div className="font-semibold text-gray-900 mb-2">{milestone.title}</div>
                    <div className="text-sm text-gray-600">{milestone.description}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:border-orange-300 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-gray-600 text-center">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Feature Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.25)"
                }}
                className="relative perspective-1000"
              >
                <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-xl border border-orange-100 overflow-hidden group">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0%", "100%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    style={{ backgroundSize: "200% auto" }}
                  />
                  
                  {/* Gradient Bubble Effects */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full opacity-20 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, 10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-15 blur-xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      x: [0, -10, 0],
                      y: [0, 10, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className={`absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 blur-lg`}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{ transform: "translate(-50%, -50%)" }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-6 flex items-center text-orange-500 font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
              animate={{
                rotate: -360
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"
            />
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Be Our First Client
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                As a new startup, we're eager to prove ourselves. Give us the opportunity to exceed your expectations with dedication, creativity, and cutting-edge solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
