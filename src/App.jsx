import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Lenis from '@studio-freight/lenis';
import Experience from './components3d/Experience';
import Overlay from './components/Overlay';

export default function App() {
  
  // Initialize Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full">
      {/* 3D Background Layer */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-void-black to-data-blue -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Experience />
        </Canvas>
      </div>

      {/* HTML Content Layer */}
      <Overlay />
    </div>
  );
}