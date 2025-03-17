
import React from 'react';
import { Cpu, Terminal } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / React Native", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Machine Learning", level: 70 },
  { name: "DevOps / CI/CD", level: 75 },
  { name: "Database Management", level: 80 },
  { name: "Cloud Services (AWS/Azure)", level: 65 }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <Cpu className="w-6 h-6" />
            </span>
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            As a computer programmer, I've developed proficiency in various technologies and frameworks to build robust, efficient solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Terminal className="text-primary mr-2 h-5 w-5" />
              <h3 className="text-xl font-semibold">Programming & Development</h3>
            </div>
            
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" 
                    style={{
                      transition: 'width 1.5s ease-in-out',
                      animation: 'slideInFromLeft 1.5s ease-out'
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Cpu className="text-primary mr-2 h-5 w-5" />
              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
            </div>
            
            <div className="space-y-6">
              {skills.slice(4).map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" 
                    style={{
                      transition: 'width 1.5s ease-in-out',
                      animation: 'slideInFromLeft 1.5s ease-out'
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 border rounded-xl bg-card">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <p className="font-medium">Computer Programming Certification</p>
              <p className="text-sm text-muted-foreground">George Brown College, April 2025</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <p className="font-medium">CCNA: Introduction to Networks</p>
              <p className="text-sm text-muted-foreground">Cisco</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <p className="font-medium">Google Project Management</p>
              <p className="text-sm text-muted-foreground">Google</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <p className="font-medium">Working at Heights Certification</p>
              <p className="text-sm text-muted-foreground">Certification Board</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
