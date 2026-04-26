import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Skills', 'Achievements', 'Projects', 'Education', 'Contact'];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-[100] bg-void-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-white font-mono flex items-center gap-2 cursor-pointer"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <div className="w-8 h-8 bg-neon-cyan/10 border border-neon-cyan/40 rounded flex items-center justify-center">
            <span className="text-neon-cyan text-lg">K</span>
          </div>
          KUBOJA<span className="text-neon-cyan">.</span>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item, i) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-400 hover:text-neon-cyan transition-all text-xs font-mono tracking-widest uppercase relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-neon-cyan border border-neon-cyan/20 rounded-lg hover:bg-neon-cyan/5 transition-all" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void-black/95 backdrop-blur-2xl border-b border-neon-cyan/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, item)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-gray-300 hover:text-neon-cyan text-lg font-black italic uppercase tracking-tighter"
                >
                  <span className="text-neon-cyan/40 mr-4 font-mono text-sm not-italic">0{i+1}</span>
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
