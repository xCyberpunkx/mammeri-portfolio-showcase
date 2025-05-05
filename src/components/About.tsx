
import React from 'react';
import Layout from './Layout';
import { MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <Layout id="about" className="bg-portfolio-lightGray">
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold font-heading mb-8 text-portfolio-darkGray">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="text-lg mb-6 text-portfolio-gray">
              I'm a passionate Full-Stack JavaScript Developer with expertise in building modern web applications. 
              My journey in web development began with a curiosity for creating interactive digital experiences, 
              and has evolved into a career focused on delivering efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg text-portfolio-gray">
              I enjoy tackling complex problems and transforming ideas into functional applications. 
              Whether it's developing responsive front-end interfaces or designing robust back-end systems, 
              I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <MapPin className="text-portfolio-blue mr-2 h-5 w-5" />
              <span className="text-portfolio-gray">Blida, Algeria</span>
            </div>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-portfolio-blue mr-2 h-5 w-5" />
              <span className="text-portfolio-gray">Higher Technician Diploma in Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
