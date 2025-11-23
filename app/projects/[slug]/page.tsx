'use client';

import { Navbar } from '@/components/Navbar';
import { getProjectBySlug } from '@/lib/projects';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-cyan hover:text-magenta transition-colors mb-12">
            ← Back to Projects
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black">{project.title}</h1>
            <p className="text-2xl text-cyan">{project.subtitle}</p>
            <p className="text-gray-400">Shipped in {project.year}</p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-12 border-cyan/30 space-y-12"
          >
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-cyan mb-4">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-cyan mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg bg-cyan/20 text-cyan border border-cyan/50 font-semibold hover:bg-cyan/40 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-cyan mb-4">Challenges Overcome</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-gray-300"
                  >
                    <span className="text-magenta font-bold">→</span>
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="bg-black/30 rounded-lg p-8 border border-magenta/30">
              <h2 className="text-2xl font-bold text-magenta mb-4">Real Impact</h2>
              <p className="text-gray-300 text-lg">{project.impact}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-cyan/20 text-cyan hover:bg-cyan/40 transition-colors font-semibold"
                >
                  View Source Code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-magenta/20 text-magenta hover:bg-magenta/40 transition-colors font-semibold"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Next project */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 mb-6">Want to see more?</p>
            <Link href="/projects" className="inline-block px-8 py-3 rounded-lg glass-effect font-semibold text-cyan hover:border-cyan/60 transition-all">
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
