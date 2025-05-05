
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Layout from './Layout';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout id="home" className="min-h-[90vh] flex flex-col justify-center">
      <div className="animate-fadeIn">
        <h2 className="text-portfolio-blue font-medium tracking-wide mb-2">
          Hello, I'm
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-portfolio-darkGray">
          Ismail Mammeri
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-portfolio-gray mb-6">
          Full-Stack JavaScript Developer
        </h3>
        <p className="text-lg max-w-2xl mb-8 text-portfolio-gray">
          Building modern web applications with JavaScript, React, and Node.js.
          Based in Blida, Algeria.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-6 py-2"
          >
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightBlue/10"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 text-portfolio-blue" />
        </Button>
      </div>
    </Layout>
  );
};

export default Hero;
