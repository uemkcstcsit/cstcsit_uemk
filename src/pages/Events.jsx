import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { Calendar, GraduationCap } from 'lucide-react';

// Sample event data for each year
const eventsData = {
  2022: {
    evenSem: [
      {
        heading: 'Industry Talk',
        date: '01-04-2022',
        mode: ' Online',
        description: 'The Department of CST & CSIT organized a panel discussion on Corporate Success Code for the students where our key speaker was Mr. Shantanu Mukhopadhyay, Senior Financial Analyst, Arcesium.',
      },
      {
        heading: 'Alumni Talk',
        date: '08-04-2022',
        mode: 'Online',
        description: 'An alumni Talk was organized by the Department of CST & CSIT where our notable alumni was Mr.Kushankur Ghosh, Department of Computing Science, University of Alberta Edmonton, Canada who enlightened the session on “A journey: Campus to Research World"',
      },
      {
        heading: 'Poster Competition',
        date: '12-04-2022',
        mode: 'Offline',
        description: 'The Department of CST & CSIT organized a departmental poster competition for the students of CST & CSIT based on the topic “Recent Trends in Technology”.The students showcased their innovative as well as technical mindset and made beautiful posters on various technologies making the event a successful one.',
      },
      {
        heading: 'Faculty Development Program',
        date: '27-06-2022 to 02-06-2022',
        mode: 'Online',
        description: 'A one-week faculty development program was organized in association with the University of Engineering and Management, Kolkata and support from Expert organized by E&ICT & Skill Gym on ‘Mentoring Pedagogy and Classroom Delivery Enhancement Techniques’ for the faculty members of the department.',
      },
    ],
    oddSem: [
      {
        heading: 'Technical Talk',
        date: '03-08-2022',
        mode: 'Online',
        description: 'An online Technical Talk was organised by the department of CST & CSIT on the topic “A Friendly Introduction to Signal and Image Processing” which was conducted by Prof. Dr. Debangshu Dey,Associate Professor from Department of Electrical Engineering of Jadavpur University.',
      },
      {
        heading: 'Virtual Tour',
        date: '26-08-2022',
        mode: 'Online',
        description: 'An exciting virtual tour was organised by the Department of CST & CSIT on “Building Augmented Reality Experiences with Unity3D”.',
      },
      {
        heading: 'Distinguished Lecture',
        date: '07-09-2022',
        mode: 'Online',
        description: 'A Distinguished Lecture on the topic ‘Cluster Analysis in Data Mining:Applications,Methods and Requirements’ was organised by the Department of CST & CSIT where our key speaker was Dr.Sumana Kundu,Associate Professor and Head of the Department of CSE(Data Mining),Haldia Institute of Technology',
      },
      {
        heading: 'Poster Competition',
        date: '09-09-2022',
        mode: 'Offline',
        description: 'The Department of CST & CSIT organized a departmental poster competition for the students of CST & CSIT based on the topic “Recent Trends in Technology”.The students showcased their innovative as well as technical mindset and made beautiful posters on various technologies making the event a successful one.',
      },
      {
        heading: 'Distinguished Lecture',
        date: '15-09-2022',
        mode: 'Online',
        description: 'A Distinguished Lecture on the topic ‘Fundamentals of Machine Learning Techniques and Applications’ was organised by the Department of CST & CSIT where our key speaker was Prof. (Dr.) Ganapati Panda,Ex-Deputy Director,IIT Bhubaneshwar.',
      },
      {
        heading: 'Project Competition',
        date: '17-10-2022',
        mode: 'Offline',
        description: 'The Department of CST & CSIT organized a departmental project competition where the project would be either hardware-based or software-based.The students showcased their tremendous technical and innovative skills as future engineers by building some fantastic projects that impressed the judges. ',
      },
      {
        heading: 'Invited Lecture',
        date: '28-10-2022',
        mode: 'Online',
        description: 'An invited lecture session was organized by the Department of CST & CSIT based on the topic “Build your career as a software developer” where our eminent speaker of the session was Mr.Sagar Patidar,Founder and CEO of Primathon.',
      },
      {
        heading: 'Prize Distribution Ceremony',
        date: '14-11-2022',
        mode: 'Offline',
        description: 'The semester prize distribution ceremony of the department was organized in which the students who were the winners of various departmental events that happened throughout the semester were awarded the prizes by our respected faculty members and Head of the Department,CST & CSIT. ',
      },
    ],
  },
  2023: {
    evenSem: [
      {
        heading: 'Hackathon 2023',
        date: 'February 18-19, 2023',
        mode: 'Offline',
        description: '24-hour hackathon challenging students to build innovative solutions for real-world problems.',
      },
      {
        heading: 'AI/ML Workshop Series',
        date: 'March 25, 2023',
        mode: 'Hybrid',
        description: 'Comprehensive workshop on Artificial Intelligence and Machine Learning fundamentals and applications.',
      },
      {
        heading: 'Annual Tech Fest',
        date: 'April 10-12, 2023',
        mode: 'Offline',
        description: 'Three-day technology festival featuring competitions, exhibitions, and guest lectures.',
      },
    ],
    oddSem: [
      {
        heading: 'Cloud Computing Seminar',
        date: 'September 8, 2023',
        mode: 'Online',
        description: 'Expert seminar on cloud technologies, AWS, Azure, and modern deployment practices.',
      },
      {
        heading: 'Placement Preparation Drive',
        date: 'November 15, 2023',
        mode: 'Offline',
        description: 'Intensive preparation sessions for campus placements including mock interviews and aptitude training.',
      },
    ],
  },
  2024: {
    evenSem: [
      {
        heading: 'Web Development Bootcamp',
        date: 'January 20-22, 2024',
        mode: 'Offline',
        description: 'Three-day intensive bootcamp covering modern web development with React, Node.js, and cloud deployment.',
      },
      {
        heading: 'Research Paper Presentation',
        date: 'February 28, 2024',
        mode: 'Hybrid',
        description: 'Platform for students to present their research work and receive feedback from faculty and industry experts.',
      },
      {
        heading: 'Cybersecurity Workshop',
        date: 'April 5, 2024',
        mode: 'Offline',
        description: 'Hands-on workshop on ethical hacking, network security, and secure coding practices.',
      },
    ],
    oddSem: [
      {
        heading: 'Open Source Contribution Day',
        date: 'August 25, 2024',
        mode: 'Online',
        description: 'Initiative to encourage students to contribute to open source projects with mentorship from experienced developers.',
      },
      {
        heading: 'Data Science Symposium',
        date: 'October 12, 2024',
        mode: 'Hybrid',
        description: 'Symposium featuring talks on data analytics, visualization, and big data technologies.',
      },
      {
        heading: 'Project Showcase 2024',
        date: 'December 8, 2024',
        mode: 'Offline',
        description: 'Annual exhibition showcasing innovative student projects and final year capstone presentations.',
      },
    ],
  },
  2025: {
    evenSem: [
      {
        heading: 'GenAI Innovation Challenge',
        date: 'February 10, 2025',
        mode: 'Hybrid',
        description: 'Competition focused on building applications using Generative AI and Large Language Models.',
      },
      {
        heading: 'Blockchain Technology Workshop',
        date: 'March 18, 2025',
        mode: 'Offline',
        description: 'Comprehensive workshop on blockchain fundamentals, smart contracts, and decentralized applications.',
      },
    ],
    oddSem: [
      {
        heading: 'Coming Soon',
        date: 'TBA',
        mode: 'TBA',
        description: 'Stay tuned for exciting events in the odd semester of 2025. More details will be announced soon.',
      },
    ],
  },
};

const Events = () => {
  const { year } = useParams();
  const yearNum = parseInt(year);
  const yearData = eventsData[yearNum];

  if (!yearData) {
    return (
      <PageLayout>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Events for {year}
            </h1>
            <p className="text-muted-foreground">No events found for this year.</p>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title={`Events ${year}`}
            subtitle="Explore the academic and co-curricular events organized by the department"
          />

          

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Even Semester */}
            <div>
              <GlassCard className="mb-6" padding="p-4 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      Even Semester
                    </h2>
                    <p className="text-muted-foreground text-sm">January - June {year}</p>
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-6 pl-0 lg:pl-4">
                {yearData.evenSem.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>

            {/* Odd Semester */}
            <div>
              <GlassCard className="mb-6" padding="p-4 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/30 border border-secondary/40 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      Odd Semester
                    </h2>
                    <p className="text-muted-foreground text-sm">July - December {year}</p>
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-6 pl-0 lg:pl-4">
                {yearData.oddSem.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
