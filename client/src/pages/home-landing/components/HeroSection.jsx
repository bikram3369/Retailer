import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    id: 1,
    title: "Discover Your Perfect Style with AI",
    subtitle: "Get personalized fashion recommendations tailored just for you",
    image: "https://images.unsplash.com/photo-1644415985712-a0a620473300",
    imageAlt: "Elegant Indian woman in traditional red silk saree with gold jewelry standing in modern boutique",
    cta: "Start Styling",
    badge: "AI Powered"
  },
  {
    id: 2,
    title: "Festive Collection 2024",
    subtitle: "Celebrate in style with our curated festive wear collection",
    image: "https://images.unsplash.com/photo-1641382161690-0fd2643d9868",
    imageAlt: "Beautiful Indian woman in golden lehenga with intricate embroidery posing for festive photoshoot",
    cta: "Shop Festive",
    badge: "New Arrivals"
  },
  {
    id: 3,
    title: "Try Before You Buy",
    subtitle: "Visit our stores across India or get it delivered to your doorstep",
    image: "https://images.unsplash.com/photo-1574893167419-2c8a7b406f73",
    imageAlt: "Confident Indian woman in modern casual wear browsing clothes in contemporary fashion store",
    cta: "Find Stores",
    badge: "In-Store Experience"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleCTAClick = (slide) => {
    if (slide?.cta === "Start Styling") {
      // Trigger chat widget or navigate to styling page
      window.dispatchEvent(new CustomEvent('openChat'));
    } else if (slide?.cta === "Shop Festive") {
      // Navigate to festive collection
      navigate('/home-landing#festive');
    } else if (slide?.cta === "Find Stores") {
      // Navigate to store locator
      navigate('/home-landing#stores');
    }
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides?.map((slide, index) =>
        <div
          key={slide?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <Image
            src={slide?.image}
            alt={slide?.imageAlt}
            className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        )}
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>{heroSlides?.[currentSlide]?.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              {heroSlides?.[currentSlide]?.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              {heroSlides?.[currentSlide]?.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleCTAClick(heroSlides?.[currentSlide])}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90 text-accent-foreground">

                {heroSlides?.[currentSlide]?.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/shopping-cart')}
                iconName="ShoppingBag"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">

                View Cart
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} />
                <span className="text-sm">Secure Shopping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={20} />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="RotateCcw" size={20} />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides?.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ?
            'bg-accent scale-125' : 'bg-white/50 hover:bg-white/70'}`
            } />

          )}
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-smooth focus-ring">

        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides?.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-smooth focus-ring">

        <Icon name="ChevronRight" size={24} />
      </button>
    </section>);

};

export default HeroSection;