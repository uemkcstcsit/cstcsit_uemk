import React from 'react';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6 lg:p-8'
}) => {
  return (
    <div 
      className={`
        glass-card 
        ${padding}
        ${hover ? 'hover-glow transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
