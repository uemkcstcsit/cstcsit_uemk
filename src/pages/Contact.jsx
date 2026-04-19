import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: (
        <>
          +91 9804244362 <br />
        </>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'cst.csit@uem.edu.in',
      href: 'mailto:cst.csit@uem.edu.in',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: (
        <>
          Institute of Engineering and Management <br />
          New Town, Kolkata
        </>
      ),
      href: 'https://www.google.com/maps/search/Institute+of+Engineering+and+Management+New+Town+Kolkata',
    },
  ];

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with the Department of CST, CSIT, CSE(CS) & CSE(NW)"
          />

          <div className="max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                const Content = (
                  <GlassCard className="text-center h-full">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-accent font-medium">
                      {info.value}
                    </p>
                  </GlassCard>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-[1.02] transition-transform"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={index}>{Content}</div>
                );
              })}
            </div>

            {/* Map Section */}
            <GlassCard className="overflow-hidden" hover={false}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Directions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Campus Directions
                  </h3>

                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>University of Engineering and Management, Kolkata</li>
                    <li>New Town, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, New Town, West Bengal 743502</li>
      
                  </ul>

                  <a
                    href="https://maps.app.goo.gl/Sz6eUrtGzQawojjRA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-lg text-accent text-sm font-medium"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Google Map */}
                <div className="h-[300px] lg:h-full min-h-[350px] rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5126958615815!2d88.4873264753001!3d22.559920179500736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1770057988246!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="UEM Kolkata Location Map"
                    className="w-full h-full transition-transform duration-300 hover:scale-[1.01]"
                  />
                </div>

              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
