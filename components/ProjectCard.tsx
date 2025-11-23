'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="group relative overflow-hidden bg-gradient-to-br from-black/40 to-black/20 border border-cyan/30 hover:border-cyan/60 transition-all duration-300 backdrop-blur-lg cursor-pointer h-full hover:shadow-2xl hover:shadow-cyan/20">
          <CardHeader className="flex flex-col items-start px-6 py-4">
            <div className="flex justify-between items-start w-full mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors duration-300">{project.title}</h3>
              <motion.span 
                className="text-xs font-semibold text-cyan bg-cyan/20 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {project.year}
              </motion.span>
            </div>
            <p className="text-sm text-cyan/80 font-medium group-hover:text-cyan transition-colors duration-300">{project.subtitle}</p>
          </CardHeader>

          <CardBody className="px-6 py-4 space-y-4">
            <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{project.shortDesc}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-cyan/20 to-cyan/10 text-cyan border border-cyan/40 font-semibold hover:border-cyan/70 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-magenta/20 to-magenta/10 text-magenta border border-magenta/40 font-semibold">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="pt-4 flex justify-end">
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>
                <Button
                  isIconOnly
                  className="bg-gradient-to-r from-cyan to-blue text-black font-bold hover:shadow-lg hover:shadow-cyan/50 transition-all duration-200"
                  variant="solid"
                >
                  →
                </Button>
              </motion.div>
            </div>
          </CardBody>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
      </Link>
    </motion.div>
  );
};
