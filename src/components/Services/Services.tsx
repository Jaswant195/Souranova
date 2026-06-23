import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types';
import { Code2, Palette, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      icon: 'Code2',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design'],
      price: 'Starting at $5,000',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: '2',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement',
      icon: 'Palette',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $3,000',
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      id: '4',
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies to grow your online presence',
      icon: 'Globe',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics'],
      price: 'Starting at $2,000/month',
      gradient: 'from-orange-600 to-orange-700'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Code2: <Code2 className="w-8 h-8" />,
      Palette: <Palette className="w-8 h-8" />,
      Globe: <Globe className="w-8 h-8" />
    };
    return icons[iconName] || <Code2 className="w-8 h-8" />;
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
            <span className="ml-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">3</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that transform your vision into reality with cutting-edge technology and innovative design solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
              <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg border border-orange-100 overflow-hidden group">
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0%", "100%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  style={{ backgroundSize: "200% auto" }}
                />
                
                {/* Gradient Bubble Effects */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-2xl`}
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
                  className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-15 blur-xl`}
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
                  className={`absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 blur-lg`}
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
                
                {/* Icon Container */}
                <div className="relative mb-6 z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300"
                  >
                    <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                      {getIcon(service.icon)}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
        >
          {/* Animated Background Illustration */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large gradient circles */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-30 blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-24 -left-24 w-56 h-56 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full opacity-25 blur-2xl"
            />
            
            {/* Floating shapes */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 w-16 h-16 bg-white/20 rounded-2xl rotate-12"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-32 right-32 w-12 h-12 bg-yellow-300/30 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-24 right-20 w-20 h-20 bg-white/15 rounded-3xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, 15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute bottom-32 left-32 w-14 h-14 bg-orange-300/25 rounded-full"
            />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            {/* Wave pattern at bottom */}
            <motion.div
              animate={{
                x: [0, -50, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
              }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              We can tailor our services to meet your specific requirements and bring your unique vision to life with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
              >
                Get Custom Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
