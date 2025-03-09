'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
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

export default function Contact() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 py-8 md:py-12 lg:py-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center">
          <span className="rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Something on your mind?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Let&apos;s discuss your project or just say hello
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
            <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="type" className="block text-sm font-medium">
                    Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type of inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General inquiry</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="advisory">Advisory</SelectItem>
                      <SelectItem value="agency">Agency Introduction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px] w-full"
                  />
                </div>
                <Button className="w-full">Send message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Newsletter & Social */}
          <div className="space-y-8">
            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardHeader>
                <CardTitle>Join my Newsletter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Join my newsletter and get infrequent updates on new projects.
                </p>
                <div className="flex gap-4">
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-1"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  I promise not to spam you or sell your email address.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative transition-all duration-300 hover:shadow-xl backdrop-blur-none hover:backdrop-blur-sm bg-background/80 hover:bg-background/50">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20 pointer-events-none"></div>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Social Links</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://github.com/smustafaamir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                    <Link
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Email</h3>
                  <Link
                    href="mailto:s.mustafaamir@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    s.mustafaamir@gmail.com
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 