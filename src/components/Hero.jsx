import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ themeData }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pattern-bg">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass dark:glass-dark text-sm font-semibold text-primary-600 dark:text-accent">
                {themeData.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight"
            >
              {themeData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              {themeData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                {themeData.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 glass dark:glass-dark text-gray-900 dark:text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Ver Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="text-3xl font-bold gradient-text">
                {themeData.price}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {themeData.priceLabel}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: 5, 
                rotateX: -5,
                scale: 1.05 
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Placeholder for hero image - replace with actual image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 via-accent to-primary-600 opacity-20 blur-2xl animate-pulse" />
                <div className="relative w-full h-full rounded-3xl glass dark:glass-dark flex items-center justify-center text-9xl animate-float">
                  {getThemeEmoji(themeData.title)}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute -top-10 -right-10 w-24 h-24 glass dark:glass-dark rounded-2xl flex items-center justify-center text-3xl shadow-xl"
              >
                ⭐
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 glass dark:glass-dark rounded-2xl flex items-center justify-center text-4xl shadow-xl"
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Helper function to get emoji based on theme
const getThemeEmoji = (title) => {
  const emojiMap = {
    'Cold Brew': '☕',
    'Transforma': '🚀',
    'Tu Mejor': '💪',
    'Sabores': '🍽️',
    'Belleza': '✨'
  };
  
  const key = Object.keys(emojiMap).find(k => title.includes(k));
  return emojiMap[key] || '🎯';
};

export default Hero;
