import React from "react";
import PageLayout from "../components/PageLayout";
import { Mail, Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage("Thank you for subscribing! Check your email for confirmation.");
      setEmail("");
      setIsLoading(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }, 1000);
  };

  return (
    <PageLayout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Newsletter
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Stay updated with the latest news, updates, and announcements from the CST & CSIT Department. Subscribe to our newsletter today!
            </p>
          </div>

          {/* Newsletter Card */}
          <div className="max-w-md mx-auto glass-effect p-8 rounded-lg border border-white/10">
            
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-full">
                <Mail className="w-6 h-6 text-accent" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {/* Success Message */}
            {message && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                {message}
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">📰 Latest News</h3>
              <p className="text-foreground/60 text-sm">Get the latest updates about departmental events and achievements</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">📢 Announcements</h3>
              <p className="text-foreground/60 text-sm">Never miss important announcements and deadlines</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">🎓 Exclusive Content</h3>
              <p className="text-foreground/60 text-sm">Access exclusive articles and insights from faculty members</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Newsletter;
