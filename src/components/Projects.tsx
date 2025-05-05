
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
      ]
    },
    {
      title: 'Laboratory E-commerce Platform',
      description: 'A specialized e-commerce solution for laboratory equipment and supplies with inventory management.',
      stack: ['Next.js', 'GraphQL', 'PostgreSQL', 'Apollo'],
      achievements: [
        'Implemented real-time inventory tracking that reduced stockouts by 30%',
        'Developed a custom recommendation engine based on purchase patterns, increasing average order value by 25%'
      ]
    },
    {
      title: 'Personal Finance Dashboard',
      description: 'An interactive dashboard for tracking personal finances, investments, and budget planning.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      achievements: [
        'Created customizable visualization tools that helped users identify spending patterns',
        'Integrated with multiple banking APIs to provide real-time transaction updates and balance information'
      ]
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
                <button 
                  className="text-portfolio-blue hover:text-portfolio-darkBlue"
                  aria-label={`View ${project.title} demo`}
                >
                  <ExternalLink className="h-5 w-5" />
                </button>
                <button 
                  className="text-portfolio-blue hover:text-portfolio-darkBlue"
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <Github className="h-5 w-5" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
