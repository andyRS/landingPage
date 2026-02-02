import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Clock, MapPin } from 'lucide-react';

const WhatsAppWidget = ({ businessInfo, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  // Mostrar burbuja de bienvenida después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Cerrar burbuja automáticamente después de 10 segundos
  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showBubble]);

  // Detectar página y generar mensaje personalizado
  const getContextualMessage = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';
    
    const themeMessages = {
      coffee: `${greeting}, me interesa información sobre sus productos de café.`,
      tech: `${greeting}, quisiera saber más sobre sus servicios tecnológicos.`,
      fitness: `${greeting}, me gustaría información sobre membresías y planes.`,
      restaurant: `${greeting}, quisiera hacer una reservación.`,
      beauty: `${greeting}, me gustaría agendar una cita.`
    };

    return themeMessages[currentTheme] || `${greeting}, quisiera más información.`;
  };

  // Mensajes rápidos predefinidos
  const quickMessages = [
    { icon: '💰', text: 'Precios y planes', message: '¿Cuáles son sus precios y planes disponibles?' },
    { icon: '📍', text: 'Ubicación', message: '¿Dónde están ubicados?' },
    { icon: '⏰', text: 'Horarios', message: '¿Cuál es su horario de atención?' },
    { icon: '📦', text: 'Delivery', message: '¿Hacen entregas a domicilio?' },
    { icon: '🎁', text: 'Promociones', message: '¿Tienen alguna promoción activa?' },
  ];

  const handleSendMessage = (text = message) => {
    const phoneNumber = businessInfo.phone.replace(/\D/g, ''); // Remover caracteres no numéricos
    const encodedMessage = encodeURIComponent(text || getContextualMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir en nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Cerrar widget
    setIsOpen(false);
    setMessage('');
  };

  const handleQuickMessage = (quickMsg) => {
    handleSendMessage(quickMsg);
  };

  return (
    <>
      {/* Burbuja de bienvenida flotante */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-28 right-8 z-40 max-w-xs"
          >
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowBubble(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {businessInfo.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {businessInfo.welcomeMessage}
                    </p>
                  </div>
                </div>
              </div>
              {/* Flecha */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-r border-b border-gray-200 dark:border-gray-700" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-shadow flex items-center justify-center group"
        aria-label="Abrir WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicador de online */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"
        />

        {/* Notificación de mensaje */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
          >
            1
          </motion.div>
        )}
      </motion.button>

      {/* Panel de chat expandido */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-28 right-8 z-40 w-full max-w-sm"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 rounded-full border-2 border-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{businessInfo.name}</h3>
                    <p className="text-xs text-green-100">Típicamente responde en minutos</p>
                  </div>
                </div>
              </div>

              {/* Mensaje de bienvenida */}
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {businessInfo.chatWelcome}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {businessInfo.responseTime}
                  </p>
                </div>
              </div>

              {/* Mensajes rápidos */}
              <div className="p-4 space-y-2 max-h-60 overflow-y-auto">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Mensajes rápidos:
                </p>
                {quickMessages.map((quick, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickMessage(quick.message)}
                    className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 group"
                  >
                    <span className="text-2xl">{quick.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {quick.text}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Input de mensaje personalizado */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>

              {/* Info de contacto adicional */}
              <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Llamar
                </a>
                {businessInfo.location && (
                  <a
                    href={businessInfo.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg text-xs font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Ubicación
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
