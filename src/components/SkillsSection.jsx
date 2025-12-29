import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Layout } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { category: "Programming", items: ["Python (Advanced)", "C/C++", "Java", "JavaScript"], icon: <Code size={24} /> },
    { category: "AI & ML", items: ["Scikit-learn", "Pandas", "NLP", "TensorFlow"], icon: <Brain size={24} /> },
    { category: "Web Tech", items: ["React", "Flask", "Node.js", "MongoDB", "AWS"], icon: <Layout size={24} /> },
    { category: "Tools", items: ["Git", "Docker", "PowerBI", "VS Code"], icon: <Database size={24} /> }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-16">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          className="h-1 bg-neon-cyan mb-4 shadow-[0_0_15px_#00F0FF]"
        />
        <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic flex items-center gap-4">
          Technical <span className="text-neon-cyan">Arsenal</span>
        </h2>
        <p className="font-mono text-[10px] text-gray-500 tracking-[0.4em] mt-2 uppercase">
          // Modules_Detected: {skills.length} | System_Status: Optimal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }} 
            className="group relative p-8 bg-data-blue/40 backdrop-blur-xl border border-white/10 rounded-br-3xl rounded-tl-3xl overflow-hidden"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors" />

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex p-3 bg-matrix-dim rounded-lg text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-mono font-bold mb-4 text-white tracking-widest uppercase flex items-center justify-between">
                {skill.category}
                <span className="text-[10px] text-neon-cyan opacity-50 group-hover:opacity-100">0{idx + 1}</span>
              </h3>

              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span className="h-[1px] w-3 bg-neon-cyan/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tailwind Custom Keyframes for the scan effect */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;