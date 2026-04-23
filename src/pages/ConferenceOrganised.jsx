import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { Users } from 'lucide-react';

// Sample Conference data
const conferenceData = [
  {
    name: 'Conference Title 1',
    designation: 'Date and Location',
  },
  {
    name: 'Conference Title 2',
    designation: 'Date and Location',
  },
  {
    name: 'Conference Title 3',
    designation: 'Date and Location',
  },
  {
    name: 'Conference Title 4',
    designation: 'Date and Location',
  },
  {
    name: 'Conference Title 5',
    designation: 'Date and Location',
  },
  {
    name: 'Conference Title 6',
    designation: 'Date and Location',
  },
];

const ConferenceOrganised = () => {
  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Conference Organised"
            subtitle="Details about conferences organized by the department"
          />

          {/* Icon Header (kept same visual vibe) */}
          <div className="flex justify-center mb-12">
            <GlassCard padding="p-4 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Our Conferences
                </h2>
              </div>
            </GlassCard>
          </div>

          {/* 2 Column Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferenceData.map((conference, index) => (
              <GlassCard
                key={index}
                padding="p-6"
                className="transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {conference.name}
                </h3>
                <p className="text-muted-foreground">
                  {conference.designation}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConferenceOrganised;