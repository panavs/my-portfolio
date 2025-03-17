'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function ParticlesBackground({ count = 2000 }) {
  // Add proper typing for the ref
  const pointsRef = useRef<THREE.Points>(null)
  
  // Generate random particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10
      
      // Create a nice blue-to-white gradient for particles
      const shade = Math.random()
      colors[i3] = 0.5 + shade * 0.5     // More blue
      colors[i3 + 1] = 0.7 + shade * 0.3  // Some green
      colors[i3 + 2] = 0.9               // Full blue
    }
    
    return { positions, colors }
  }, [count])
  
  // Animate particles
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1
    if (pointsRef.current) {
      // Spiral motion
      pointsRef.current.rotation.x = time * 0.05
      pointsRef.current.rotation.y = time * 0.1
      
      // Get the position attribute
      const positions = pointsRef.current.geometry.attributes.position
      
      // Animate each particle
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions.array[i3]
        const y = positions.array[i3 + 1]
        const z = positions.array[i3 + 2]
        
        // Apply some subtle movement based on sine waves
        positions.array[i3] = x + Math.sin(time + i * 0.1) * 0.01
        positions.array[i3 + 1] = y + Math.cos(time + i * 0.1) * 0.01
        positions.array[i3 + 2] = z + Math.sin(time + i * 0.05) * 0.01
      }
      
      positions.needsUpdate = true
    }
  })
  
  // Create the point cloud geometry with properly defined buffers
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(particles.colors, 3));
    return geometry;
  }, [particles.positions, particles.colors]);
  
  return (
    <Points ref={pointsRef} geometry={geometry}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
} 