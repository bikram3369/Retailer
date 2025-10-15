import React from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';

const TrustSignals = () => {
  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1652396944757-ad27b62b33f6",
    avatarAlt: "Professional headshot of Indian woman with long black hair and warm smile",
    rating: 5,
    review: "The AI stylist recommendations are spot on! Found the perfect outfit for my sister\'s wedding. The quality is amazing and delivery was super fast.",
    verified: true,
    purchaseDate: "2 weeks ago"
  },
  {
    id: 2,
    name: "Ananya Gupta",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1678536517689-f9d11edd22ec",
    avatarAlt: "Smiling Indian woman with shoulder-length hair in professional attire",
    rating: 5,
    review: "Love the try-in-store option! I could see how the kurta looked before buying. The staff at the Delhi store was very helpful.",
    verified: true,
    purchaseDate: "1 month ago"
  },
  {
    id: 3,
    name: "Riya Patel",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1652396944757-ad27b62b33f6",
    avatarAlt: "Young Indian woman with curly hair and bright smile in casual setting",
    rating: 4,
    review: "Great collection of ethnic wear! The festive collection helped me find beautiful outfits for Diwali. Highly recommend!",
    verified: true,
    purchaseDate: "3 weeks ago"
  }];


  const storeLocations = [
  {
    id: 1,
    city: "Mumbai",
    stores: 12,
    icon: "MapPin",
    popular: true
  },
  {
    id: 2,
    city: "Delhi",
    stores: 8,
    icon: "MapPin",
    popular: true
  },
  {
    id: 3,
    city: "Bangalore",
    stores: 6,
    icon: "MapPin",
    popular: false
  },
  {
    id: 4,
    city: "Chennai",
    stores: 5,
    icon: "MapPin",
    popular: false
  },
  {
    id: 5,
    city: "Hyderabad",
    stores: 4,
    icon: "MapPin",
    popular: false
  },
  {
    id: 6,
    city: "Pune",
    stores: 3,
    icon: "MapPin",
    popular: false
  }];


  const trustFeatures = [
  {
    icon: "Shield",
    title: "Secure Shopping",
    description: "256-bit SSL encryption for safe transactions"
  },
  {
    icon: "Truck",
    title: "Free Delivery",
    description: "Free shipping on orders above ₹999"
  },
  {
    icon: "RotateCcw",
    title: "Easy Returns",
    description: "30-day hassle-free return policy"
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description: "Round-the-clock customer assistance"
  }];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />

    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) =>
            <div
              key={testimonial?.id}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial?.rating)}
                </div>

                {/* Review */}
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{testimonial?.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-card-foreground">
                        {testimonial?.name}
                      </h4>
                      {testimonial?.verified &&
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    }
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={12} />
                      <span>{testimonial?.location}</span>
                      <span>•</span>
                      <span>{testimonial?.purchaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Store Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
              Visit Our Stores
            </h2>
            <p className="text-lg text-muted-foreground">
              Try before you buy at our stores across major Indian cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {storeLocations?.map((location) =>
            <div
              key={location?.id}
              className={`bg-card p-4 rounded-lg text-center hover:shadow-medium transition-all duration-300 cursor-pointer ${
              location?.popular ? 'ring-2 ring-accent ring-opacity-50' : ''}`
              }>

                <Icon name={location?.icon} size={24} className="text-primary mx-auto mb-2" />
                <h3 className="font-medium text-card-foreground mb-1">
                  {location?.city}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {location?.stores} stores
                </p>
                {location?.popular &&
              <span className="inline-block mt-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs">
                    Popular
                  </span>
              }
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <button className="text-primary hover:underline font-medium">
              Find a store near you →
            </button>
          </div>
        </div>

        {/* Trust Features */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
              Why Choose OmniSales?
            </h2>
            <p className="text-muted-foreground">
              Your trusted fashion partner with unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures?.map((feature, index) =>
            <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                50K+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                38
              </div>
              <div className="text-muted-foreground">Store Locations</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                10K+
              </div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                4.8
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSignals;