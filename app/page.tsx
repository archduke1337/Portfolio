'use client';

import { Navbar } from '@/components/Navbar';
import { SocialLinks } from '@/components/SocialLinks';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Hero section */}
        <div className="w-full max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Main title with warp effect */}
            <motion.h1
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-magenta relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Gaurav Yadav
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
              1st Year Cybersecurity • <span className="text-cyan">Seamedu × ADYPU</span>
            </motion.p>

            {/* Hero tagline card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-effect rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border-cyan/30 hover:border-cyan/60 transition-colors"
            >
              <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
                <span className="text-cyan font-bold">First-year student.</span> Already SIH-qualified.{' '}
                <span className="text-magenta font-bold">Already freelancing.</span> Already building a startup.
              </p>
            </motion.div>

            {/* Social links and CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8"
            >
              <SocialLinks />

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan to-blue text-black font-bold hover:shadow-lg hover:shadow-cyan/50 transition-all"
                >
                  View My Work →
                </motion.button>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg glass-effect font-semibold text-cyan hover:border-cyan transition-all"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-cyan/30 text-6xl font-black"
          animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 text-magenta/30 text-5xl font-black"
          animate={{ y: [0, -50, 0], x: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        >
          {'{}'}{' '}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-cyan/50 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-cyan rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </main>

      {/* Featured projects preview */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured <span className="text-cyan">Projects</span>
          </motion.h2>

          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Building production systems that scale. From ML-powered search to blockchain verification to gamified sustainability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SeekEngine', desc: 'Advanced search with NLP & ML' },
              { title: 'SwiftFormat', desc: 'Multi-language code formatter' },
              { title: 'Ro0m', desc: 'WebRTC collaboration suite' },
              { title: 'EcoQuest', desc: 'Gamified sustainability platform' },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group glass-effect rounded-xl p-6 hover:border-cyan/50 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <Link href="/projects" className="text-cyan hover:text-magenta transition-colors">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 rounded-lg glass-effect font-semibold text-cyan hover:border-cyan/60 transition-all"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
