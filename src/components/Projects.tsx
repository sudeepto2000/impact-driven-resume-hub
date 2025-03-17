
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  type: 'academic' | 'professional';
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Quick Park (Capstone Project)",
      description: "Smart parking management system that optimizes parking space usage, reduces congestion, and improves accessibility through real-time slot tracking and booking.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      technologies: ["React", "Node.js", "IoT", "AI"],
      links: {
        github: "https://github.com/sudeepto2000/quick-park",
      },
      type: "academic"
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model for home price prediction developed for a Kaggle competition.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      links: {
        github: "https://github.com/sudeepto2000/house-price-prediction",
      },
      type: "academic"
    },
    {
      title: "React Native Flooring Cost Calculator",
      description: "Mobile app to calculate flooring costs for different materials and room dimensions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      links: {
        github: "https://github.com/sudeepto2000/flooring-calculator",
      },
      type: "academic"
    },
    {
      title: "Tennis Playability Decision Tree Model",
      description: "AI model for weather-based game decisions using decision tree algorithms.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      technologies: ["Python", "ML", "Decision Trees"],
      links: {
        github: "https://github.com/sudeepto2000/tennis-decision-tree",
      },
      type: "academic"
    },
    {
      title: "Automated Car Wash Kiosk",
      description: "Logic design for automated car wash system with user interface and payment processing.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["UI/UX", "System Design", "Workflow Automation"],
      links: {
        github: "https://github.com/sudeepto2000/car-wash-kiosk",
      },
      type: "academic"
    },
    {
      title: "Biopharma IT Infrastructure",
      description: "Troubleshooting and maintaining IT infrastructure in a pharmaceutical environment.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["IT Support", "Networking", "Hardware Maintenance"],
      links: {},
      type: "professional"
    },
    {
      title: "Carnival Telecommunications",
      description: "Network installation and maintenance for telecommunications company.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Network Installation", "Technical Support", "Cable Management"],
      links: {},
      type: "professional"
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-10 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my academic and professional work showcasing my skills and experience.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Academic Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => project.type === 'academic')
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Professional Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.type === 'professional')
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 h-full w-full" />
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </AspectRatio>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4">
          {project.links?.github && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.links?.live && (
            <Button size="sm" className="gap-2" asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
