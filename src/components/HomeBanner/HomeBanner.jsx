import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      title: "We Build Digital",
      subtitle: "Transform your vision into reality with cutting-edge technology",
      highlight: "Experiences"
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
      title: "Innovative Solutions",
      subtitle: "Crafting exceptional digital experiences that inspire and engage",
      highlight: "For Tomorrow"
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      title: "Creative Excellence",
      subtitle: "Innovative design and development for your business growth",
      highlight: "Design First"
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80',
      title: "Future Ready",
      subtitle: "Building the next generation of digital products and services",
      highlight: "Scale Fast"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => (
                currentSlide === index && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/30"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
                      Welcome to Souranova
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                      {slide.title}{' '}
                      <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
                        animate={{
                          backgroundPosition: ["0%", "100%"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        style={{ backgroundSize: "200% auto" }}
                      >
                        {slide.highlight}
                      </motion.span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg md:text-xl text-gray-200 mb-16 max-w-2xl leading-relaxed"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all border border-white/30 hover:border-white/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-3 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-400 hover:bg-orange-500/30 transition-all border border-orange-500/30 hover:border-orange-500/50"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all border border-white/30 hover:border-white/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default HomeBanner;
