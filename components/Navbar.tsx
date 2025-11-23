'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Divider } from '@nextui-org/react';

export const Navbar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-black/40 border-b border-cyan/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Gaurav
        </Link>
        <Divider orientation="vertical" className="h-8 bg-cyan/30" />
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-300 hover:text-cyan transition-colors duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <Button
          as={Link}
          href="/contact"
          className="ml-auto bg-gradient-to-r from-cyan to-blue text-black font-bold px-6"
          size="sm"
        >
          Contact
        </Button>
      </div>
    </motion.nav>
  );
};
