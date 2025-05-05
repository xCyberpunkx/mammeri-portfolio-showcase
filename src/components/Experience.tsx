
import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'P.I Design',
      period: 'February 2024 - April 2025',
      type: 'Internship',
      responsibilities: [
        'Built and maintained the company website using React and Node.js',
        'Developed internal software tools to streamline business operations',
        'Collaborated with the design team to implement responsive UI components',
        'Optimized database queries resulting in 30% faster page load times'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2022 - 2025',
      type: 'Contract/Personal Projects',
      responsibilities: [
        'Designed and developed custom websites for small businesses and startups',
        'Created a booking system for a local service provider that increased appointments by 45%',
        'Built and deployed several e-commerce solutions for clients across different industries'
      ]
    }
  ];

  return (
    <Layout id="experience">
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold font-heading mb-8 text-portfolio-darkGray">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-l-4 border-l-portfolio-blue">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-portfolio-darkGray flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-portfolio-blue" />
                      {experience.title} at {experience.company}
                    </CardTitle>
                    <CardDescription className="text-portfolio-gray mt-1">
                      {experience.period} • {experience.type}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 pl-6 list-disc text-portfolio-gray">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
