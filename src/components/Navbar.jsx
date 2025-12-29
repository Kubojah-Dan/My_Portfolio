import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Skills', 'Achievements', 'Projects', 'Education', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] bg-space-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold text-white font-mono">
           Kuboja<span className="text-neon-blue">.</span>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-neon-blue transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-space-card p-6 flex flex-col gap-4 border-b border-white/10"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-neon-blue">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}