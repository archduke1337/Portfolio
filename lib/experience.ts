export interface ExperienceItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  type: 'achievement' | 'role' | 'project';
}

export const experience: ExperienceItem[] = [
  {
    year: '2025',
    title: 'Head of Technical Operations',
    organization: 'Mind Mesh Club, ADYPU',
    description: 'Leading technical strategy and execution for the largest tech community on campus. Managing infrastructure, workshops, and hackathons for 500+ members.',
    impact: [
      'Organized 3 major hackathons with 200+ participants each',
      'Mentoring 50+ junior developers on full-stack development',
      'Built internal automation tools saving 20hrs/week',
    ],
    type: 'role',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon 2025 External Qualifier',
    organization: 'Team Lead - EcoQuest',
    description: 'Qualified for national hackathon as first-year student. Built AI-powered sustainability platform in 48 hours competing against 5000+ teams.',
    impact: [
      'Ranked in top 5% of 5000+ participating teams',
      'Built complete MVP in 48 hours with zero downtime',
      'Attracted interest from 3 major investors',
    ],
    type: 'achievement',
  },
  {
    year: '2025',
    title: 'Founder & CEO',
    organization: 'Zocav Digital Solutions',
    description: 'Building India\'s next web3-first digital agency. Currently serving 5 live clients with $50k pipeline. Focus on secure, scalable, beautiful systems.',
    impact: [
      'Landed first client in 2 weeks of launch',
      'Scaling from 2 to 8 person team',
      'Achieving 92% client retention rate',
    ],
    type: 'project',
  },
  {
    year: '2024-2025',
    title: 'Freelance Full-Stack Developer',
    organization: 'Independent',
    description: 'Building production systems for startups and agencies. Specializing in Next.js, blockchain, and real-time systems. Earning ₹2L+/month.',
    impact: [
      'Completed 15+ projects for 12 unique clients',
      'Average project delivery: 2 weeks ahead of schedule',
      'Maintained 98% client satisfaction score',
    ],
    type: 'role',
  },
  {
    year: '2023',
    title: 'Started Coding',
    organization: 'Self-Taught Journey Begins',
    description: 'At 17, hacked my way into cybersecurity through curiosity. Built first web app in 3 months. Haven\'t looked back since.',
    impact: [
      'Learned full-stack development in 6 months',
      'Built 5 production apps within year',
      'Placed in top 50 of first hackathon',
    ],
    type: 'achievement',
  },
];

export const getTimelineByYear = (year: string) => experience.filter((e) => e.year.includes(year));
export const getExperienceByType = (type: ExperienceItem['type']) => experience.filter((e) => e.type === type);
