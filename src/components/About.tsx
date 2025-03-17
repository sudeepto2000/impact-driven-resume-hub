
import React from 'react';
import { Code, GraduationCap, Code2, Settings, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Full-Stack Development",
    description: "Building responsive web applications with modern frameworks and technologies."
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Machine Learning",
    description: "Creating intelligent systems that learn and adapt from data."
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "DevOps",
    description: "Implementing infrastructure automation and continuous integration workflows."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                <Code className="w-6 h-6" />
              </span>
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground">
              I am a passionate computer programmer with experience in full-stack development, DevOps, and machine learning. I enjoy solving complex problems through innovative technology solutions. My goal is to continuously improve my skills and contribute to impactful projects.
            </p>
            
            <div className="bg-card border p-6 rounded-xl">
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Career Philosophy
              </h3>
              <blockquote className="pl-4 border-l-4 border-primary italic">
                "Technology has the power to transform lives, and I am committed to leveraging my skills to build efficient and user-friendly systems. My belief in continuous learning and adaptability drives me to explore new innovations and make a positive impact in the industry."
              </blockquote>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border group hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent p-3 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{service.title}</h4>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
