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
    title: 'APU Basketball Club - Website & Management System',
    description:
      'A full-stack web application built with JavaScript, CSS, ASP.NET, C#; with MySQL for server-side ops. Features include authentication, real-time updates, and responsive design.',
    technologies: ['JavaScript', 'CSS', 'ASP.NET', 'C#'],
    link: 'https://github.com/smustafaamir/Group9-Project-CT050-3-2-WAPP',
    demoLink: 'https://project-one-demo.com',
    stars: 12,
    featured: true,
  },
  {
    title: 'Localised FHIR-based Web Application',
    description:
      'A localised diagnostics management and interoperability system (still initial stages of development. Using Next.js for interface, and Node.js for custom API development.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/yourusername/project-two',
    demoLink: 'https://project-two-demo.com',
    stars: 8,
    featured: true,
  },
  {
    title: 'Hangman Game (cliche, I know)',
    description:
      'A bare-bones hangman game with a hint-generation module, and a dynamic light/dark/system mode toggle.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://github.com/smustafaamir/JS-Hangman-Game',
    demoLink: 'https://hangman-game-next.vercel.app/',
    stars: 4,
    featured: false,
  },
  {
    title: 'Keras on Tensorflow',
    description:
      'A Jupyter notebook of my basically tinkering around with Keras on Tensorflow with dummy data and generating meaningless outputs.',
    technologies: ['Python', 'Keras', 'TensorFlow'],
    link: 'https://github.com/smustafaamir/Keras-Tensorflow-v1',
    demoLink: 'https://project-four-demo.com',
    stars: 0,
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
            A collection of projects I&#39;ve built and contributed to
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