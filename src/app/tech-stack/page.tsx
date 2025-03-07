'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Wrench,
  Boxes,
  Database,
  GitBranch,
  Container,
  Cloud,
  Workflow,
  Layout,
  Network,
  Terminal,
  DatabaseIcon,
  Sparkles,
} from 'lucide-react';

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

const techCategories = [
  {
    title: 'Frontend',
    description: 'Technologies I use for building user interfaces',
    technologies: [
      { name: 'React', level: 'Advanced', icon: Layout, description: 'Building interactive UIs with modern React patterns' },
      { name: 'Next.js', level: 'Advanced', icon: Network, description: 'Full-stack framework for production-grade applications' },
      { name: 'TypeScript', level: 'Intermediate', icon: Code2, description: 'Adding type safety to JavaScript development' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: Boxes, description: 'Utility-first CSS framework for rapid UI development' },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side technologies and databases',
    technologies: [
      { name: 'Node.js', level: 'Advanced', icon: Terminal, description: 'JavaScript runtime for scalable server applications' },
      { name: 'Express', level: 'Advanced', icon: Server, description: 'Web framework for building APIs and server applications' },
      { name: 'MongoDB', level: 'Intermediate', icon: Database, description: 'NoSQL database for flexible data storage' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: DatabaseIcon, description: 'Relational database for structured data' },
    ],
  },
  {
    title: 'Tools & Others',
    description: 'Development tools and cloud services',
    technologies: [
      { name: 'Git', level: 'Advanced', icon: GitBranch, description: 'Version control and collaboration' },
      { name: 'Docker', level: 'Intermediate', icon: Container, description: 'Containerization for consistent deployments' },
      { name: 'AWS', level: 'Intermediate', icon: Cloud, description: 'Cloud services and infrastructure' },
      { name: 'CI/CD', level: 'Intermediate', icon: Workflow, description: 'Automated development workflows' },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header Section */}
        <motion.section variants={fadeIn} className="text-center">
          <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
            Tech Stack
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Technologies & Tools
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.section>

        {/* Tech Categories Grid */}
        <motion.section variants={fadeIn} className="grid gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground">{category.description}</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {category.technologies.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <Card
                      key={techIndex}
                      className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50"
                    >
                      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                {tech.level}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
} 