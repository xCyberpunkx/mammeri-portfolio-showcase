
import React from 'react';
import Layout from './Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'ismailmammeripuse00@gmail.com',
      href: 'mailto:ismailmammeripuse00@gmail.com',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'ismail-devmaster',
      href: 'https://github.com/ismail-devmaster',
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: 'Discord',
      value: 'ismabeast_90601',
      href: '#',
    },
  ];

  return (
    <Layout id="contact" className="bg-portfolio-lightGray">
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold font-heading mb-8 text-portfolio-darkGray">
          Contact Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <p className="text-center text-portfolio-gray mb-6">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactInfo.map((contact, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex justify-start items-center gap-2 h-auto py-4 border-portfolio-blue/20 hover:bg-portfolio-lightBlue/10 hover:border-portfolio-blue"
                    asChild
                  >
                    <a 
                      href={contact.href} 
                      target={contact.href.startsWith('http') ? '_blank' : '_self'} 
                      rel="noreferrer"
                      className="w-full"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-portfolio-blue">
                          {contact.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-portfolio-gray">{contact.label}</div>
                          <div className="text-sm text-portfolio-darkGray font-medium truncate">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
