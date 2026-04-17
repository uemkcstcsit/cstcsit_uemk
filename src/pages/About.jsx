import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { Calendar, Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const missionPoints = [
    'Creating conditions for dynamic learning.',
    'Strengthening technical knowledge for the benefit of society.',
    'Enabling a research-oriented curriculum.',
    'Promoting connections between industry and academia.',
    'Inculcating entrepreneurship abilities.',
  ];

  const studentOutcomes = [
    'an ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics',
    'an ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors',
    'an ability to communicate effectively with a range of audiences',
    'an ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts',
    'an ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives',
    'an ability to develop and conduct appropriate experimentation, analyse and interpret data, and use engineering judgment to draw conclusions',
    'an ability to acquire and apply new knowledge as needed, using appropriate learning strategies.',
  ];

  const sections = [
    {
      icon: Calendar,
      title: 'Established in 2021',
      content: (
        <p className="text-muted-foreground leading-relaxed">
          The Computer Science Technology and Computer Science Information Technology Engineering programme at UEMK is a unique blend of hardware and software, allowing students to gain knowledge about the concepts that enable many of today’s fundamental technologies, including artificial intelligence & machine Learning, Wireless Communication and the Internet of Things. The Department introduces fundamental concepts of Computer Science & Information Technology and imparts knowledge dealing with logical reasoning, problem-solving, data representation, abstraction etc. The initial level courses provide students with a core foundation in programming, mathematical reasoning, physics, and circuit design. The latter part blends fundamentals in computer technologies including software engineering, database management system, computer networks, operating systems, and computer architecture with fundamentals in electrical and electronics engineering. Currently, the Department runs a four-year B. Tech in Computer Science Technology(CST) and Computer Science & Information Technology (CSIT) courses to prepare students with a firm foundation of both the theory and practice of Computer Science and Information technology through a comprehensive undergraduate program and to strengthen creativity, nurture innovation and develop the ability to carry out research and solve real-world problems.
        </p>
      ),
    },
    {
      icon: Target,
      title: 'Mission',
      content: (
        <ul className="space-y-3">
          {missionPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Eye,
      title: 'Vision',
      content: (
        <p className="text-muted-foreground leading-relaxed">
          To generate knowledge,propagate and convert it in science,engineering and the related disciplines to serve the society in the best possible manner.
        </p>
      ),
    },
    {
      icon: Award,
      title: 'Student Outcomes',
      content: (
        <ul className="space-y-3">
          {studentOutcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent text-xs font-medium">
                {index + 1}
              </span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="About the Department"
            
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <GlassCard 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl lg:text-2xl font-serif font-semibold text-foreground">
                        {section.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-accent/50 rounded-full" />
                      {section.content}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
