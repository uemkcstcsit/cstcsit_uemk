import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { Users } from 'lucide-react';

// Sample faculty data
const facultyData = [
  {
    name: 'Dr. Faculty Name',
    designation: 'Professor',
  },
  {
    name: 'Dr. Faculty Name',
    designation: 'Associate Professor',
  },
  {
    name: 'Dr. Faculty Name',
    designation: 'Assistant Professor',
  },
  {
    name: 'Dr. Faculty Name',
    designation: 'Assistant Professor',
  },
  {
    name: 'Dr. Faculty Name',
    designation: 'Associate Professor',
  },
  {
    name: 'Dr. Faculty Name',
    designation: 'Professor',
  },
];

const Faculty = () => {
  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Faculty Members"
            subtitle="Meet the dedicated faculty members of the department"
          />

          {/* Icon Header (kept same visual vibe) */}
          <div className="flex justify-center mb-12">
            <GlassCard padding="p-4 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Our Faculty
                </h2>
              </div>
            </GlassCard>
          </div>

          {/* 2 Column Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyData.map((faculty, index) => (
              <GlassCard
                key={index}
                padding="p-6"
                className="transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {faculty.name}
                </h3>
                <p className="text-muted-foreground">
                  {faculty.designation}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Faculty;
