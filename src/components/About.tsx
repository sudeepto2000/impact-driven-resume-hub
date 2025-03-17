
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

export function About() {
  const certifications = [
    {
      name: "Computer Programming Certification",
      issuer: "George Brown College",
      date: "Expected April 2025"
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2023"
    },
    {
      name: "Google Project Management",
      issuer: "Google",
      date: "2022"
    },
    {
      name: "Working at Heights Certification",
      issuer: "Infrastructure Health & Safety Association",
      date: "2021"
    }
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center">
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage src="/lovable-uploads/80457301-ebf1-4917-b138-a5fe80b54068.png" alt="Sudeepto Hasan" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-xl font-semibold">Sudeepto Hasan</h3>
              <p className="text-muted-foreground">Computer Programmer</p>
              
              <div className="mt-6 w-full">
                <Button className="w-full gap-2" asChild>
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" className="w-full mt-3 gap-2" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    View Cover Letter
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Bio</h3>
                <p className="text-muted-foreground">
                  I am a passionate computer programmer with experience in full-stack development, DevOps, and machine learning. 
                  I enjoy solving complex problems through innovative technology solutions. 
                  My goal is to continuously improve my skills and contribute to impactful projects.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Career Philosophy</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "Technology has the power to transform lives, and I am committed to leveraging my skills to build efficient and user-friendly systems. 
                  My belief in continuous learning and adaptability drives me to explore new innovations and make a positive impact in the industry."
                </blockquote>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Academic Credentials</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="certifications">
                    <AccordionTrigger>Certifications & Education</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {certifications.map((cert, index) => (
                          <div key={index} className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-medium">{cert.name}</h4>
                            <div className="flex justify-between items-center mt-1 text-sm">
                              <span className="text-muted-foreground">{cert.issuer}</span>
                              <Badge variant="outline">{cert.date}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Community Involvement</h3>
                <p className="text-muted-foreground">
                  I've assisted in local IT workshops and networking events, helping community members develop technical skills and improve their digital literacy. 
                  I believe in using technology as a means to empower communities and bridge digital divides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
