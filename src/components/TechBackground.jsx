import React from 'react';

const TechBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Animated tech shapes */}
      <div className="absolute inset-0">
        {/* Circuit-like lines */}
        <svg className="absolute w-full h-full opacity-20">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 30 50 L 40 30 L 60 30 L 70 50 L 100 50" stroke="hsl(207, 21%, 58%)" strokeWidth="0.5" fill="none" />
              <path d="M 50 0 L 50 30 L 70 40 L 70 60 L 50 70 L 50 100" stroke="hsl(208, 28%, 58%)" strokeWidth="0.5" fill="none" />
              <circle cx="40" cy="30" r="2" fill="hsl(42, 90%, 73%)" />
              <circle cx="70" cy="50" r="2" fill="hsl(42, 77%, 69%)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/15 rounded-lg animate-float rotate-12 opacity-40" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/40 rounded-full animate-float-delayed opacity-50" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-primary/15 rotate-45 animate-float opacity-35" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-accent/30 rounded-lg animate-pulse-slow opacity-40" />
        
        {/* Hexagon pattern */}
        <div className="absolute top-1/4 left-1/3 animate-spin-slow opacity-25">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <polygon 
              points="50,5 90,25 90,75 50,95 10,75 10,25" 
              fill="none" 
              stroke="hsl(213 30% 40%)" 
              strokeWidth="1"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 animate-reverse-spin opacity-20">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <polygon 
              points="50,5 90,25 90,75 50,95 10,75 10,25" 
              fill="none" 
              stroke="hsl(43 55% 45%)" 
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Dots grid */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Binary-like floating elements */}
        <div className="absolute top-20 right-10 text-primary/20 text-xs font-mono animate-float">
          01101001
        </div>
        <div className="absolute bottom-32 left-20 text-primary/20 text-xs font-mono animate-float-delayed">
          10110010
        </div>
        <div className="absolute top-1/2 left-10 text-accent/30 text-xs font-mono animate-float">
          {"</>"}
        </div>
      </div>
    </div>
  );
};

export default TechBackground;
