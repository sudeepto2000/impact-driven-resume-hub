
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
          <div className="flex-1 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Computer Programmer
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight">
              Hello, I'm <span className="text-primary">Sudeepto Hasan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              A passionate computer programmer with experience in full-stack development, DevOps, and machine learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="rounded-full" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="rounded-full" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-slide-in-from-right overflow-hidden" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/lovable-uploads/80457301-ebf1-4917-b138-a5fe80b54068.png"
                alt="Sudeepto Hasan"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </a>
    </section>
  );
}
