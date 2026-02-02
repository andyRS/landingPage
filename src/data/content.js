// Themes configuration
export const themes = {
  coffee: {
    id: 'coffee',
    name: 'Coffee Shop',
    description: 'Perfecto para cafeterías y negocios de bebidas',
    className: 'theme-coffee',
    hero: {
      title: 'Cold Brew Premium',
      subtitle: '#Café para días de calor',
      description: 'Aumenta tu productividad y mejora tu estado de ánimo con un vaso de café por la mañana. El café tiene un efecto estimulante que te mantiene enfocado.',
      ctaText: 'Ordena Ahora',
      price: '10€',
      priceLabel: 'Precio Regular',
    },
    features: [
      {
        icon: '☕',
        title: 'Granos Selectos',
        description: 'Los mejores granos de café seleccionados cuidadosamente'
      },
      {
        icon: '❄️',
        title: 'Proceso Frío',
        description: 'Extracción en frío durante 24 horas para mejor sabor'
      },
      {
        icon: '⚡',
        title: 'Energía Natural',
        description: 'Alto contenido de cafeína natural sin aditivos'
      }
    ]
  },
  tech: {
    id: 'tech',
    name: 'Tech Startup',
    description: 'Ideal para empresas tecnológicas y SaaS',
    className: 'theme-tech',
    hero: {
      title: 'Transforma tu Negocio',
      subtitle: '#Innovación Digital',
      description: 'Potencia tu empresa con nuestras soluciones tecnológicas de última generación. Automatización, IA y análisis de datos en una sola plataforma.',
      ctaText: 'Prueba Gratis',
      price: '$49/mes',
      priceLabel: 'Plan Profesional',
    },
    features: [
      {
        icon: '🚀',
        title: 'Velocidad Extrema',
        description: 'Infraestructura optimizada para máximo rendimiento'
      },
      {
        icon: '🔒',
        title: 'Seguridad Avanzada',
        description: 'Protección de datos con encriptación de nivel empresarial'
      },
      {
        icon: '📊',
        title: 'Analytics en Tiempo Real',
        description: 'Visualiza tus métricas y toma decisiones informadas'
      }
    ]
  },
  fitness: {
    id: 'fitness',
    name: 'Fitness & Gym',
    description: 'Para gimnasios y centros deportivos',
    className: 'theme-fitness',
    hero: {
      title: 'Tu Mejor Versión',
      subtitle: '#Transforma tu Cuerpo',
      description: 'Únete a nuestra comunidad y alcanza tus objetivos fitness con entrenamientos personalizados, nutrición y el apoyo de expertos profesionales.',
      ctaText: 'Clase de Prueba',
      price: '35€/mes',
      priceLabel: 'Membresía Premium',
    },
    features: [
      {
        icon: '💪',
        title: 'Entrenadores Certificados',
        description: 'Staff profesional con años de experiencia'
      },
      {
        icon: '🏋️',
        title: 'Equipo de Primera',
        description: 'Las mejores máquinas y espacios para entrenar'
      },
      {
        icon: '🥗',
        title: 'Plan Nutricional',
        description: 'Dietas personalizadas según tus objetivos'
      }
    ]
  },
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Para restaurantes y servicios de comida',
    className: 'theme-restaurant',
    hero: {
      title: 'Sabores Auténticos',
      subtitle: '#Cocina de Autor',
      description: 'Descubre una experiencia gastronómica única con ingredientes frescos y recetas originales que deleitarán tu paladar. Reserva tu mesa hoy.',
      ctaText: 'Reserva Mesa',
      price: '45€',
      priceLabel: 'Menú Degustación',
    },
    features: [
      {
        icon: '👨‍🍳',
        title: 'Chef Profesional',
        description: 'Cocina gourmet preparada por expertos'
      },
      {
        icon: '🌱',
        title: 'Ingredientes Frescos',
        description: 'Productos orgánicos y locales de temporada'
      },
      {
        icon: '🍷',
        title: 'Maridaje Perfecto',
        description: 'Selección de vinos premium para cada plato'
      }
    ]
  },
  beauty: {
    id: 'beauty',
    name: 'Beauty & Spa',
    description: 'Para salones de belleza y spas',
    className: 'theme-beauty',
    hero: {
      title: 'Belleza Natural',
      subtitle: '#Cuidado Premium',
      description: 'Déjate consentir con nuestros tratamientos exclusivos de belleza y bienestar. Productos naturales y técnicas avanzadas para tu cuidado personal.',
      ctaText: 'Agenda Cita',
      price: '80€',
      priceLabel: 'Tratamiento Completo',
    },
    features: [
      {
        icon: '✨',
        title: 'Productos Premium',
        description: 'Marcas de lujo y productos naturales certificados'
      },
      {
        icon: '💆',
        title: 'Terapias Relajantes',
        description: 'Experiencias diseñadas para tu bienestar total'
      },
      {
        icon: '🌸',
        title: 'Resultados Visibles',
        description: 'Tratamientos efectivos con garantía de satisfacción'
      }
    ]
  }
};

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Cliente Premium',
    content: 'Una experiencia increíble desde el primer momento. La calidad del servicio supera todas las expectativas.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Emprendedor',
    content: 'He probado muchas opciones pero esta es definitivamente la mejor. Totalmente recomendado.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Influencer',
    content: 'Calidad excepcional y atención personalizada. No podría estar más satisfecha con mi elección.',
    rating: 5,
    image: '👩‍🎨'
  }
];

// Stats data
export const stats = [
  { value: '10K+', label: 'Clientes Felices' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte' },
  { value: '5⭐', label: 'Valoración' }
];
