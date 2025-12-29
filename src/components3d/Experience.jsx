import { OrbitControls, Stars } from '@react-three/drei';
import StatsChart from './StatsChart';

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4AA3F0" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* The Statistical Chart */}
      <StatsChart />
    </>
  );
}