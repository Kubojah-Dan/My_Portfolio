import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Github, Linkedin, Cpu, Terminal } from 'lucide-react';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_r8x5w9w',
      'template_7c9exxm',
      form.current,
      '2dLO-qxnhL4ncAADn'
    ).then(
      () => {
        setStatus('UPLINK SUCCESSFUL');
        setIsSubmitting(false);
        form.current.reset();
      },
      () => {
        setStatus('SYSTEM ERROR: RETRY');
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Decorative Title */}
      <div className="mb-12 md:mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center gap-4 text-white uppercase italic tracking-tighter">
          <Terminal className="text-neon-cyan" /> Secure <span className="text-neon-cyan">Communication</span>
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-neon-cyan" />
          <p className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">
            Establish_Connection
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 bg-data-blue/40 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl shadow-void-black"
      >
        {/* Left Side */}
        <div className="space-y-10 md:space-y-12">
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-1 bg-neon-cyan mb-6 shadow-[0_0_15px_#00F0FF]"
            />
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-white uppercase italic">
              Initiate <span className="text-neon-cyan">Contact</span>
            </h3>
            <p className="text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase">
              Awaiting_Transmission
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {[
              { icon: <Phone size={18} />, label: "COMM-LINK", value: "+91 8452932842" },
              { icon: <Mail size={18} />, label: "SECURE-MAIL", value: "kubojadan014@gmail.com" },
              { icon: <MapPin size={18} />, label: "COORDINATES", value: "Coimbatore, India" }
            ].map((item, i) => (
              <motion.div
                whileHover={{ x: 10 }}
                key={i}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-neon-cyan/5 hover:border-neon-cyan/30 transition-all cursor-crosshair break-all"
              >
                <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] self-start sm:self-auto">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] text-neon-cyan font-bold tracking-[0.2em]">
                    {item.label}
                  </p>
                  <p className="font-mono text-sm md:text-base text-gray-200">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 md:gap-6">
            {[
              { icon: <Github />, url: "https://github.com/Kubojah-Dan" },
              { icon: <Linkedin />, url: "https://linkedin.com/in/kuboja-mabuba-9202b82b6" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 md:p-4 bg-void-black/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:border-neon-cyan hover:text-neon-cyan transition-all shadow-lg"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative space-y-8 bg-void-black/80 p-5 sm:p-8 rounded-3xl h-full flex flex-col justify-center border border-white/5"
          >
            <div className="space-y-6">
              <div className="relative group">
                <label className="block font-mono text-[10px] text-neon-cyan/60 uppercase tracking-[0.3em] mb-2 ml-1">
                  [ Identity_Name ]
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER NAME"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-neon-cyan/50 font-mono text-sm tracking-widest placeholder:text-gray-700 text-white transition-all"
                />
              </div>

              <div className="relative group">
                <label className="block font-mono text-[10px] text-neon-cyan/60 uppercase tracking-[0.3em] mb-2 ml-1">
                  [ Secure_Email ]
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER EMAIL"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-neon-cyan/50 font-mono text-sm tracking-widest placeholder:text-gray-700 text-white transition-all"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block font-mono text-[10px] text-neon-cyan/60 uppercase tracking-[0.3em] mb-2 ml-1">
                [ Transmission_Data ]
              </label>
              <textarea
                name="title"
                rows="4"
                placeholder="ENCODE MESSAGE..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-neon-cyan/50 font-mono text-sm placeholder:text-gray-700 resize-none text-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden py-4 bg-transparent border border-neon-cyan text-neon-cyan font-black tracking-[0.3em] uppercase rounded-xl transition-all hover:text-black mt-2"
            >
              <div className="absolute inset-0 bg-neon-cyan translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? <Cpu className="animate-spin" size={18} /> : <Send size={18} />}
                {isSubmitting ? "PROCESSING..." : "Transmit Data"}
              </span>
            </button>

            <AnimatePresence>
              {status && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-xs font-mono text-neon-cyan mt-2 font-bold"
                >
                  {`> ${status}`}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
