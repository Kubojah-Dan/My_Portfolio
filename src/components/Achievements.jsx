import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, CheckCircle2, Star, Calendar, Zap } from 'lucide-react';

const AchievementCard = ({ title, year, description, rank }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-10 pb-12 border-l-2 border-neon-cyan/20 last:pb-0"
  >
    {/* Pulsing Timeline Node */}
    <div className="absolute left-[-11px] top-0">
      <div className="relative">
        <div className="w-5 h-5 rounded-full bg-void-black border-2 border-neon-cyan shadow-[0_0_15px_#00F0FF]" />
        <div className="absolute inset-0 w-5 h-5 rounded-full bg-neon-cyan animate-ping opacity-30" />
      </div>
    </div>

    <div className="group relative bg-data-blue/30 p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/50 hover:bg-matrix-dim transition-all duration-500 overflow-hidden">
      {/* Background ID Text (Watermark) */}
      <span className="absolute top-2 right-4 font-mono text-[40px] text-white/[0.03] font-black select-none pointer-events-none uppercase italic">
        {title.substring(0, 3)}
      </span>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-neon-cyan transition-colors tracking-tighter uppercase italic">
            {title}
          </h3>
          <p className="text-neon-cyan font-mono text-[10px] tracking-[0.3em] flex items-center gap-2 mt-1 uppercase">
            <Trophy size={14} /> {rank}
          </p>
        </div>
        <span className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan border border-neon-cyan/30 px-3 py-1 rounded-md bg-neon-cyan/5">
          <Calendar size={12} /> {year}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed font-mono relative z-10">
        <span className="text-neon-cyan/50 mr-2">{">"}</span>
        {description}
      </p>
    </div>
  </motion.div>
);

export default function Achievements() {
  const achievements = [
    {
      title: "Freshathon",
      year: "2025",
      rank: "Third Place",
      description: "Achieved a third place with an outstanding project in a competitive event."
    },
    {
      title: "Selfiehack",
      year: "2024",
      rank: "Finalist",
      description: "Recognized as a finalist in a multi-round hackathon focusing on problem-solving and innovation."
    }
  ];

  const certifications = [
    { name: "Python Learning Course", issuer: "LinkedIn", date: "2024" },
    { name: "Data Visualization in PowerBI", issuer: "LinkedIn", date: "2024" },
    { name: "C Programming", issuer: "IIT Bombay", date: "2024" },
    { name: "DSA in C & C++", issuer: "Udemy", date: "2025" },
    { name: "Python Libraries for DS", issuer: "SimpliLearn", date: "2025" },
    { name: "IEEE Webinar", issuer: "IEEE", date: "2025" }
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Hackathon Log */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-2 flex items-center gap-4 text-white uppercase italic">
              <Medal className="text-neon-cyan" /> Mission <span className="text-neon-cyan">Log</span>
            </h2>
            <div className="h-1 w-20 bg-neon-cyan shadow-[0_0_10px_#00F0FF]" />
          </div>
          
          <div className="ml-4">
            {achievements.map((item, idx) => <AchievementCard key={idx} {...item} />)}
          </div>
        </div>

        {/* Right Column: Verified Modules */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-2 flex items-center gap-4 text-white uppercase italic">
              <Star className="text-neon-cyan" /> Verified <span className="text-neon-cyan">Modules</span>
            </h2>
            <div className="h-1 w-20 bg-neon-cyan shadow-[0_0_10px_#00F0FF]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 5, backgroundColor: "rgba(0, 240, 255, 0.05)" }}
                className="group flex items-center gap-4 p-4 bg-data-blue/40 rounded-xl border-l-4 border-white/5 hover:border-neon-cyan transition-all cursor-default"
              >
                <div className="relative shrink-0">
                  <CheckCircle2 className="text-neon-cyan/40 group-hover:text-neon-cyan transition-colors" size={24} />
                  <Zap size={10} className="absolute -top-1 -right-1 text-neon-cyan animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[13px] font-mono font-bold text-gray-200 group-hover:text-white transition-colors">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[9px] text-neon-cyan/60 font-mono tracking-widest uppercase">{cert.issuer}</p>
                    <span className="text-[9px] text-gray-600 font-mono">[{cert.date}]</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}