'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Github, Mail, Twitter, ArrowRight, Code2, Layout, Server } from 'lucide-react';
import { GitHubActivity } from '@/components/GitHubActivity';

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

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-8 py-8 md:py-12 lg:py-24"
      >
        {/* Hero Section */}
        <motion.section variants={fadeIn} className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="flex items-center gap-2 rounded-full border bg-background/50 px-4 py-1 text-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Available for freelance work
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mustafa Amir
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A passionate developer crafting beautiful and functional web experiences.
            Specialized in modern web technologies and user-centric design.
          </p>
          <motion.div 
            variants={fadeIn}
            className="flex items-center gap-4 py-4"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/smustafaamir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section variants={fadeIn} className="grid gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
              Services
            </span>
            <h2 className="text-2xl font-bold">What I Do</h2>
            <p className="text-muted-foreground">
              Comprehensive web development solutions for your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/25">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Crafting responsive and interactive user interfaces with modern frameworks and best practices.
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/25">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Backend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable and efficient server-side solutions with robust architectures.
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/25">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating intuitive and beautiful user experiences with a focus on accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Projects Preview Section */}
        <motion.section variants={fadeIn} className="grid gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
              Projects
            </span>
            <h2 className="text-2xl font-bold">Latest Work</h2>
            <p className="text-muted-foreground">
              Check out some of my recent work and personal projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Featured Project</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  A showcase of my best work and technical expertise.
                </p>
                <Link href="/projects">
                  <Button variant="outline" className="group">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Explore the technologies and tools I work with.
                </p>
                <Link href="/tech-stack">
                  <Button variant="outline" className="group">
                    View Full Stack
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* GitHub Activity Section */}
        <motion.section variants={fadeIn} className="grid gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
              Activity
            </span>
            <h2 className="text-2xl font-bold">GitHub Activity</h2>
            <p className="text-muted-foreground">
              My latest contributions and activity on GitHub
            </p>
          </div>
          <GitHubActivity />
        </motion.section>
      </motion.div>
    </div>
  );
}
