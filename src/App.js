import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Experience from './components3d/Experience';
import Overlay from './components/Overlay';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  return (
    <div className="relative w-full">
      <Navbar />
      
      {/* 3D Scene - This stays fixed in the background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-void-black">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Experience />
        </Canvas>
      </div>

      {/* HTML Content - This scrolls over the 3D scene */}
      <Overlay />
      
      <footer className="py-10 text-center text-gray-500 border-t border-white/5 bg-void-black">
        <p>© 2025 Kuboja Daniel. AI & ML Enthusiast.</p>
      </footer>
    </div>
  );
}