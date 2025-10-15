import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIStyleAssistant = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const styleCategories = [
    {
      id: 1,
      name: "Traditional Ethnic",
      description: "Classic Indian wear for festivals and ceremonies",
      icon: "Crown",
      color: "bg-orange-100 text-orange-600",
      recommendations: ["Lehengas", "Sarees", "Anarkalis", "Kurta Sets"],
      occasions: ["Weddings", "Festivals", "Religious Events"]
    },
    {
      id: 2,
      name: "Contemporary Fusion",
      description: "Modern twist on traditional Indian fashion",
      icon: "Sparkles",
      color: "bg-purple-100 text-purple-600",
      recommendations: ["Indo-Western Dresses", "Palazzo Sets", "Crop Top Lehengas", "Dhoti Pants"],
      occasions: ["Parties", "Date Nights", "Casual Outings"]
    },
    {
      id: 3,
      name: "Professional Chic",
      description: "Sophisticated workwear for the modern woman",
      icon: "Briefcase",
      color: "bg-blue-100 text-blue-600",
      recommendations: ["Blazer Sets", "Formal Shirts", "Pencil Skirts", "Trousers"],
      occasions: ["Office", "Business Meetings", "Conferences"]
    },
    {
      id: 4,
      name: "Casual Comfort",
      description: "Relaxed everyday wear for comfort and style",
      icon: "Coffee",
      color: "bg-green-100 text-green-600",
      recommendations: ["T-shirts", "Jeans", "Casual Dresses", "Sneakers"],
      occasions: ["Weekend", "Shopping", "Casual Hangouts"]
    }
  ];

  const aiFeatures = [
    {
      icon: "Brain",
      title: "Smart Recommendations",
      description: "AI analyzes your preferences, body type, and occasion to suggest perfect outfits"
    },
    {
      icon: "Palette",
      title: "Color Coordination",
      description: "Get color combinations that complement your skin tone and personal style"
    },
    {
      icon: "Ruler",
      title: "Size Prediction",
      description: "Advanced algorithms predict your perfect fit across different brands"
    },
    {
      icon: "TrendingUp",
      title: "Trend Analysis",
      description: "Stay updated with latest fashion trends personalized for Indian market"
    }
  ];

  const startStyleQuiz = () => {
    setIsQuizActive(true);
    // Trigger chat widget or navigate to style quiz
    window.dispatchEvent(new CustomEvent('openChat', { 
      detail: { message: "I'd like to take the style quiz to get personalized recommendations!" }
    }));
  };

  const selectStyleCategory = (category) => {
    setSelectedStyle(category);
    // Trigger AI assistant with selected style
    window.dispatchEvent(new CustomEvent('openChat', { 
      detail: { message: `I'm interested in ${category.name} style. Can you show me some recommendations?` }
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>AI-Powered Fashion</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
            Your Personal AI Style Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your perfect style with our advanced AI that understands Indian fashion preferences, 
            body types, and cultural occasions to give you personalized recommendations
          </p>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiFeatures?.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={feature?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">
                {feature?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Style Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-heading">
            Choose Your Style Preference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styleCategories?.map((category) => (
              <div
                key={category?.id}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group"
                onClick={() => selectStyleCategory(category)}
              >
                <div className={`w-12 h-12 ${category?.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  {category?.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {category?.description}
                </p>
                
                {/* Recommendations Preview */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Popular Items:</p>
                  <div className="flex flex-wrap gap-1">
                    {category?.recommendations?.slice(0, 2)?.map((item, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Perfect For:</p>
                  <div className="flex flex-wrap gap-1">
                    {category?.occasions?.slice(0, 2)?.map((occasion, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {occasion}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-primary group-hover:text-primary/80">
                  <span>Get Recommendations</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Style Quiz CTA */}
        <div className="bg-card rounded-lg p-8 text-center shadow-soft">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4 font-heading">
              Take Our AI Style Quiz
            </h3>
            <p className="text-muted-foreground mb-6">
              Answer a few quick questions about your preferences, lifestyle, and occasions. 
              Our AI will create a personalized style profile and recommend outfits that are perfect for you.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={startStyleQuiz}
                iconName="Play"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Start Style Quiz
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Chat with AI Stylist
              </Button>
            </div>

            {/* Quiz Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Takes only 2 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Target" size={16} />
                <span>Personalized results</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Gift" size={16} />
                <span>Get exclusive offers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join 50,000+ satisfied customers who found their perfect style with our AI
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-success rounded-full border-2 border-background"></div>
              </div>
              <span>95% satisfaction rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
              <span>4.8/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStyleAssistant;