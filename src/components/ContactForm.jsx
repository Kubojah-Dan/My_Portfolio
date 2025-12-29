import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Github, Linkedin, Cpu } from 'lucide-react';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm('service_r8x5w9w', 'template_7c9exxm', form.current, '2dLO-qxnhL4ncAADn')
      .then(() => {
        setStatus('UPLINK SUCCESSFUL');
        setIsSubmitting(false);
        form.current.reset();
      }, () => {
        setStatus('SYSTEM ERROR: RETRY');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Element: Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/40 backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] border border-neon-blue/20 shadow-[0_0_50px_-12px_rgba(74,163,240,0.3)]"
      >
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div className="relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-1 bg-neon-blue mb-6 shadow-[0_0_15px_#4AA3F0]"
            />
            <h2 className="text-5xl font-black tracking-tighter mb-4 text-white uppercase italic">
              Let's <span className="text-neon-blue">Connect</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
              // Collaboration_Data_Science
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Phone size={20}/>, label: "COMM-LINK", value: "+91 8452932842" },
              { icon: <Mail size={20}/>, label: "SECURE-MAIL", value: "kubodan014@gmail.com" },
              { icon: <MapPin size={20}/>, label: "COORDINATES", value: "Coimbatore, India" }
            ].map((item, i) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={i} 
                className="group flex items-center gap-6 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-neon-blue/5 hover:border-neon-blue/30 transition-all cursor-crosshair"
              >
                <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue group-hover:shadow-[0_0_15px_rgba(74,163,240,0.5)] transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-neon-blue font-bold tracking-[0.2em]">{item.label}</p>
                  <p className="font-mono text-gray-200">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-6">
            {[
              { icon: <Github />, url: "https://github.com/Kubojah-Dan" },
              { icon: <Linkedin />, url: "https://linkedin.com/in/kuboja-mabuba-9202b82b6" }
            ].map((soc, i) => (
              <a 
                key={i}
                href={soc.url} 
                className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-neon-blue hover:text-neon-blue shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Futuristic Form */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="relative space-y-4 bg-space-dark/80 p-8 rounded-3xl h-full"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group">
                <input type="text" name="from_name" placeholder="IDENTIFY NAME" required className="w-full bg-transparent border-b border-white/20 p-4 outline-none focus:border-neon-blue font-mono text-sm tracking-widest transition-all placeholder:text-gray-600" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-blue group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="relative group">
                <input type="email" name="reply_to" placeholder="EMAIL ADDRESS" required className="w-full bg-transparent border-b border-white/20 p-4 outline-none focus:border-neon-blue font-mono text-sm tracking-widest transition-all placeholder:text-gray-600" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-blue group-focus-within:w-full transition-all duration-500" />
              </div>
            </div>

            <div className="relative group">
              <textarea name="message" rows="5" placeholder="ENCODE MESSAGE..." required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-neon-blue/50 font-mono text-sm transition-all placeholder:text-gray-600 resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden py-4 bg-transparent border border-neon-blue text-neon-blue font-black tracking-[0.3em] uppercase rounded-xl transition-all hover:text-black"
            >
              <div className="absolute inset-0 bg-neon-blue translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? <Cpu className="animate-spin" /> : <Send size={18} />}
                {isSubmitting ? "PROCESSING..." : "Transmit Data"}
              </span>
            </button>

            <AnimatePresence>
              {status && (
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-xs font-mono text-neon-blue mt-4 tracking-tighter"
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