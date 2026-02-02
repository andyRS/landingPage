import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { themes } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { currentTheme, changeTheme, isDark, toggleDarkMode } = useTheme();
  const themeData = themes[currentTheme];

  useEffect(() => {
    // Apply theme class to body
    const themeClass = themeData.className;
    document.body.className = themeClass;
    
    return () => {
      document.body.className = '';
    };
  }, [currentTheme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar 
        isDark={isDark} 
        toggleDarkMode={toggleDarkMode}
        currentTheme={currentTheme}
      />
      
      <main>
        <Hero themeData={themeData.hero} />
        <Features features={themeData.features} />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
      
      <ThemeSwitcher 
        currentTheme={currentTheme}
        changeTheme={changeTheme}
      />
    </div>
  );
}

export default App;
