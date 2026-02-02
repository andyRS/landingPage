import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, MessageCircle } from 'lucide-react';

/**
 * FloatingButtons - Agrupa los botones flotantes de forma organizada
 * Muestra WhatsApp y ThemeSwitcher sin superposición
 */
const FloatingButtons = ({ onThemeClick, onWhatsAppClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      color: 'from-green-400 to-green-600',
      label: 'WhatsApp',
      onClick: onWhatsAppClick,
      badge: true
    },
    {
      id: 'theme',
      icon: Palette,
      color: 'from-primary-500 to-accent',
      label: 'Cambiar Tema',
      onClick: onThemeClick,
      pulse: true
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse gap-4">
      {/* Botones secundarios */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex flex-col gap-3"
        >
          {buttons.map((button, index) => (
            <motion.button
              key={button.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={button.onClick}
              className={`relative w-14 h-14 bg-gradient-to-br ${button.color} text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group`}
              aria-label={button.label}
            >
              <button.icon className="w-6 h-6" />
              
              {/* Badge de notificación */}
              {button.badge && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
              )}
              
              {/* Pulse para temas */}
              {button.pulse && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              )}

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {button.label}
              </div>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Botón principal toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full shadow-2xl hover:shadow-3xl transition-shadow flex items-center justify-center"
        aria-label="Toggle buttons"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.div>

        {/* Indicador de opciones disponibles */}
        {!isExpanded && (
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
            {buttons.length}
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
