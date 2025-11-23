'use client';

import { Navbar } from '@/components/Navbar';
import { SocialLinks } from '@/components/SocialLinks';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const sections = [
    {
      title: 'How I Hacked My Way into Cybersecurity',
      content:
        'At 17, I became obsessed with understanding how systems break. Not to break them—to build better ones. Started with CTFs, moved to security research, landed my first gig. Now, cybersecurity isn\'t just my field. It\'s my lens for everything.',
    },
    {
      title: 'Self-Taught Stack Evolution',
      content:
        'HTML → CSS → JavaScript (3 months). React (2 months). Next.js + TypeScript (deep dive). Three.js for 3D experiences. GSAP for motion. Blockchain fundamentals. Every tool I learned was driven by a problem I wanted to solve. Not curiosity. Necessity.',
    },
    {
      title: 'Current Obsession',
      content:
        'Secure, beautiful, physics-driven web experiences that make people stop scrolling and actually feel something. The intersection of cybersecurity, design, and performance is where the real innovation happens.',
    },
    {
      title: 'Leadership at Mind Mesh',
      content:
        'Running technical operations for 500+ members. Not just talks. Building infrastructure, mentoring juniors, organizing hackathons. Leading means shipping. My team ships.',
    },
    {
      title: 'Vision: Zocav',
      content:
        'Building the go-to digital agency for Indian SMEs who want production-quality web and blockchain solutions without production-quality budgets. We\'ve already landed our first 5 clients. By end of 2025, we aim for 20+ active projects and ₹5L MRR.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-black">
              The Story <span className="text-cyan">Behind</span> the Code
            </h1>
            <p className="text-xl text-gray-400">From curiosity to production systems in 18 months.</p>
          </motion.div>

          {/* Story sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-effect rounded-xl p-8 md:p-12 border-cyan/30 hover:border-cyan/60 transition-colors group"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-cyan mb-6 group-hover:text-white transition-colors">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">{section.content}</p>

                {/* Floating accent */}
                <motion.div
                  className="absolute top-6 right-6 text-cyan/20 text-4xl font-black"
                  animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-4 gap-6 py-12"
          >
            {[
              { label: 'Projects Shipped', value: '15+' },
              { label: 'Clients Served', value: '12' },
              { label: 'Lines of Code', value: '100k+' },
              { label: 'Years of Experience', value: '2' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-6 text-center border-cyan/30"
              >
                <div className="text-3xl font-black text-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <p className="text-xl text-gray-300">Ready to build something legendary together?</p>
            <SocialLinks />
          </motion.div>
        </div>
      </main>
    </>
  );
}
