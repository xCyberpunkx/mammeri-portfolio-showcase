
import React from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, id }) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Layout;
