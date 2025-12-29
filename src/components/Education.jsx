import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Globe, Box } from 'lucide-react';

const EduStep = ({ school, degree, detail, year, location, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-16 border-l-2 border-dashed border-neon-cyan/20 last:pb-0"
  >
    {/* Animated Node */}
    <div className="absolute -left-[13px] top-0 flex items-center justify-center">
      <div className="w-6 h-6 bg-void-black border-2 border-neon-cyan rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_15px_#00F0FF]">
         <div className="w-2 h-2 bg-neon-cyan animate-pulse" />
      </div>
    </div>

    <div className="group relative bg-data-blue/20 backdrop-blur-sm p-8 rounded-tr-3xl rounded-bl-3xl border border-white/5 hover:border-neon-cyan/40 transition-all duration-500 overflow-hidden">
      {/* Decorative Scan Line */}
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-neon-cyan group-hover:h-full transition-all duration-700" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <span className="font-mono text-xs text-neon-cyan tracking-[0.5em] uppercase opacity-70">
            Phase_{year.replace('–', '_')}
          </span>
          <h3 className="text-2xl font-black text-white group-hover:tracking-wider transition-all duration-300 uppercase italic">
            {school}
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-matrix-dim px-4 py-2 rounded-full border border-neon-cyan/20">
          <Box size={14} className="text-neon-cyan animate-spin-slow" />
          <span className="text-neon-cyan font-mono text-xs font-bold">{detail}</span>
        </div>
      </div>

      <p className="text-gray-300 font-medium text-lg mb-4 flex items-center gap-2">
        <GraduationCap size={20} className="text-neon-cyan/60" />
        {degree}
      </p>

      <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-500">
        <span className="flex items-center gap-2 group-hover:text-neon-cyan transition-colors">
          <MapPin size={14} className="text-neon-cyan" /> 
          {location.toUpperCase()}
        </span>
        <span className="flex items-center gap-2 opacity-50">
          <Globe size={14} /> 
          ESTABLISHING_LOCATION_DATA... 100%
        </span>
      </div>

      {/* Futuristic Corner Detail */}
      <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
        <Box size={40} className="text-white" />
      </div>
    </div>
  </motion.div>
);

export default function Education() {
  const eduData = [
    {
      school: "Sri Eshwar College of Engineering",
      degree: "B.E. CSE (Artificial Intelligence & Machine Learning)",
      detail: "CGPA: 8.1",
      year: "2024–2028",
      location: "Coimbatore, India"
    },
    {
      school: "Karura SDA High School",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      detail: "80%",
      year: "2020–2023",
      location: "Nairobi, Kenya"
    },
    {
      school: "Joyland International School",
      degree: "Primary School Leaving Examination (PSLE)",
      detail: "90%",
      year: "2012–2019",
      location: "Dar es Salaam, Tanzania"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-16">
        <h2 className="text-4xl font-black mb-4 flex items-center gap-4 text-white uppercase italic tracking-tighter">
          <div className="p-2 bg-neon-cyan/10 rounded-lg">
            <GraduationCap className="text-neon-cyan" size={32} />
          </div>
          Education <span className="text-neon-cyan">Archive</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-24 bg-neon-cyan shadow-[0_0_10px_#00F0FF]" />
          <p className="font-mono text-[10px] text-gray-500 tracking-[0.3em] uppercase">
            // Cross-Continental_Academic_Records
          </p>
        </div>
      </div>

      <div className="ml-4">
        {eduData.map((edu, idx) => (
          <EduStep key={idx} index={idx} {...edu} />
        ))}
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}