import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Terminal, Briefcase, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 shadow-sm"
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-gradient font-headline cursor-pointer z-50"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
        >
          RAHUL
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tighter uppercase text-sm">
          {menuItems.map((item, index) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 z-50"
        >
          <button 
            onClick={toggleTheme} 
            className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="w-px h-6 bg-border mx-2 hidden sm:block"></div>

          <a className="hidden sm:block text-muted-foreground hover:text-primary transition-colors duration-300" href="https://github.com/rahul23Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Terminal size={22} />
          </a>
          <a className="hidden sm:block text-muted-foreground hover:text-primary transition-colors duration-300" href="https://www.linkedin.com/in/rahul-maddheshiya-0601b714b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Briefcase size={22} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full glass-panel flex flex-col items-center justify-center gap-8 pt-20 pb-10 shadow-2xl overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-headline font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-8 p-6 border-t border-border w-full justify-center"
            >
              <a className="p-3 bg-muted/20 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300 hover:shadow-glow" href="https://github.com/rahul23Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Terminal size={24} />
              </a>
              <a className="p-3 bg-muted/20 rounded-full text-muted-foreground hover:text-secondary transition-colors duration-300 hover:shadow-glow" href="https://www.linkedin.com/in/rahul-maddheshiya-0601b714b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Briefcase size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
