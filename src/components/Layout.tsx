import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </HelmetProvider>
  );
};

export default Layout;