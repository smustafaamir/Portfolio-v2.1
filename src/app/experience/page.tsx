'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Building2, Trophy } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Labs',
    period: 'Jan 2022 - Present',
    description: 'Leading development of enterprise-scale web applications and mentoring junior developers.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    achievements: [
      'Architected and implemented a microservices-based platform that improved system scalability by 200%',
      'Led a team of 5 developers in delivering critical features ahead of schedule',
      'Reduced API response times by 60% through optimization and caching strategies'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc.',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained multiple client-facing web applications.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
    achievements: [
      'Implemented automated testing that reduced bug reports by 40%',
      'Developed a custom CMS that improved content management efficiency by 50%',
      'Successfully migrated legacy systems to modern tech stack'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebCraft Studios',
    period: 'Jun 2018 - Feb 2020',
    description: 'Focused on creating responsive and accessible web interfaces.',
    technologies: ['React', 'JavaScript', 'SASS', 'Redux', 'Jest'],
    achievements: [
      'Improved website performance scores by 30%',
      'Implemented accessibility features that achieved WCAG 2.1 compliance',
      'Created reusable component library used across multiple projects'
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    period: 'Jan 2017 - May 2018',
    description: 'Contributed to various web development projects and learned modern development practices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    achievements: [
      'Developed and launched 5+ client websites',
      'Reduced page load times by 25% through optimization techniques',
      'Implemented responsive design principles across all projects'
    ]
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center">
          <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
            Experience
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Professional Journey
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Building and scaling web applications across different domains
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={fadeIn} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-[4.5rem] bottom-0 w-px bg-border group-hover:bg-primary/50" />
              )}

              <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
                <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
                <CardHeader>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                      <span className="font-semibold">{exp.company}</span>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{exp.description}</p>

                  {/* Technologies */}
                  <div>
                    <h3 className="mb-3 font-semibold">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="transition-colors hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="mb-3 font-semibold flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h3>
                    <ul className="grid gap-3 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 