import React from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-cyan/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 relative z-10">

        <div className="space-y-3">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight"
          >
            Kuboja <span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">Daniel.</span>
          </motion.h1>
          <div className="h-[3px] w-24 md:w-32 bg-neon-cyan shadow-[0_0_15px_#00F0FF]" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 border-l-2 border-neon-cyan/30 pl-4 md:pl-6 py-2"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono italic">
            <span className="text-neon-cyan font-bold not-italic tracking-[0.2em] text-[10px] md:text-xs block mb-2 uppercase">
              ABOUT ME:
            </span>
            I am an aspiring <span className="text-white font-bold">Data Scientist</span> passionate about using data to tackle complex problems. I have a strong analytical mindset and skills in <span className="text-neon-cyan">AI</span> and <span className="text-neon-cyan">Machine Learning</span>. I am always dedicated to learning and growing. I aim to bring my expertise to dynamic teams and take on challenging projects with determination.
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-1">Academic_Index</span>
            <div className="px-4 py-2 md:px-6 md:py-3 bg-matrix-dim border border-neon-cyan/20 rounded-lg backdrop-blur-md">
              <h4 className="text-2xl md:text-3xl font-black text-white italic">8.1<span className="text-neon-cyan text-[10px] md:text-xs ml-1 font-mono">CGPA</span></h4>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-1">Algorithm_Count</span>
            <div className="px-4 py-2 md:px-6 md:py-3 bg-matrix-dim border border-neon-cyan/20 rounded-lg backdrop-blur-md">
              <h4 className="text-2xl md:text-3xl font-black text-white italic">2.5K+<span className="text-neon-cyan text-[10px] md:text-xs ml-1 font-mono">SOLVED</span></h4>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
            href="#projects"
            className="group px-6 md:px-10 py-3 md:py-4 bg-neon-cyan text-void-black text-xs md:text-sm font-black uppercase tracking-widest rounded-sm flex items-center gap-3 transition-all"
          >
            VIEW MY WORK <Rocket size={18} />
          </motion.a>

          <motion.a
            href="/assets/resume.pdf"
            className="px-6 md:px-10 py-3 md:py-4 border-2 border-neon-cyan/40 text-neon-cyan text-xs md:text-sm font-black uppercase tracking-widest rounded-sm hover:bg-neon-cyan/10 transition-all flex items-center gap-3"
          >
            <Download size={18} /> MY CV
          </motion.a>
        </div>
      </div>

      {/* Doubled Circular Profile Frame */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 relative flex justify-center items-center py-12 lg:py-0"
      >
        {/* massive Rotating HUD Layers */}
        <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] border border-neon-cyan/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] border border-dashed border-neon-cyan/20 rounded-full animate-[spin_20s_linear_reverse_infinite]" />

        {/* Glow Core */}
        <div className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] bg-neon-cyan/10 blur-[80px] md:blur-[100px] rounded-full animate-pulse" />

        {/* Large Profile Circle */}
        <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[4px] md:border-8 border-white/5 overflow-hidden bg-void-black shadow-[0_0_60px_-15px_rgba(0,240,255,0.4)] z-10">
          <img
            src="assets/profile.jpg"
            alt="Kuboja Daniel"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100 scale-105"
          />

          {/* Animated Scanner Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-[scan_4s_linear_infinite]" />
        </div>

        {/* Floating Targeting Elements */}
        <div className="absolute -top-4 right-0 lg:right-10 p-3 md:p-4 bg-void-black/80 backdrop-blur-md border border-neon-cyan/50 rounded-lg z-20 scale-90 md:scale-100">
          <Target className="text-neon-cyan animate-pulse mb-1 md:mb-2" size={16} />
          <p className="font-mono text-[8px] md:text-[9px] text-neon-cyan tracking-tighter uppercase leading-tight">
            Subject: Kuboja_Dan <br />
            Status: High_Potential <br />
            Location: 11.0183° N
          </p>
        </div>
      </motion.div>


      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}