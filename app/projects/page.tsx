'use client';

import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, getFeaturedProjects } from '@/lib/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-black">
              Featured <span className="text-cyan">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Production systems solving real problems. From ML to blockchain to real-time collaboration.
              Everything here is live and serving actual users.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 space-y-8"
          >
            {featured.map((project) => (
              <div key={project.id} className="glass-effect rounded-xl p-8 md:p-12 border-cyan/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/30 text-xs font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Challenges Overcome
                        </h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="text-gray-300 flex gap-2">
                              <span className="text-cyan">▸</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-cyan/20 text-cyan hover:bg-cyan/40 transition-colors text-sm font-semibold"
                          >
                            GitHub
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-magenta/20 text-magenta hover:bg-magenta/40 transition-colors text-sm font-semibold"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Impact section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 glass-effect rounded-xl p-12 border-cyan/30 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Real Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: '500+', label: 'Active Users' },
                { metric: '2000+', label: 'Monthly Downloads' },
                { metric: '$2M+', label: 'Annual Transactions' },
              ].map((item) => (
                <div key={item.metric}>
                  <div className="text-3xl font-black text-cyan mb-2">{item.metric}</div>
                  <div className="text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
