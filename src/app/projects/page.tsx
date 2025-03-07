'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Globe, Star } from 'lucide-react';
import Link from 'next/link';

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

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  demoLink: string;
  stars: number;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built with Next.js, TypeScript, and Tailwind CSS. Features include authentication, real-time updates, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://github.com/yourusername/project-one',
    demoLink: 'https://project-one-demo.com',
    stars: 128,
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'A mobile-first e-commerce platform with features like product filtering, cart management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/yourusername/project-two',
    demoLink: 'https://project-two-demo.com',
    stars: 89,
    featured: true,
  },
  {
    title: 'Project Three',
    description:
      'A real-time collaboration tool for teams, featuring document editing, chat, and task management.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    link: 'https://github.com/yourusername/project-three',
    demoLink: 'https://project-three-demo.com',
    stars: 45,
    featured: false,
  },
  {
    title: 'Project Four',
    description:
      'An AI-powered analytics dashboard for business intelligence and data visualization.',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
    link: 'https://github.com/yourusername/project-four',
    demoLink: 'https://project-four-demo.com',
    stars: 67,
    featured: false,
  },
];

export default function Projects() {
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
            Projects
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Featured Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of projects I've built and contributed to
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section variants={fadeIn} className="space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`group ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Globe className="mr-2 h-4 w-4" />
                            Live Demo
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section variants={fadeIn} className="space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group"
              >
                <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Globe className="mr-2 h-4 w-4" />
                            Live Demo
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
} 