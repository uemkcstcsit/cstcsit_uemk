import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-lg mx-auto text-center" hover={false}>
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-6">
              <span className="text-4xl font-serif font-bold text-accent">404</span>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center justify-center gap-2 glass-button px-6 py-3 rounded-lg text-accent font-medium"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 glass-button px-6 py-3 rounded-lg text-foreground font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
