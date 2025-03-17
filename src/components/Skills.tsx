
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "Java", proficiency: 75 },
        { name: "C#", proficiency: 70 },
        { name: "SQL", proficiency: 80 }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React/React Native", proficiency: 85 },
        { name: "HTML5/CSS3", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 80 },
        { name: "Angular", proficiency: 65 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "Django", proficiency: 70 },
        { name: "ASP.NET Core", proficiency: 65 }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "AWS", proficiency: 70 },
        { name: "CI/CD", proficiency: 65 }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "TensorFlow/Keras", proficiency: 70 },
        { name: "scikit-learn", proficiency: 75 },
        { name: "Data Analytics", proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-10 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of technical skills throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Badge className="mr-2">{category.category}</Badge>
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
