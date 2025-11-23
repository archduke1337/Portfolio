'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200">
          Gaurav
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-200 hover:text-cyan transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-blue group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Button
          as={Link}
          href="/contact"
          className="hidden md:inline-flex bg-gradient-to-r from-cyan to-blue text-black font-bold px-6 shadow-lg shadow-cyan/50 hover:shadow-cyan/70 transition-shadow duration-200"
          size="sm"
        >
          Contact
        </Button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X size={24} className="text-cyan" />
          ) : (
            <Menu size={24} className="text-cyan" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan/30 px-6 py-6 space-y-4 z-40"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className="block text-sm font-semibold text-gray-200 hover:text-cyan transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Button
            as={Link}
            href="/contact"
            className="w-full bg-gradient-to-r from-cyan to-blue text-black font-bold shadow-lg shadow-cyan/50"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};
