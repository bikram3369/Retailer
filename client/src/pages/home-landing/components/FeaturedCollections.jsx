import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const FeaturedCollections = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [wishlist, setWishlist] = useState(new Set());

  const collections = [
  {
    id: 1,
    name: "Festive Ethnic Wear",
    description: "Traditional Indian outfits for celebrations",
    image: "https://images.unsplash.com/photo-1731415999483-a4b19c425972",
    imageAlt: "Elegant woman in vibrant orange and gold traditional Indian lehenga with intricate embroidery",
    price: "₹2,999",
    originalPrice: "₹4,999",
    discount: "40% OFF",
    badge: "Trending",
    inStore: true,
    aiRecommended: true
  },
  {
    id: 2,
    name: "Contemporary Kurtas",
    description: "Modern twist on classic Indian wear",
    image: "https://images.unsplash.com/photo-1669201034396-0a811693e68f",
    imageAlt: "Stylish Indian woman in contemporary navy blue kurta with modern cut and minimal jewelry",
    price: "₹1,599",
    originalPrice: "₹2,299",
    discount: "30% OFF",
    badge: "New",
    inStore: true,
    aiRecommended: false
  },
  {
    id: 3,
    name: "Wedding Collection",
    description: "Exquisite bridal and wedding guest wear",
    image: "https://images.unsplash.com/photo-1652785442661-d6b6f2215dcb",
    imageAlt: "Beautiful bride in heavy red and gold wedding lehenga with traditional jewelry and henna",
    price: "₹8,999",
    originalPrice: "₹12,999",
    discount: "31% OFF",
    badge: "Premium",
    inStore: true,
    aiRecommended: true
  },
  {
    id: 4,
    name: "Casual Western Wear",
    description: "Comfortable everyday fashion essentials",
    image: "https://images.unsplash.com/photo-1566983312085-061b5a3c2dc0",
    imageAlt: "Young woman in casual denim jacket and white top with relaxed styling in urban setting",
    price: "₹899",
    originalPrice: "₹1,299",
    discount: "31% OFF",
    badge: "Bestseller",
    inStore: false,
    aiRecommended: false
  },
  {
    id: 5,
    name: "Office Formals",
    description: "Professional attire for working women",
    image: "https://images.unsplash.com/photo-1677594333284-68463516a828",
    imageAlt: "Professional woman in crisp white shirt and black blazer in modern office environment",
    price: "₹2,199",
    originalPrice: "₹2,999",
    discount: "27% OFF",
    badge: "Work Ready",
    inStore: true,
    aiRecommended: true
  },
  {
    id: 6,
    name: "Party Dresses",
    description: "Glamorous outfits for special occasions",
    image: "https://images.unsplash.com/photo-1702837854855-7015cd555ee8",
    imageAlt: "Elegant woman in shimmering black cocktail dress with statement jewelry at evening event",
    price: "₹3,499",
    originalPrice: "₹4,999",
    discount: "30% OFF",
    badge: "Party Ready",
    inStore: false,
    aiRecommended: false
  }];


  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist?.has(id)) {
        newWishlist?.delete(id);
      } else {
        newWishlist?.add(id);
      }
      return newWishlist;
    });
  };

  const addToCart = (item) => {
    // Add to cart logic
    console.log('Added to cart:', item);
  };

  const scroll = (direction) => {
    if (scrollRef?.current) {
      const scrollAmount = 320;
      scrollRef?.current?.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 font-heading">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover trending styles curated by our AI fashion experts
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              iconName="ChevronLeft" />

            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              iconName="ChevronRight" />

          </div>
        </div>

        {/* Collections Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-thin pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {collections?.map((collection) =>
            <div
              key={collection?.id}
              className="flex-shrink-0 w-80 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group">

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                  src={collection?.image}
                  alt={collection?.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />

                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {collection?.badge}
                    </span>
                    {collection?.aiRecommended &&
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Icon name="Sparkles" size={12} />
                        <span>AI Pick</span>
                      </span>
                  }
                  </div>

                  {/* Wishlist Button */}
                  <button
                  onClick={() => toggleWishlist(collection?.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-smooth focus-ring">

                    <Icon
                    name="Heart"
                    size={16}
                    className={wishlist?.has(collection?.id) ? 'text-red-500 fill-current' : 'text-gray-600'} />

                  </button>

                  {/* Discount Badge */}
                  {collection?.discount &&
                <div className="absolute bottom-3 left-3 bg-error text-error-foreground px-2 py-1 rounded text-xs font-medium">
                      {collection?.discount}
                    </div>
                }
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-card-foreground mb-1 font-heading">
                    {collection?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {collection?.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-foreground">
                      {collection?.price}
                    </span>
                    {collection?.originalPrice &&
                  <span className="text-sm text-muted-foreground line-through">
                        {collection?.originalPrice}
                      </span>
                  }
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mb-3">
                    <Button
                    variant="default"
                    size="sm"
                    fullWidth
                    onClick={() => addToCart(collection)}
                    iconName="ShoppingCart"
                    iconPosition="left">

                      Add to Cart
                    </Button>
                  </div>

                  {/* Store Options */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Truck" size={12} />
                        <span>Ship to Home</span>
                      </div>
                      {collection?.inStore &&
                    <div className="flex items-center space-x-1">
                          <Icon name="Store" size={12} />
                          <span>Try in Store</span>
                        </div>
                    }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/home-landing#all-collections')}
            iconName="ArrowRight"
            iconPosition="right">

            View All Collections
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedCollections;