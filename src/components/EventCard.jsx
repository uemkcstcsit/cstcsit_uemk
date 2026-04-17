import React from 'react';
import { Calendar, MapPin, FileText } from 'lucide-react';
import GlassCard from './GlassCard';

const EventCard = ({ 
  heading, 
  date, 
  mode, 
  description, 
  imageUrl 
}) => {
  return (
    <GlassCard className="overflow-hidden group">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-48 h-48 lg:h-auto flex-shrink-0 rounded-lg overflow-hidden bg-primary/30">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={heading}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <FileText className="w-12 h-12 opacity-50" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {heading}
          </h3>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="capitalize">{mode}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          <button className="glass-button px-4 py-2 rounded-lg text-sm text-accent font-medium">
            Learn More
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default EventCard;
