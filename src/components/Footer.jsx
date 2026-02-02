import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Producto: ['Características', 'Precios', 'Demo', 'Actualizaciones'],
    Compañía: ['Sobre Nosotros', 'Blog', 'Carreras', 'Contacto'],
    Recursos: ['Documentación', 'Tutoriales', 'API', 'Soporte'],
    Legal: ['Privacidad', 'Términos', 'Cookies', 'Licencias']
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden pattern-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent dark:from-black/50" />
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                  Landing Premium
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                Transforma tu presencia digital con soluciones profesionales diseñadas para el éxito.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass dark:glass-dark rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mb-8" />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Landing Premium. Creado con
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            por
            <span className="font-semibold gradient-text">Andy Rosado</span>
          </p>
          
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-primary-500 dark:hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary-500 dark:hover:text-accent transition-colors">
              Términos de Servicio
            </a>
          </div>
        </motion.div>

        {/* Made with badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass dark:glass-dark rounded-full text-xs text-gray-600 dark:text-gray-400">
            <span>Desarrollado con</span>
            <span className="font-semibold">React + Vite + Tailwind + Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
