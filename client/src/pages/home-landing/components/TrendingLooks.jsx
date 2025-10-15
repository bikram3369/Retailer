import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const TrendingLooks = () => {
  const navigate = useNavigate();
  const [selectedLook, setSelectedLook] = useState(null);

  const trendingLooks = [
  {
    id: 1,
    title: "Festive Glam",
    description: "Perfect for Diwali celebrations and wedding functions",
    model: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1640745690757-5e3a53f5113c",
    imageAlt: "Indian woman in stunning red and gold lehenga with traditional jewelry for festive celebration",
    totalPrice: "₹12,999",
    items: [
    { name: "Embroidered Lehenga", price: "₹8,999", image: "https://images.unsplash.com/photo-1732508531407-ea058467a83d", imageAlt: "Red and gold embroidered lehenga skirt with intricate patterns" },
    { name: "Matching Choli", price: "₹2,999", image: "https://images.unsplash.com/photo-1731416688822-80e0dcaf9035", imageAlt: "Traditional red choli blouse with gold embroidery and mirror work" },
    { name: "Statement Earrings", price: "₹1,001", image: "https://images.unsplash.com/photo-1622825302011-24f2b18d1d07", imageAlt: "Heavy gold chandelier earrings with red stones and pearls" }],

    tags: ["Festive", "Traditional", "Wedding Guest"],
    likes: 1247,
    aiScore: 95
  },
  {
    id: 2,
    title: "Office Chic",
    description: "Professional yet stylish workwear ensemble",
    model: "Ananya Gupta",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1616587895596-11641131b78b",
    imageAlt: "Professional Indian woman in navy blue blazer and white shirt in modern office setting",
    totalPrice: "₹4,997",
    items: [
    { name: "Tailored Blazer", price: "₹2,999", image: "https://images.unsplash.com/photo-1731377209672-c7606ba26c25", imageAlt: "Navy blue tailored blazer with structured shoulders and button details" },
    { name: "Crisp White Shirt", price: "₹1,299", image: "https://images.unsplash.com/photo-1633165082783-6655da82bb7c", imageAlt: "Classic white cotton shirt with collar and button-down front" },
    { name: "Formal Trousers", price: "₹699", image: "https://images.unsplash.com/photo-1572288012187-7b1bea5b307e", imageAlt: "Black formal trousers with straight cut and professional fit" }],

    tags: ["Professional", "Formal", "Work Wear"],
    likes: 892,
    aiScore: 88
  },
  {
    id: 3,
    title: "Casual Weekend",
    description: "Comfortable yet trendy outfit for weekend outings",
    model: "Riya Patel",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1650403262757-1795437d3e56",
    imageAlt: "Young Indian woman in casual denim jacket and white top with relaxed weekend styling",
    totalPrice: "₹2,697",
    items: [
    { name: "Denim Jacket", price: "₹1,599", image: "https://images.unsplash.com/photo-1567281280539-ef3e12f49370", imageAlt: "Light blue denim jacket with classic cut and button closure" },
    { name: "Basic White Tee", price: "₹599", image: "https://images.unsplash.com/photo-1666358054407-9ea933dadf41", imageAlt: "Simple white cotton t-shirt with comfortable fit and crew neck" },
    { name: "Skinny Jeans", price: "₹499", image: "https://images.unsplash.com/photo-1718681501216-c32f0acc415b", imageAlt: "Dark blue skinny jeans with stretch fabric and modern cut" }],

    tags: ["Casual", "Weekend", "Comfortable"],
    likes: 654,
    aiScore: 82
  }];


  const addCompleteOutfit = (look) => {
    // Add all items from the look to cart
    console.log('Adding complete outfit to cart:', look);
    navigate('/shopping-cart');
  };

  const openLookDetails = (look) => {
    setSelectedLook(look);
  };

  const closeLookDetails = () => {
    setSelectedLook(null);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
            Trending Looks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete outfit inspirations styled by our AI and loved by fashion enthusiasts across India
          </p>
        </div>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingLooks?.map((look) =>
          <div
            key={look?.id}
            className="bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => openLookDetails(look)}>

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                src={look?.image}
                alt={look?.imageAlt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />

                
                {/* AI Score Badge */}
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Icon name="Sparkles" size={14} />
                  <span>AI {look?.aiScore}%</span>
                </div>

                {/* Likes */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Icon name="Heart" size={14} className="text-red-500" />
                  <span>{look?.likes}</span>
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                  <span className="text-lg font-bold">{look?.totalPrice}</span>
                  <span className="text-sm opacity-80 block">Complete Look</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2 font-heading">
                  {look?.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {look?.description}
                </p>

                {/* Model Info */}
                <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="User" size={16} />
                  <span>{look?.model}</span>
                  <span>•</span>
                  <Icon name="MapPin" size={16} />
                  <span>{look?.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {look?.tags?.map((tag) =>
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">

                      {tag}
                    </span>
                )}
                </div>

                {/* Action Button */}
                <Button
                variant="default"
                fullWidth
                onClick={(e) => {
                  e?.stopPropagation();
                  addCompleteOutfit(look);
                }}
                iconName="ShoppingBag"
                iconPosition="left">

                  Shop This Look
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Look Details Modal */}
        {selectedLook &&
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-4xl bg-card rounded-lg shadow-large max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-card-foreground font-heading">
                    {selectedLook?.title}
                  </h2>
                  <button
                  onClick={closeLookDetails}
                  className="p-2 rounded-lg hover:bg-muted transition-smooth focus-ring">

                    <Icon name="X" size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Look Image */}
                  <div className="relative">
                    <Image
                    src={selectedLook?.image}
                    alt={selectedLook?.imageAlt}
                    className="w-full h-96 lg:h-full object-cover rounded-lg" />

                  </div>

                  {/* Look Details */}
                  <div>
                    <p className="text-muted-foreground mb-4">
                      {selectedLook?.description}
                    </p>

                    {/* Items Breakdown */}
                    <h3 className="text-lg font-semibold mb-4">Items in this look:</h3>
                    <div className="space-y-4 mb-6">
                      {selectedLook?.items?.map((item, index) =>
                    <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                          <Image
                        src={item?.image}
                        alt={item?.imageAlt}
                        className="w-16 h-16 object-cover rounded" />

                          <div className="flex-1">
                            <h4 className="font-medium">{item?.name}</h4>
                            <p className="text-lg font-semibold text-primary">{item?.price}</p>
                          </div>
                        </div>
                    )}
                    </div>

                    {/* Total Price */}
                    <div className="bg-primary/10 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Total Price:</span>
                        <span className="text-2xl font-bold text-primary">{selectedLook?.totalPrice}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button
                      variant="default"
                      fullWidth
                      onClick={() => addCompleteOutfit(selectedLook)}
                      iconName="ShoppingBag"
                      iconPosition="left">

                        Add Complete Look to Cart
                      </Button>
                      <Button
                      variant="outline"
                      fullWidth
                      iconName="MessageCircle"
                      iconPosition="left">

                        Get Styling Tips
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default TrendingLooks;