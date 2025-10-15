import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const WishlistTab = () => {
  const [wishlistItems, setWishlistItems] = useState([
  {
    id: 1,
    name: "Elegant Silk Saree",
    brand: "ABFRL",
    originalPrice: 8999,
    discountedPrice: 6299,
    discount: 30,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1698906852357-40c3d600df42",
    imageAlt: "Elegant silk saree in deep red color with gold border and intricate patterns",
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    addedDate: "10/10/2025"
  },
  {
    id: 2,
    name: "Designer Anarkali Dress",
    brand: "ABFRL",
    originalPrice: 5999,
    discountedPrice: 4199,
    discount: 30,
    rating: 4.3,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1678534955887-092b74e7772c",
    imageAlt: "Designer anarkali dress in cream color with embroidered details and flowing silhouette",
    inStock: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Pink", "Mint"],
    addedDate: "08/10/2025"
  },
  {
    id: 3,
    name: "Casual Denim Jacket",
    brand: "ABFRL",
    originalPrice: 3499,
    discountedPrice: 2449,
    discount: 30,
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1700929979587-ac76c57c5ee1",
    imageAlt: "Casual denim jacket in light blue wash with classic collar and button closure",
    inStock: false,
    sizes: ["S", "M", "L"],
    colors: ["Light Blue", "Dark Blue"],
    addedDate: "05/10/2025"
  },
  {
    id: 4,
    name: "Festive Lehenga Set",
    brand: "ABFRL",
    originalPrice: 12999,
    discountedPrice: 9099,
    discount: 30,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1697347815999-d4db9977ab0e",
    imageAlt: "Festive lehenga set in maroon with gold embroidery and matching dupatta",
    inStock: true,
    sizes: ["XS", "S", "M"],
    colors: ["Maroon", "Navy", "Emerald"],
    addedDate: "03/10/2025"
  },
  {
    id: 5,
    name: "Cotton Kurta Set",
    brand: "ABFRL",
    originalPrice: 2999,
    discountedPrice: 2099,
    discount: 30,
    rating: 4.1,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1669199209442-1b612317610d",
    imageAlt: "Cotton kurta set in white with minimal embroidery and comfortable fit",
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Cream", "Light Blue"],
    addedDate: "01/10/2025"
  },
  {
    id: 6,
    name: "Statement Jewelry Set",
    brand: "Accessory Co",
    originalPrice: 1999,
    discountedPrice: 1399,
    discount: 30,
    rating: 4.4,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1603423573864-9ab936e4b934",
    imageAlt: "Statement jewelry set with gold-plated necklace and matching earrings",
    inStock: true,
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    addedDate: "28/09/2025"
  }]
  );

  const [selectedItems, setSelectedItems] = useState([]);
  const [sortBy, setSortBy] = useState('recent');

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems((prev) => prev?.filter((item) => item?.id !== itemId));
    setSelectedItems((prev) => prev?.filter((id) => id !== itemId));
  };

  const handleAddToCart = (item) => {
    // Add to cart logic
    console.log('Adding to cart:', item?.name);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
    prev?.includes(itemId) ?
    prev?.filter((id) => id !== itemId) :
    [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems?.length === wishlistItems?.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems?.map((item) => item?.id));
    }
  };

  const handleMoveSelectedToCart = () => {
    const selectedWishlistItems = wishlistItems?.filter((item) => selectedItems?.includes(item?.id));
    selectedWishlistItems?.forEach((item) => handleAddToCart(item));
    setSelectedItems([]);
  };

  const handleRemoveSelected = () => {
    setWishlistItems((prev) => prev?.filter((item) => !selectedItems?.includes(item?.id)));
    setSelectedItems([]);
  };

  const sortOptions = [
  { value: 'recent', label: 'Recently Added' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'discount', label: 'Highest Discount' }];


  const sortedItems = [...wishlistItems]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.discountedPrice - b?.discountedPrice;
      case 'price-high':
        return b?.discountedPrice - a?.discountedPrice;
      case 'rating':
        return b?.rating - a?.rating;
      case 'discount':
        return b?.discount - a?.discount;
      case 'recent':
      default:
        return new Date(b.addedDate.split('/').reverse().join('-')) - new Date(a.addedDate.split('/').reverse().join('-'));
    }
  });

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-foreground">
            My Wishlist ({wishlistItems?.length} items)
          </h3>
          
          {wishlistItems?.length > 0 &&
          <div className="flex items-center space-x-2">
              <input
              type="checkbox"
              checked={selectedItems?.length === wishlistItems?.length}
              onChange={handleSelectAll}
              className="rounded border-border" />

              <span className="text-sm text-muted-foreground">
                Select All ({selectedItems?.length} selected)
              </span>
            </div>
          }
        </div>

        <div className="flex items-center space-x-3">
          {selectedItems?.length > 0 &&
          <>
              <Button
              variant="outline"
              size="sm"
              onClick={handleMoveSelectedToCart}
              iconName="ShoppingCart"
              iconPosition="left">

                Move to Cart ({selectedItems?.length})
              </Button>
              <Button
              variant="outline"
              size="sm"
              onClick={handleRemoveSelected}
              iconName="Trash2"
              iconPosition="left"
              className="text-error hover:text-error">

                Remove ({selectedItems?.length})
              </Button>
            </>
          }
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">

            {sortOptions?.map((option) =>
            <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            )}
          </select>
        </div>
      </div>
      {/* Wishlist Items */}
      {wishlistItems?.length === 0 ?
      <div className="text-center py-16">
          <Icon name="Heart" size={64} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-6">
            Save items you love to your wishlist and shop them later
          </p>
          <Button variant="default" iconName="ShoppingBag" iconPosition="left">
            Continue Shopping
          </Button>
        </div> :

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems?.map((item) =>
        <div key={item?.id} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-medium transition-smooth">
              {/* Selection Checkbox */}
              <div className="absolute top-4 left-4 z-10">
                <input
              type="checkbox"
              checked={selectedItems?.includes(item?.id)}
              onChange={() => handleSelectItem(item?.id)}
              className="w-4 h-4 rounded border-border bg-background/80 backdrop-blur-sm" />

              </div>

              {/* Remove from Wishlist */}
              <button
            onClick={() => handleRemoveFromWishlist(item?.id)}
            className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background">

                <Icon name="X" size={16} className="text-muted-foreground hover:text-foreground" />
              </button>

              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
              src={item?.image}
              alt={item?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                
                {!item?.inStock &&
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
            }

                {item?.discount > 0 &&
            <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                      {item?.discount}% OFF
                    </span>
                  </div>
            }
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground">{item?.brand}</p>
                  <h4 className="font-medium text-foreground line-clamp-2">{item?.name}</h4>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-accent fill-current" />
                    <span className="text-sm font-medium text-foreground">{item?.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({item?.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-semibold text-foreground">
                    ₹{item?.discountedPrice?.toLocaleString('en-IN')}
                  </span>
                  {item?.originalPrice > item?.discountedPrice &&
              <span className="text-sm text-muted-foreground line-through">
                      ₹{item?.originalPrice?.toLocaleString('en-IN')}
                    </span>
              }
                </div>

                {/* Sizes and Colors */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Sizes:</span>
                    <div className="flex space-x-1">
                      {item?.sizes?.slice(0, 4)?.map((size) =>
                  <span key={size} className="text-xs px-2 py-1 bg-muted rounded">
                          {size}
                        </span>
                  )}
                      {item?.sizes?.length > 4 &&
                  <span className="text-xs text-muted-foreground">+{item?.sizes?.length - 4}</span>
                  }
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Colors:</span>
                    <div className="flex space-x-1">
                      {item?.colors?.slice(0, 3)?.map((color) =>
                  <span key={color} className="text-xs px-2 py-1 bg-muted rounded">
                          {color}
                        </span>
                  )}
                      {item?.colors?.length > 3 &&
                  <span className="text-xs text-muted-foreground">+{item?.colors?.length - 3}</span>
                  }
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                variant="default"
                size="sm"
                fullWidth
                disabled={!item?.inStock}
                onClick={() => handleAddToCart(item)}
                iconName="ShoppingCart"
                iconPosition="left">

                    {item?.inStock ? "Add to Cart" : "Notify When Available"}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Added on {item?.addedDate}
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>
      }
    </div>);

};

export default WishlistTab;