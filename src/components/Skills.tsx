
import React from 'react';
import Layout from './Layout';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git/GitHub', 'VS Code', 'Responsive Design', 'Web Performance'],
    },
  ];

  return (
    <Layout id="skills">
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold font-heading mb-8 text-portfolio-darkGray">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-darkGray">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-portfolio-lightBlue/20 text-portfolio-darkBlue hover:bg-portfolio-lightBlue/30 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
