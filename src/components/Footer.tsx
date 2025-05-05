
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-portfolio-gray">
          © {currentYear} Ismail Mammeri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
