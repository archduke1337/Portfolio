'use client';

import { Navbar } from '@/components/Navbar';
import { TimelineItem } from '@/components/TimelineItem';
import { experience } from '@/lib/experience';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-black">
              My <span className="text-cyan">Journey</span>
            </h1>
            <p className="text-xl text-gray-400">2023 → 2025 → Future</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan via-magenta to-transparent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Future section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 glass-effect rounded-xl p-12 border-magenta/30 text-center"
          >
            <h2 className="text-3xl font-bold text-magenta mb-4">What's Next?</h2>
            <p className="text-lg text-gray-300 mb-6">
              By 2026, I'm building Zocav into a ₹1Cr ARR digital agency. Hiring the best. Shipping the hardest.
              Making a dent in the Indian tech ecosystem.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {['Scale Zocav', 'Open Source', 'Speak at Conferences', 'Write a Book'].map((goal) => (
                <span key={goal} className="px-4 py-2 rounded-full bg-magenta/20 text-magenta border border-magenta/50 text-sm font-semibold">
                  {goal}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
