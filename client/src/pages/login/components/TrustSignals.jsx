import React from 'react';
import Image from '@/components/AppImages';
import Icon from '@/components/AppIcon';

const TrustSignals = () => {
  const testimonials = [
  {
    id: 1,
    name: "Priya Mehta",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1728088734939-5bb9c1183d20",
    avatarAlt: "Professional headshot of Indian woman with long black hair wearing white blouse",
    rating: 5,
    text: "OmniSales transformed my shopping experience! The AI stylist helped me find perfect outfits for every occasion.",
    verified: true
  },
  {
    id: 2,
    name: "Rahul Sharma",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1596717951382-a3cbbdd4b8fd",
    avatarAlt: "Professional headshot of Indian man with short black hair wearing navy blue shirt",
    rating: 5,
    text: "Love the seamless integration between online and in-store experience. Shopping has never been this easy!",
    verified: true
  },
  {
    id: 3,
    name: "Anita Gupta",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1582041770597-88e6ec37695c",
    avatarAlt: "Professional headshot of Indian woman with shoulder-length black hair wearing pink top",
    rating: 5,
    text: "The personalized recommendations are spot-on! Found my new favorite ethnic wear collection here.",
    verified: true
  }];


  const trustBadges = [
  {
    icon: 'Shield',
    title: 'Secure Payments',
    description: 'Bank-level security'
  },
  {
    icon: 'Truck',
    title: 'Free Delivery',
    description: 'On orders above ₹999'
  },
  {
    icon: 'RotateCcw',
    title: 'Easy Returns',
    description: '30-day return policy'
  },
  {
    icon: 'Award',
    title: 'Authentic Brands',
    description: 'Verified Indian brands'
  }];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={14}
      className={index < rating ? 'text-accent fill-current' : 'text-muted'} />

    );
  };

  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4">
        {trustBadges?.map((badge, index) =>
        <div
          key={index}
          className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg border border-border/50">

            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={badge?.icon} size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">{badge?.title}</h4>
              <p className="text-xs text-muted-foreground">{badge?.description}</p>
            </div>
          </div>
        )}
      </div>
      {/* Customer Testimonials */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground font-heading text-center">
          Trusted by Fashion Lovers
        </h3>
        
        <div className="space-y-4">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card border border-border rounded-lg p-4 shadow-soft">

              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  {testimonial?.verified &&
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center border-2 border-background">
                      <Icon name="Check" size={10} className="text-white" />
                    </div>
                }
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {testimonial?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial?.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial?.rating)}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial?.text}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Brand Partnership */}
      <div className="text-center space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          Partnered with Leading Indian Brands
        </h4>
        
        <div className="flex items-center justify-center space-x-6 opacity-60">
          <div className="text-xs font-semibold text-muted-foreground tracking-wider">
            ABFRL
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="text-xs font-semibold text-muted-foreground tracking-wider">
            MYNTRA
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="text-xs font-semibold text-muted-foreground tracking-wider">
            AJIO
          </div>
        </div>
      </div>
      {/* Security Notice */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Lock" size={20} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-primary mb-1">
              Your Data is Safe
            </h4>
            <p className="text-xs text-primary/80 leading-relaxed">
              We use industry-standard encryption to protect your personal information and payment details. Your privacy is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>);

};

export default TrustSignals;