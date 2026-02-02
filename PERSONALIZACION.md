# 🎨 Guía de Personalización Rápida

## Para Clientes (Sin Conocimientos Técnicos)

### Opción 1: Usar el Selector de Temas
1. Abre la landing page
2. Haz clic en el botón flotante de paleta (abajo a la derecha) 🎨
3. Selecciona el tema que mejor se adapte a tu industria
4. ¡Listo! El contenido y colores cambiarán automáticamente

### Opción 2: Solicitar Personalización
Contacta con el desarrollador proporcionando:
- **Logo** de tu empresa (PNG o SVG)
- **Colores** de tu marca (códigos hexadecimales si los tienes)
- **Contenido:**
  - Título principal
  - Descripción (2-3 párrafos)
  - 3 características principales
  - Testimonios de clientes
  - Enlaces a redes sociales
- **Imágenes** (producto, hero, etc.)

---

## Para Desarrolladores

### 🚀 Personalización en 5 Minutos

#### 1. Cambiar Logo y Nombre
**Archivo:** `src/components/Navbar.jsx` (línea ~21)
```jsx
<span className="text-xl font-display font-bold...">
  TU MARCA AQUÍ
</span>
```

#### 2. Modificar Contenido del Hero
**Archivo:** `src/data/content.js`
```javascript
hero: {
  title: 'Tu Título',
  subtitle: '#Tu Hashtag',
  description: 'Tu descripción...',
  ctaText: 'Tu CTA',
  price: '€XX',
  priceLabel: 'Tu Label',
}
```

#### 3. Actualizar Features
**Archivo:** `src/data/content.js`
```javascript
features: [
  {
    icon: '🎯', // Cambia el emoji
    title: 'Tu Feature',
    description: 'Descripción...'
  }
]
```

#### 4. Cambiar Testimonios
**Archivo:** `src/data/content.js` (línea ~96)
```javascript
export const testimonials = [
  {
    name: 'Nombre Cliente',
    role: 'Cargo',
    content: 'Testimonio...',
    rating: 5,
    image: '👤'
  }
]
```

#### 5. Modificar Footer
**Archivo:** `src/components/Footer.jsx` (línea ~96)
```jsx
<span className="font-semibold gradient-text">
  TU NOMBRE
</span>
```

---

### 🎨 Crear Tu Propio Tema

#### Paso 1: Define los Colores
**Archivo:** `src/index.css` (añade al final)

```css
.theme-tuMarca {
  --primary-50: #fafafa;
  --primary-100: #f4f4f5;
  --primary-200: #e4e4e7;
  --primary-300: #d4d4d8;
  --primary-400: #a1a1aa;
  --primary-500: #TU-COLOR-PRINCIPAL;
  --primary-600: #52525b;
  --primary-700: #3f3f46;
  --primary-800: #27272a;
  --primary-900: #18181b;
  --accent-light: #TU-ACENTO-CLARO;
  --accent: #TU-ACENTO;
  --accent-dark: #TU-ACENTO-OSCURO;
}
```

#### Paso 2: Agrega el Tema a la Data
**Archivo:** `src/data/content.js`

```javascript
export const themes = {
  // ... temas existentes
  tuMarca: {
    id: 'tuMarca',
    name: 'Tu Marca',
    description: 'Descripción de tu marca',
    className: 'theme-tuMarca',
    hero: {
      title: 'Tu Título Único',
      subtitle: '#TuHashtag',
      // ... resto de campos
    },
    features: [
      // tus features personalizadas
    ]
  }
}
```

#### Paso 3: Agrega Color Visual al Selector
**Archivo:** `src/components/ThemeSwitcher.jsx` (línea ~10)

```javascript
const themeColors = {
  // ... colores existentes
  tuMarca: 'from-tu-color-600 to-tu-acento-500'
};
```

---

### 📝 Checklist de Personalización Completa

#### Contenido
- [ ] Título principal del hero
- [ ] Subtítulo/hashtag
- [ ] Descripción principal
- [ ] Texto del botón CTA
- [ ] Precio y label
- [ ] 3 características con iconos
- [ ] 3 testimonios de clientes
- [ ] Estadísticas (10K+, 98%, etc.)
- [ ] Texto del formulario
- [ ] Footer: nombre, enlaces, redes sociales

#### Diseño
- [ ] Logo (imagen o emoji)
- [ ] Colores primarios (5-7 tonos)
- [ ] Color de acento
- [ ] Fuentes (display + body)
- [ ] Imágenes hero y features
- [ ] Iconos de redes sociales

#### Técnico
- [ ] Título de la página (index.html)
- [ ] Meta description
- [ ] Favicon
- [ ] URLs de redes sociales
- [ ] Email de contacto
- [ ] Analytics ID (si aplica)

---

### 🎯 Personalización Avanzada

#### Cambiar Fuentes
**Archivo:** `index.html` (línea ~13)
```html
<link href="https://fonts.googleapis.com/css2?family=Tu-Fuente-Display:wght@...&family=Tu-Fuente-Body:wght@...&display=swap" rel="stylesheet">
```

**Archivo:** `tailwind.config.js` (línea ~8)
```javascript
fontFamily: {
  display: ['Tu Fuente Display', 'serif'],
  body: ['Tu Fuente Body', 'sans-serif'],
}
```

#### Ajustar Animaciones
**Archivo:** `tailwind.config.js`
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite', // Cambia duración
  'tu-animacion': 'tuKeyframe 3s ease infinite',
}
```

#### Agregar Nuevas Secciones
1. Crea componente en `src/components/TuSeccion.jsx`
2. Importa en `src/App.jsx`
3. Añade entre las secciones existentes

```jsx
import TuSeccion from './components/TuSeccion';

function App() {
  return (
    <>
      <Hero />
      <TuSeccion /> {/* Nueva sección */}
      <Features />
      // ...
    </>
  );
}
```

---

### 🔍 Tabla de Referencia Rápida

| Elemento | Archivo | Línea Aprox. |
|----------|---------|--------------|
| Logo/Nombre | Navbar.jsx | 21 |
| Título Hero | content.js | 12 |
| Features | content.js | 22 |
| Testimonios | content.js | 96 |
| Colores Tema | index.css | 10-50 |
| Footer Autor | Footer.jsx | 96 |
| Meta Tags | index.html | 5-10 |

---

### 💡 Tips Pro

1. **Mantén Consistencia:** Usa los mismos colores en todo el tema
2. **Optimiza Imágenes:** Convierte a WebP, máximo 500KB
3. **Menos es Más:** 3-5 características son suficientes
4. **Testimonios Reales:** Usa fotos reales si es posible
5. **CTA Claro:** Un solo llamado a la acción por sección
6. **Mobile First:** Siempre prueba en móvil primero

---

### 🆘 Problemas Comunes

**Problema:** Los colores no cambian
- **Solución:** Verifica que la clase del tema esté en `index.css`

**Problema:** Las animaciones no se ven
- **Solución:** Asegúrate de tener Framer Motion instalado

**Problema:** El build falla
- **Solución:** Ejecuta `npm install` de nuevo

**Problema:** El tema no persiste al recargar
- **Solución:** Verifica que localStorage no esté bloqueado

---

¿Necesitas ayuda adicional? Contacta al desarrollador. 🚀
