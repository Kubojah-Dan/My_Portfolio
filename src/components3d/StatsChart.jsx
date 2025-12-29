import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const Bar = ({ position, height, label, value, color }) => {
  return (
    <group position={position}>
      {/* The Bar */}
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[1, height, 1]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Floating Label */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, height + 1, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {value}
          <meshBasicMaterial toneMapped={false} />
        </Text>
        <Text
          position={[0, height + 0.5, 0]}
          fontSize={0.25}
          color="#4AA3F0"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Float>
    </group>
  );
};

export default function StatsChart() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) * 0.2;
  });

  return (
    <group ref={group} position={[3, -1, 0]} rotation={[0, -0.5, 0]}>
      {/* CGPA Bar */}
      <Bar position={[-2, 0, 0]} height={4} label="CGPA" value="8.1" color="#4AA3F0" />
      {/* LeetCode Bar */}
      <Bar position={[0, 0, 0]} height={6} label="LeetCode" value="300+" color="#00F0FF" />
      {/* CodeChef Bar */}
      <Bar position={[2, 0, 0]} height={8} label="CodeChef" value="1000+" color="#2E5C9E" />
    </group>
  );
}