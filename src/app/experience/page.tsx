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
    title: 'React & Spring Boot Developer - Intern',
    company: 'Continental Malaysia',
    period: 'May 2025 - Sep 2025',
    description: 'Developing POC for a material specification system.',
    technologies: ['React', 'Spring Boot', 'TypeScript'],
    achievements: [
      'Yet to start',
    ]
  },
  {
    title: 'Software and Product Lead',
    company: 'Katalog',
    period: 'Nov 2022 - Dec 2023',
    description: 'Co-founded an alternative marketing and analytics technology start-up with a team of 4 high school friends.',
    technologies: ['React Native', 'Node.js', 'AWS Lambda', 'Amplify', 'Strapi'],
    achievements: [
      'Developed and scaled our full-stack cross-platform application using React Native, MongoDB (Atlas) and Docker',
      'Used Node.js to develop custom APIs, in-addition to using the OpenAI API for real-time generative recommendations',
      'Used AWS Lambda for event-driven server-less management'
    ]
  },
  {
    title: 'Freelance Product Marketing Consultant',
    company: 'Self-employed (freelance)',
    period: 'Mar 2020 - Jul 2023',
    description: 'Provided consulting services to SMEs and niche/fringe market companies.',
    technologies: ['R', 'PowerBI', 'Google Analytics', 'Google Trends', 'Semrush'],
    achievements: [
      'Scaled a SaaS product\'s organic traffic by 80% with a revised content marketing and product positioning strategy based on age',
      'Developed an e-commerce strategy for a Shopify-based store to raise new customer revenue by 16%',
      'Helped redesign a client\'s landing-page with in-house marcomm team to unlock over 5-6x organic traffic growth'
    ]
  },
  {
    title: 'Design Lead',
    company: 'Pertubuhan Keprihatinan Pendidikan Malaysia',
    period: 'Apr 2021 - Jul 2021',
    description: 'Contributed to eliminating technology disparity amongst B40 families.',
    technologies: ['Photoshop', 'Illustrator', 'Canva'],
    achievements: [
      'Created custom .PSD and .AI templates that were implemented across a socmed footprint of 5000+ followers',
      'Boosted engagement by 181% compared to previous metrics',
      'Spearheaded a team of 4 designers as part of a larger collaborative'
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