import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ChatWidget from '../../components/ui/ChatWidget';
import LoginForm from './components/LoginForm';
import TrustSignals from './components/TrustSignals';
import BrandShowcase from './components/BrandShowcase';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/home-landing');
    }

    // Set page title
    document.title = 'Sign In - OmniSales | AI-Powered Fashion Shopping';
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Left Column - Login Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <LoginForm />
              </div>
            </div>

            {/* Right Column - Brand Showcase & Trust Signals */}
            <div className="space-y-8">
              {/* Desktop: Brand Showcase */}
              <div className="hidden lg:block">
                <BrandShowcase />
              </div>

              {/* Mobile: Simplified Trust Signals */}
              <div className="lg:hidden">
                <TrustSignals />
              </div>

              {/* Desktop: Trust Signals */}
              <div className="hidden lg:block">
                <TrustSignals />
              </div>
            </div>
          </div>

          {/* Mobile Brand Showcase - Below Form */}
          <div className="lg:hidden mt-12">
            <BrandShowcase />
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                New to OmniSales?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join thousands of fashion enthusiasts who trust our AI-powered styling recommendations. 
                Create your account and discover personalized fashion that matches your unique style.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate('/sign-up')}
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring"
                >
                  Create Free Account
                </button>
                
                <button
                  onClick={() => navigate('/home-landing')}
                  className="w-full sm:w-auto text-primary hover:text-primary/80 font-medium transition-smooth"
                >
                  Browse as Guest →
                </button>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-heading mb-2">
                AI Styling Assistant
              </h3>
              <p className="text-sm text-muted-foreground">
                Get personalized outfit recommendations based on your preferences and body type
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-heading mb-2">
                Omnichannel Experience
              </h3>
              <p className="text-sm text-muted-foreground">
                Seamlessly shop online, try in-store, or get assistance via WhatsApp
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-soft">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-heading mb-2">
                Premium Brands
              </h3>
              <p className="text-sm text-muted-foreground">
                Shop from India's leading fashion brands with authentic quality guarantee
              </p>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-primary font-heading">
                OmniSales
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              AI-powered conversational retail platform for Indian fashion and lifestyle brands
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-smooth">Privacy Policy</button>
              <button className="hover:text-foreground transition-smooth">Terms of Service</button>
              <button className="hover:text-foreground transition-smooth">Support</button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              © {new Date()?.getFullYear()} OmniSales. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;