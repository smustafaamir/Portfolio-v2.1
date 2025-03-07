'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

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

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div 
          variants={fadeIn}
          className="text-center"
        >
          <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
            About Me
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Front-end Engineer & Product Architect
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafting digital experiences with code and creativity
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Photo Section */}
          <motion.div 
            variants={fadeIn}
            className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1"
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/DSC00016.jpg"
                alt="Mustafa Amir"
                fill
                className="object-cover object-[center_20%] transition-transform hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Philosophy Grid */}
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, efficient, and scalable solutions
                </p>
              </CardContent>
            </Card>

            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">
                  Tackling complex challenges with innovative solutions
                </p>
              </CardContent>
            </Card>

            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Staying ahead with cutting-edge technologies
                </p>
              </CardContent>
            </Card>

            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Building together with teams and communities
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Background Section */}
          <motion.div 
            variants={fadeIn}
            className="md:col-span-2"
          >
            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    With over 5 years in software development, I specialize in building modern web applications
                    that combine excellent user experience with robust architecture. My approach is deeply rooted
                    in first principles thinking and continuous learning.
                  </p>
                  <p className="text-muted-foreground">
                    I've had the privilege of working with diverse teams across various industries, from early-stage
                    startups to established enterprises. This experience has taught me the importance of adaptability,
                    clear communication, and pragmatic problem-solving.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Areas of Focus</h3>
                  <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Full-stack Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      System Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      UI/UX Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 