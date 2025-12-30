import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Terminal, Activity } from 'lucide-react';

const projects = [
  {
    title: "Scam Detection App",
    desc: "A real-time platform using ML and NLP to identify harmful content across communication channels.",
    tags: ["Python", "NLP", "Transformers", "Docker"],
    link: "https://github.com/Kubojah-Dan/SCAM_DEFENDER_PRO",
    img: "assets/project1.png"
  },
  {
    title: "VitalPlate AI",
    desc: "AI-based meal planning web app using MERN stack providing personalized health goals.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    link: "https://github.com/Kubojah-Dan/VitalPlate_Application",
    img: "assets/project2.png"
  },
  {
  title: "My Personal Portfolio",
  desc: "A high-performance 3D portfolio featuring animated statistical charts, smooth scrolling, and a futuristic dark-blue aesthetic to showcase my AI/ML journey.",
  tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
  link: "https://github.com/Kubojah-Dan/My_Portfolio",
  img: "assets/project3.png"
 },
  {
    title: "Clause-Wise Legal Document Analyzer",
    desc: "A RAG system to extract insights from legal documents using natural language queries. Implemented query parsing, semantic search via vector DB, and structured output generation with a open-source LLM - prioritizing affordability and transparency.",
    tags: ["Python", "FastAPI", "Chroma", "Llama/OSS-120B LLM", "NLP"],
    link: "https://github.com/Kubojah-Dan/Legal_Document_Analyzer",
    img: "assets/project4.png"
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Decorative Title */}
      <div className="mb-16 relative">
        <h2 className="text-4xl font-black mb-2 flex items-center gap-4 text-white uppercase italic tracking-tighter">
          <Code2 className="text-neon-cyan" /> Deployment <span className="text-neon-cyan">Grid</span>
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-neon-cyan" />
          <p className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">
            // Neural_Models_Active: {projects.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-data-blue/40 rounded-3xl overflow-hidden border border-white/5 hover:border-neon-cyan/40 transition-all duration-500 shadow-2xl shadow-void-black"
          >
            {/* Image Container with Viewfinder effect */}
            <div className="h-64 relative overflow-hidden bg-void-black">
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neon-cyan z-20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neon-cyan z-20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-40 group-hover:opacity-80" 
              />
              
              {/* Futuristic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-data-blue via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

              <div className="absolute top-4 right-4 flex gap-3 z-20">
                <a href={p.link} className="p-3 bg-void-black/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-neon-cyan hover:border-neon-cyan transition-all">
                  <Github size={18}/>
                </a>
                <a href="#" className="p-3 bg-void-black/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-neon-cyan hover:border-neon-cyan transition-all">
                  <ExternalLink size={18}/>
                </a>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 left-6 flex items-center gap-2 font-mono text-[10px] text-neon-cyan">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00F0FF]" />
                LIVE_PREVIEW_READY
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative">
              {/* Background ID Text */}
              <div className="absolute top-4 right-8 font-mono text-6xl text-white/[0.02] font-black pointer-events-none uppercase italic">
                0{i + 1}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-neon-cyan" />
                <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">{p.title}</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-matrix-dim border border-neon-cyan/20 text-neon-cyan text-[10px] font-mono font-bold rounded-md hover:bg-neon-cyan/10 transition-colors">
                    <Activity size={10} />
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Background Decor Element */}
      <div className="mt-16 flex justify-center opacity-20">
        <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
      </div>
    </section>
  );
}