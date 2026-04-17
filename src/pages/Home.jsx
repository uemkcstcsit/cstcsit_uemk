import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import { User, Quote } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import hodImg from '../assets/HOD.png';



const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground leading-tight">
              Department of{' '} <br />
              <span className="text-gradient">CST, CSIT, CSE(CS)</span> <br />
              {' '}&{' '} <br />
              <span className="text-gradient">CSE(NW)</span>
              
            </h1>
            
        
            
            <div className="pt-4 space-y-2">
              <p className="text-xl lg:text-2xl text-foreground/90 font-medium">
                Institute of Engineering and Management, New Town
              </p>
              <p className="text-lg text-muted-foreground">
                University of Engineering and Management, Kolkata
              </p>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-4">
              
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-accent/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* HOD Message Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-5xl mx-auto overflow-hidden" hover={false}>
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* HOD Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden bg-primary/50 border-2 border-accent/20">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-accent/20">
                      <img
                        src={hodImg}
                        alt="HOD - CST & CSIT"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-background/10" />
                    </div>

                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-xl font-serif font-semibold text-foreground">Prof. Dr. Maumita Chakraborty</h3>
                  <p className="text-accent text-sm">Professor and HOD</p>
                  <p className="text-muted-foreground text-xs mt-1">Department of CST & CSIT</p>
                  <p className="text-muted-foreground text-xs mt-1">UEM, Kolkata</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">A Message From</span>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2">
                    Head of The Department
                  </h2>
                  <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It is a great pleasure to welcome you to the Department of CST, CSIT, CSE(CS) & CSE(NW). The department has experienced and well-qualified faculty members, well-equipped laboratories, research facilities and all other facilities to nurture the development of young engineers. To inculcate excellent problem solving skills, the department always focuses on outcome based education, through outcome based teaching and learning process. A large number of students pursue their projects in various departmental laboratories which provides them strong hands-on learning experience. The department is continuously growing since its establishment with the motto of preparing the students to excel in the industry and to be successful in higher studies. Innovation and research activities including conference, seminars, and technical talks prepare the students to excel in their career. In addition, continuous support and untiring efforts of the Training and placement cell helps students to build a successful career in future. Apart from studies, the department constantly motivates the students to participate in various co-curricular activities like hands-on workshops, technical talks, seminars, technical competitions, start-up activities, etc.
                  </p>
                  
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-accent/70 font-serif italic">"Excellence in Innovation"</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      
    </PageLayout>
  );
};

export default Home;
