'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Footer link items
  const footerItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Wave top shape */}
      <div className="text-blue-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-12 border-b border-gray-800">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              PANAV
            </Link>
            <p className="mt-2 text-gray-400">Building digital experiences with passion.</p>
          </div>
          
          {/* Footer navigation */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 text-center sm:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {footerItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="mb-4 md:mb-0">
            © {currentYear} Panav Sheth. All rights reserved.
          </p>
          
          <div>
            <p className="text-gray-500 text-sm">
              Designed and built with 
              <span className="mx-1">❤️</span>
              using Next.js and Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 