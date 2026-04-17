import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TechBackground from './TechBackground';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <TechBackground />
      <Navbar />
      <main className="flex-1 pt-20 lg:pt-24 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
