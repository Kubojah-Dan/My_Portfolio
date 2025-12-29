import React from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket, ShieldCheck, Cpu, Terminal, Circle, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="lg:w-1/2 space-y-8 relative z-10">

        <div className="space-y-3">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight"
          >
            Kuboja <span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">Daniel.</span>
          </motion.h1>
          <div className="h-[3px] w-32 bg-neon-cyan shadow-[0_0_15px_#00F0FF]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 border-l-2 border-neon-cyan/30 pl-6 py-2"
        >
          <p className="text-gray-300 text-lg leading-relaxed font-mono italic">
            <span className="text-neon-cyan font-bold not-italic tracking-[0.2em] text-xs block mb-2 uppercase">
              // ABOUT ME:
            </span>
            I am an aspiring <span className="text-white font-bold">Data Scientist</span> passionate about using data to tackle complex issues. With a strong analytical mindset and skills in <span className="text-neon-cyan">Machine Learning</span> and programming, I am dedicated to learning and growing. I aim to bring my expertise to dynamic teams and take on challenging projects with determination.
          </p>
        </motion.div>
        
        {/* Stats Dashboard */}
        <div className="flex gap-6 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-1">Academic_Index</span>
            <div className="px-6 py-3 bg-matrix-dim border border-neon-cyan/20 rounded-lg backdrop-blur-md">
              <h4 className="text-3xl font-black text-white italic">8.1<span className="text-neon-cyan text-xs ml-1 font-mono">CGPA</span></h4>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-1">Algorithm_Count</span>
            <div className="px-6 py-3 bg-matrix-dim border border-neon-cyan/20 rounded-lg backdrop-blur-md">
              <h4 className="text-3xl font-black text-white italic">2.5K+<span className="text-neon-cyan text-xs ml-1 font-mono">SOLVED</span></h4>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-6">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
            href="#projects" 
            className="group px-10 py-4 bg-neon-cyan text-void-black text-sm font-black uppercase tracking-widest rounded-sm flex items-center gap-3 transition-all"
          >
            VIEW MY WORK <Rocket size={18} />
          </motion.a>

          <motion.a 
            href="/assets/resume.pdf" 
            className="px-10 py-4 border-2 border-neon-cyan/40 text-neon-cyan text-sm font-black uppercase tracking-widest rounded-sm hover:bg-neon-cyan/10 transition-all flex items-center gap-3"
          >
            <Download size={18} /> RESUME
          </motion.a>
        </div>
      </div>

      {/* Doubled Circular Profile Frame */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 relative flex justify-center items-center"
      >
        {/* Massive Rotating HUD Layers */}
        <div className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] border border-neon-cyan/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] border border-dashed border-neon-cyan/20 rounded-full animate-[spin_20s_linear_reverse_infinite]" />
        
        {/* Glow Core */}
        <div className="absolute w-[350px] h-[350px] bg-neon-cyan/10 blur-[100px] rounded-full animate-pulse" />

        {/* Large Profile Circle */}
        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-8 border-white/5 overflow-hidden bg-void-black shadow-[0_0_60px_-15px_rgba(0,240,255,0.4)] z-10">
           <img 
             src="assets/profile.jpg" 
             alt="Kuboja Daniel" 
             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100 scale-105" 
           />
           
           {/* Animated Scanner Overlays */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-[scan_4s_linear_infinite]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,240,255,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.01),rgba(0,0,255,0.05))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        </div>

        {/* Floating Targeting Elements */}
        <div className="absolute -top-4 -right-4 lg:right-10 p-4 bg-void-black/80 backdrop-blur-md border border-neon-cyan/50 rounded-lg z-20 hidden md:block">
           <Target className="text-neon-cyan animate-pulse mb-2" size={20} />
           <p className="font-mono text-[9px] text-neon-cyan tracking-tighter uppercase leading-tight">
             Subject: Kuboja_Dan <br/>
             Status: High_Potential <br/>
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