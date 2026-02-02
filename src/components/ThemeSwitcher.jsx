import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';
import { themes } from '../data/content';

const ThemeSwitcher = ({ currentTheme, changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    coffee: 'from-amber-600 to-orange-500',
    tech: 'from-blue-600 to-cyan-500',
    fitness: 'from-red-600 to-pink-500',
    restaurant: 'from-yellow-600 to-amber-500',
    beauty: 'from-purple-600 to-pink-500'
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-50 p-4 bg-gradient-to-br from-primary-500 to-accent text-white rounded-full shadow-2xl hover:shadow-3xl transition-shadow"
        aria-label="Change theme"
      >
        <Palette className="w-6 h-6" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />
      </motion.button>

      {/* Theme selector panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 left-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      Cambiar Tema
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Selecciona una industria para ver el diseño adaptado
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 glass dark:glass-dark rounded-full"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-white" />
                  </motion.button>
                </div>

                {/* Theme cards */}
                <div className="space-y-4">
                  {Object.values(themes).map((theme) => (
                    <motion.button
                      key={theme.id}
                      onClick={() => {
                        changeTheme(theme.id);
                        setIsOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-6 rounded-2xl transition-all ${
                        currentTheme === theme.id
                          ? 'glass dark:glass-dark ring-2 ring-primary-500'
                          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Color preview */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${themeColors[theme.id]} flex-shrink-0 shadow-lg`} />
                        
                        {/* Theme info */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                            {theme.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {theme.description}
                          </p>
                        </div>

                        {/* Selected indicator */}
                        {currentTheme === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center"
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Info card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 p-6 glass dark:glass-dark rounded-2xl"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    💡 ¿Por qué múltiples temas?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Esta landing page está diseñada para adaptarse a diferentes industrias. 
                    Cada tema incluye colores, tipografía y contenido optimizado para su sector específico.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
