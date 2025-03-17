// components/HeroSection.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

// A more complex 3D logo component
function Logo() {
  return (
    <group scale={[2, 2, 2]}>
      {/* Main shape */}
      <mesh receiveShadow castShadow>
        <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
        <meshPhysicalMaterial 
          color="#2563eb" 
          roughness={0.3}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Additional elements for more complexity */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <torusKnotGeometry args={[2.2, 0.2, 128, 32]} />
        <meshPhysicalMaterial 
          color="#60a5fa" 
          roughness={0.2}
          metalness={0.9}
          transmission={0.5}
          transparent={true}
        />
      </mesh>
      
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          roughness={0}
          metalness={0}
          transmission={0.9}
          transparent={true}
        />
      </mesh>
    </group>
  )
}

export default function HeroSection() {
  return (
    <div className="w-full h-full relative">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700" />
      
      {/* 3D Canvas - taking up more space */}
      <div className="absolute inset-0">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
          {/* Add subtle fog */}
          <fog attach="fog" args={['#1e3a8a', 8, 25]} />
          
          {/* Add our particle background */}
          <ParticlesBackground count={1500} />
          
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024}
          />
          
          <PresentationControls
            global
            cursor={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            speed={1}
            zoom={1}
            snap={true}
          >
            <Logo />
          </PresentationControls>
          
          <Environment preset="sunset" />
        </Canvas>
      </div>
      
      {/* Enhanced text overlay with animated subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1 
          className="text-white text-8xl font-extrabold tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          PANAV
        </motion.h1>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="h-1 w-20 bg-blue-400 my-6"></div>
          <p className="text-blue-200 text-xl tracking-widest">I PUT THIS OBNOXIOUS GRAPHIC HERE. NOW YOU HAVE TO DEAL WITH IT.</p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 2, 
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-blue-200 text-sm mb-2">SCROLL DOWN</p>
            <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}