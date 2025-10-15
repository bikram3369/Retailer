import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ChatWidget from '../../components/ui/ChatWidget';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import TrendingLooks from './components/TrendingLooks';
import AIStyleAssistant from './components/AIStyleAssistant';
import TrustSignals from './components/TrustSignals';

const HomeLanding = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>OmniSales - AI-Powered Fashion Discovery | Indian Fashion & Lifestyle</title>
        <meta 
          name="description" 
          content="Discover personalized fashion with OmniSales AI stylist. Shop trending Indian ethnic wear, contemporary fusion, and lifestyle products with smart recommendations and try-in-store options." 
        />
        <meta name="keywords" content="AI fashion, Indian ethnic wear, online shopping, fashion stylist, personalized recommendations, Indian fashion brands" />
        <meta property="og:title" content="OmniSales - AI-Powered Fashion Discovery" />
        <meta property="og:description" content="Get personalized fashion recommendations with our AI stylist. Shop Indian ethnic wear and contemporary fashion." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/home-landing" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Collections */}
          <FeaturedCollections />

          {/* AI Style Assistant */}
          <AIStyleAssistant />

          {/* Trending Looks */}
          <TrendingLooks />

          {/* Trust Signals & Testimonials */}
          <TrustSignals />

          {/* Newsletter Signup */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Stay Updated with Fashion Trends
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get exclusive access to new collections, styling tips, and special offers delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                />
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-smooth focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Join 25,000+ fashion enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
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
                  <span className="text-xl font-semibold text-foreground font-heading">
                    OmniSales
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered fashion discovery platform for Indian consumers. Find your perfect style with personalized recommendations.
                </p>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-smooth">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-smooth">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-smooth">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Collections</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Size Guide</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Store Locator</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Career</a></li>
                </ul>
              </div>

              {/* Customer Service */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-smooth">Contact Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Returns & Exchanges</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Track Your Order</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">FAQ</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Mumbai, Delhi, Bangalore & 35+ cities across India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">support@omnisales.in</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">1800-123-4567 (Toll Free)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} OmniSales. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Chat Widget */}
        <ChatWidget />
      </div>
    </>
  );
};

export default HomeLanding;