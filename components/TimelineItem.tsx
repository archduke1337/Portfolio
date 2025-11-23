'use client';

import { ExperienceItem } from '@/lib/experience';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const typeColors = {
    achievement: 'bg-cyan/20 border-cyan/50',
    role: 'bg-magenta/20 border-magenta/50',
    project: 'bg-blue/20 border-blue/50',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative pb-12 ${index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan border-2 border-black z-20" />

      {/* Content card */}
      <div
        className={`${
          index % 2 === 0 ? 'mr-1/2 text-right' : 'ml-1/2'
        } backdrop-blur-glass bg-glass-light border border-glass-border p-6 rounded-lg ${typeColors[item.type]}`}
      >
        <div className="text-sm font-semibold text-cyan mb-2">{item.year}</div>
        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{item.organization}</p>
        <p className="text-gray-300 text-sm mb-4">{item.description}</p>

        <ul className="space-y-2">
          {item.impact.map((point, idx) => (
            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-cyan">▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
