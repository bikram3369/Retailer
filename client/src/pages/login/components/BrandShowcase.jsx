import React from 'react';
import Image from '@/components/AppImages';

const BrandShowcase = () => {
  const featuredCollections = [
  {
    id: 1,
    title: "Festive Ethnic Wear",
    image: "https://images.unsplash.com/photo-1732508531407-ea058467a83d",
    imageAlt: "Indian woman wearing elegant red and gold lehenga with intricate embroidery for festive occasion",
    brand: "ABFRL",
    discount: "Up to 40% OFF"
  },
  {
    id: 2,
    title: "Contemporary Fusion",
    image: "https://images.unsplash.com/photo-1669201034396-0a811693e68f",
    imageAlt: "Modern Indian woman in stylish indo-western outfit with printed kurta and jeans",
    brand: "W for Woman",
    discount: "New Arrivals"
  },
  {
    id: 3,
    title: "Men\'s Formal Collection",
    image: "https://images.unsplash.com/photo-1586537695851-cf1a847d2db0",
    imageAlt: "Professional Indian man wearing navy blue formal suit with white shirt and tie",
    brand: "Van Heusen",
    discount: "Buy 2 Get 1"
  }];


  const trendingStyles = [
  {
    id: 1,
    name: "Kurta Sets",
    image: "https://images.unsplash.com/photo-1693990152390-adfc5e1339d5",
    imageAlt: "Elegant cotton kurta set in pastel blue with white palazzo pants and dupatta"
  },
  {
    id: 2,
    name: "Sarees",
    image: "https://images.unsplash.com/photo-1698906852357-40c3d600df42",
    imageAlt: "Beautiful silk saree in deep maroon color with golden border and traditional patterns"
  },
  {
    id: 3,
    name: "Western Wear",
    image: "https://images.unsplash.com/photo-1586156671093-e14a45ec88f2",
    imageAlt: "Trendy western outfit with denim jacket and floral top worn by young Indian woman"
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1722412194314-2413db7f4bfa",
    imageAlt: "Collection of traditional Indian jewelry including gold earrings, necklace and bangles"
  }];


  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-primary-foreground font-heading mb-2">
            Discover Your Style
          </h2>
          <p className="text-primary-foreground/90 mb-4">
            AI-powered fashion recommendations tailored for you
          </p>
          <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            <span>✨</span>
            <span>Get personalized styling tips</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>
      {/* Featured Collections */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground font-heading">
          Featured Collections
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          {featuredCollections?.map((collection) =>
          <div
            key={collection?.id}
            className="relative overflow-hidden rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-smooth cursor-pointer group">

              <div className="flex">
                <div className="w-24 h-20 flex-shrink-0">
                  <Image
                  src={collection?.image}
                  alt={collection?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                </div>
                
                <div className="flex-1 p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        {collection?.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {collection?.brand}
                      </p>
                      <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded">
                        {collection?.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Trending Categories */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground font-heading">
          Trending Now
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {trendingStyles?.map((style) =>
          <div
            key={style?.id}
            className="relative overflow-hidden rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-smooth cursor-pointer group">

              <div className="aspect-square">
                <Image
                src={style?.image}
                alt={style?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-medium text-white">
                  {style?.name}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-4 text-center">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-accent">
            🎉 Welcome Offer
          </h4>
          <p className="text-xs text-muted-foreground">
            Get ₹500 off on your first purchase above ₹2,999
          </p>
          <div className="text-xs text-accent font-medium">
            Use code: WELCOME500
          </div>
        </div>
      </div>
      {/* App Download Prompt */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-lg">📱</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-primary mb-1">
              Shop on the Go
            </h4>
            <p className="text-xs text-primary/80">
              Download our app for exclusive deals and faster checkout
            </p>
          </div>
        </div>
      </div>
    </div>);

};

export default BrandShowcase;