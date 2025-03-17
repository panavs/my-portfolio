// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Social links component with a dropdown menu
const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="scribble-button"
        style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)' }}
      >
        Socials
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border-2 border-black rounded-lg shadow-lg z-10 p-2"
             style={{ fontFamily: 'Indie Flower, cursive' }}>
          <a 
            href="https://twitter.com/panavs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-100 rounded"
          >
            Twitter/X
          </a>
          <a 
            href="https://github.com/panavs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-100 rounded"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/panavsheth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-100 rounded"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com/panavsheth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-100 rounded"
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  // State for the animated title
  const [isShaking, setIsShaking] = useState(false);
  
  // Trigger the animation at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col items-center p-8 pt-16">
      {/* Name with animation */}
      <h1 
        className={`text-7xl font-bold mb-12 ${isShaking ? 'animate-[shake_0.5s_ease-in-out_infinite]' : ''}`}
        style={{ 
          fontFamily: 'Caveat, cursive', 
          textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
          animation: isShaking ? 'shake 0.5s ease-in-out infinite' : 'none'
        }}
      >
        Panav
      </h1>
      
      {/* Hand-drawn divider */}
      <div className="w-48 h-4 mb-12 relative">
        <svg viewBox="0 0 200 10" className="w-full h-full">
          <path 
            d="M0,5 C40,15 60,-5 100,5 C140,15 160,-5 200,5" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Navigation buttons */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <Link href="panavshethphotography.mypixieset.com" className="scribble-button" style={{ backgroundColor: 'rgba(231, 111, 81, 0.2)' }}>
          Photography
        </Link>
        
        <Link href="/projects" className="scribble-button" style={{ backgroundColor: 'rgba(42, 157, 143, 0.2)' }}>
          Projects
        </Link>
        
        <a 
          href="https://panavsheth.substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="scribble-button"
          style={{ backgroundColor: 'rgba(231, 111, 81, 0.2)' }}
        >
          Substack
        </a>
        
        <SocialLinks />
      </div>
      
      {/* Short bio */}
      <p className="text-xl max-w-lg text-center leading-relaxed">
        Software engineer, sometimes photographer. 
      </p>
      
      {/* Hand-drawn illustration */}
      <div className="mt-12 opacity-60">
        <svg width="150" height="100" viewBox="0 0 150 100">
          <path 
            d="M30,60 Q45,20 75,50 T120,60"
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="30" cy="60" r="5" fill="black" />
          <circle cx="120" cy="60" r="5" fill="black" />
        </svg>
      </div>
    </main>
  )
}