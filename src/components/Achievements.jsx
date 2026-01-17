import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Medal,
  Star,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CertificateModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 20 }}
      className="relative max-w-5xl w-full bg-[#0A1438] border border-[#00F0FF]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-[#00F0FF] z-10"
      >
        <X />
      </button>

      <img
        src={cert.img}
        alt={cert.name}
        className="w-full h-auto max-h-[85vh] object-contain"
      />

      <div className="p-6 bg-[#050B23]/95 border-t border-white/5">
        <h3 className="text-2xl font-black text-[#00F0FF] uppercase italic tracking-tighter">
          {cert.name}
        </h3>
        <p className="text-gray-400 font-mono text-sm mt-1">
          {cert.issuer} • Issued {cert.date}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

const AchievementCard = ({ title, year, description, rank }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-10 pb-12 border-l-2 border-[#00F0FF]/20 last:pb-0"
  >
    <div className="absolute left-[-11px] top-0">
      <div className="w-5 h-5 rounded-full bg-black border-2 border-[#00F0FF] shadow-[0_0_15px_#00F0FF]" />
    </div>

    <div className="bg-[#0A1438]/50 p-6 rounded-2xl border border-white/5 hover:border-[#00F0FF]/50 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">
          {title}
        </h3>
        <span className="text-[10px] font-mono text-[#00F0FF] border border-[#00F0FF]/30 px-2 py-1 rounded bg-[#00F0FF]/5">
          {year}
        </span>
      </div>

      <p className="text-[#00F0FF] font-mono text-[10px] tracking-widest flex items-center gap-2 mb-3">
        <Trophy size={14} /> {rank}
      </p>

      <p className="text-gray-400 text-sm font-mono leading-relaxed">
        <span className="text-[#00F0FF]/50 mr-2">{'>'}</span>
        {description}
      </p>
    </div>
  </motion.div>
);

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: 'Freshathon',
      year: '2025',
      rank: 'Third Place',
      description:
        'Achieved third place with an outstanding project in a competitive hackathon environment.'
    },
    {
      title: 'Selfiehack',
      year: '2024',
      rank: 'Finalist',
      description:
        'Recognized as a finalist in a multi-round hackathon focused on innovation and problem-solving.'
    }
  ];

  const certifications = [
    {
      name: 'Python Learning Course',
      issuer: 'LinkedIn',
      date: '2024',
      img: 'https://lh3.googleusercontent.com/d/1F9KS4mRvrJw7kg59V5RNmJj-0IaZxZd1'
    },
    {
      name: 'Data Visualization in PowerBI',
      issuer: 'LinkedIn',
      date: '2024',
      img: 'https://lh3.googleusercontent.com/d/1GOX1kw3pYNti2pRSM-TBdnod9KLXW0tX'
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      date: '2025',
      img: 'https://lh3.googleusercontent.com/d/1ot8WsXdOd9DnzdwvGiNfFO5jK91KQQHg'
    },
    {
      name: 'DSA in C & C++',
      issuer: 'Udemy',
      date: '2025',
      img: 'https://lh3.googleusercontent.com/d/1nVHShldUuOQaB4bKqBgrehHwgQ4Qb6l2'
    },
    {
      name: 'Python Libraries for DS',
      issuer: 'SimpliLearn',
      date: '2025',
      img: 'https://lh3.googleusercontent.com/d/1A1rjvGSd_LKP5YUOvsDvQrX9pxz0rTpe'
    },
    {
      name: 'IEEE Webinar',
      issuer: 'IEEE',
      date: '2025',
      img: 'https://lh3.googleusercontent.com/d/1YUN4XeolJWi6LaGOu_qXKIPvAOdaSOPu'
    },
    {
      name: 'C Programming',
      issuer: 'SimpliLearn',
      date: '2024',
      img: 'https://lh3.googleusercontent.com/d/1MUmlpc53UOJsGvxQohLUHkjjzwjOEQOv'
    },
    {
      name: 'ICT Fundamentals',
      issuer: 'Unique Academy',
      date: '2024',
      img: 'https://lh3.googleusercontent.com/d/1GIbf5C0IOtw3YKi5ufPkuXOjxsis-DUy'
    }
  ];

  const infiniteCerts = [...certifications, ...certifications];

  return (
    <section
      id="achievements"
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* HACKATHONS */}
      <div className="mb-24">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white uppercase italic flex items-center gap-4">
            <Medal className="text-[#00F0FF]" /> Mission{' '}
            <span className="text-[#00F0FF]">Log</span>
          </h2>
          <div className="h-1 w-20 bg-[#00F0FF] mt-2 shadow-[0_0_10px_#00F0FF]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, i) => (
            <AchievementCard key={i} {...ach} />
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="relative">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-white uppercase italic inline-flex items-center gap-4">
            <Star className="text-[#00F0FF]" /> Verified{' '}
            <span className="text-[#00F0FF]">Modules</span>
          </h2>
          <div className="h-1 w-20 bg-[#00F0FF] mx-auto mt-2 shadow-[0_0_10px_#00F0FF]" />
        </div>

        <div className="group relative flex items-center overflow-hidden">
          <button className="absolute left-0 z-20 p-4 bg-black/50 border-r border-[#00F0FF]/20 text-[#00F0FF] hover:text-white backdrop-blur-md h-full">
            <ChevronLeft size={32} />
          </button>

          <div className="flex w-fit animate-infinite-scroll group-hover:pause-animation">
            {infiniteCerts.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="flex-shrink-0 w-[350px] h-[220px] mx-4 bg-[#0A1438] rounded-2xl border border-white/10 overflow-hidden cursor-zoom-in relative group/card"
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-50 group-hover/card:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-[#00F0FF] font-mono text-[9px] uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                  <h4 className="text-sm font-bold text-white group-hover/card:text-[#00F0FF] mt-1">
                    {cert.name}
                  </h4>
                  <div className="flex justify-between items-center mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <span className="text-[9px] text-gray-500 font-mono italic">
                      {cert.date}
                    </span>
                    <Maximize2 size={16} className="text-[#00F0FF]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 z-20 p-4 bg-black/50 border-l border-[#00F0FF]/20 text-[#00F0FF] hover:text-white backdrop-blur-md h-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
            }
            .pause-animation {
              animation-play-state: paused;
            }
          `
        }}
      />
    </section>
  );
}