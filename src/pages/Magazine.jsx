import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { BookOpen, Award, Users, Lightbulb, Calendar } from 'lucide-react';

// Magazine data with articles for each edition
const magazineData = {
  1: {
    title: 'Edition 1',
    year: '2023',
    month: 'March',
    description: 'Our inaugural department magazine featuring student achievements and faculty highlights from the academic year 2022-23.',
    articles: [
      {
        icon: Award,
        title: 'Student Achievements',
        excerpt: 'Celebrating our outstanding students who have excelled in academics, competitions, and research initiatives throughout the year.',
        category: 'Spotlight'
      },
      {
        icon: Users,
        title: 'Faculty Insights',
        excerpt: 'Distinguished faculty members share their research work, teaching methodologies, and contributions to the field of computer science.',
        category: 'Feature'
      },
      {
        icon: Lightbulb,
        title: 'Innovation in Tech',
        excerpt: 'Exploring cutting-edge technologies and innovative projects developed by our department and students.',
        category: 'Technology'
      },
      {
        icon: BookOpen,
        title: 'Department Chronicles',
        excerpt: 'Key events and milestones that defined our department during the academic year 2022-23.',
        category: 'Events'
      },
    ]
  },
  2: {
    title: 'Edition 2',
    year: '2024',
    month: 'September',
    description: 'Second edition showcasing expanded coverage including research projects, hackathons, and technical excellence.',
    articles: [
      {
        icon: Lightbulb,
        title: 'Research Excellence',
        excerpt: 'In-depth coverage of groundbreaking research projects and publications from our faculty and research scholars.',
        category: 'Research'
      },
      {
        icon: Award,
        title: 'Hackathon Winners',
        excerpt: 'Highlighting the innovative solutions and talented teams that won our annual 24-hour hackathon event.',
        category: 'Competition'
      },
      {
        icon: Users,
        title: 'Alumni Success Stories',
        excerpt: 'Stories of our successful alumni making an impact in leading tech companies and startups worldwide.',
        category: 'Alumni'
      },
      {
        icon: BookOpen,
        title: 'Technical Articles',
        excerpt: 'Peer-reviewed technical articles written by students and faculty on emerging technologies and methodologies.',
        category: 'Academic'
      },
    ]
  },
  3: {
    title: 'Edition 3',
    year: '2025',
    month: 'January',
    description: 'Latest edition showcasing innovation, internships, and industry collaborations driving our department forward.',
    articles: [
      {
        icon: Users,
        title: 'Industry Partnerships',
        excerpt: 'Collaborations with leading tech companies providing internships, mentorship, and career opportunities for our students.',
        category: 'Industry'
      },
      {
        icon: Award,
        title: 'Internship Highlights',
        excerpt: 'Success stories from students who completed valuable internships at top-tier companies and startups.',
        category: 'Internship'
      },
      {
        icon: Lightbulb,
        title: 'Startup Ecosystem',
        excerpt: 'Innovative startups incubated within our department and success journeys of our student entrepreneurs.',
        category: 'Entrepreneurship'
      },
      {
        icon: BookOpen,
        title: 'Looking Forward',
        excerpt: 'Vision and strategic initiatives for the future growth and development of CST & CSIT Department.',
        category: 'Vision'
      },
    ]
  }
};

const ArticleCard = ({ icon: Icon, title, excerpt, category }) => (
  <GlassCard>
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{excerpt}</p>
          </div>
          <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent whitespace-nowrap">
            {category}
          </span>
        </div>
      </div>
    </div>
  </GlassCard>
);

const Magazine = () => {
  const { edition } = useParams();
  const currentEdition = magazineData[parseInt(edition)];

  if (!currentEdition) {
    return (
      <PageLayout>
        <div className="min-h-screen pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Edition Not Found</h1>
              <p className="text-foreground/70 mb-8">The magazine edition you're looking for doesn't exist.</p>
              <Link to="/magazine/1">
                <button className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300">
                  View Edition 1
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Page Title */}
          <SectionTitle>Department Magazine</SectionTitle>

          {/* Edition Header */}
          <div className="mb-12">
            <GlassCard className="border-accent/50">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-accent">{currentEdition.month} {currentEdition.year}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{currentEdition.title}</h2>
                  <p className="text-foreground/70 leading-relaxed max-w-3xl">{currentEdition.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-accent/40 mb-2">#{edition}</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Articles Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">In This Edition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentEdition.articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  icon={article.icon}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                />
              ))}
            </div>
          </div>

          {/* Edition Navigation */}
          <div className="flex justify-center gap-4 flex-wrap">
            {Object.entries(magazineData).map(([key]) => (
              <Link
                key={key}
                to={`/magazine/${key}`}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  parseInt(edition) === parseInt(key)
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-white/10 text-foreground hover:bg-white/20'
                }`}
              >
                Edition {key}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Magazine;