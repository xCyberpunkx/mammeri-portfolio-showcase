import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Dental Clinic Management System',
      description: 'A comprehensive management solution for dental clinics to streamline patient records, appointments, and billing.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      achievements: [
        'Reduced appointment scheduling time by 40% through an intuitive calendar interface',
        'Improved record-keeping efficiency by implementing searchable digital patient records with customizable templates'
      ],
      demoLink: 'https://ramdani.vercel.app/'
    },
     
    {
      title: 'Laboratory E-commerce Platform',
      description: 'A professional website for a laboratory specializing in medical analysis.',
      stack: ['PHP', 'WordPress'],
      achievements: [
        'Developed a user-friendly interface for booking appointments online',
        'Optimized website performance and ensured cross-browser compatibility'
      ],
      demoLink: 'https://ideallabo.dz/'
    }
  ];

  return (
    <Layout id="projects" className="bg-portfolio-lightGray">
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold font-heading mb-8 text-portfolio-darkGray">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-darkGray">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="border-portfolio-blue text-portfolio-blue"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <p key={achievementIndex} className="text-sm text-portfolio-gray">
                      • {achievement}
                    </p>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-blue hover:text-portfolio-darkBlue"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-blue hover:text-portfolio-darkBlue"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
