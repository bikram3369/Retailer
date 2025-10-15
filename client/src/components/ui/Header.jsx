import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [cartItemCount, setCartItemCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      label: 'Home',
      path: '/home-landing',
      icon: 'Home',
      tooltip: 'Discover fashion with AI styling'
    },
    {
      label: 'Cart',
      path: '/shopping-cart',
      icon: 'ShoppingCart',
      tooltip: 'View your shopping cart',
      badge: cartItemCount
    },
    {
      label: 'Profile',
      path: '/profile-dashboard',
      icon: 'User',
      tooltip: 'Manage your account'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      // For now, we'll navigate to home page with search functionality
      // In a real app, this would navigate to search results page
      console.log('Searching for:', searchQuery);
      navigate('/home-landing', { state: { searchQuery: searchQuery?.trim() } });
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e?.target?.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleAuthSubmit = (e) => {
    e?.preventDefault();
    // Handle authentication logic here
    closeAuthModal();
  };

  useEffect(() => {
    // Simulate cart updates
    const updateCartCount = () => {
      const count = Math.floor(Math.random() * 10);
      setCartItemCount(count);
    };
    
    const interval = setInterval(updateCartCount, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-100 bg-background/95 backdrop-blur-glass border-b border-border">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
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
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className={`relative flex items-center transition-all duration-200 ${
                isSearchFocused ? 'scale-105' : ''
              }`}>
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 text-muted-foreground z-10"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search products, brands, categories..."
                  className={`w-full pl-10 pr-10 py-2.5 bg-muted/50 border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                    isSearchFocused ? 'bg-background shadow-md' : 'hover:bg-muted/70'
                  }`}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 p-1 text-muted-foreground hover:text-text-primary transition-colors"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => {
              const isActive = location?.pathname === item?.path;
              return (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth hover:bg-muted focus-ring ${
                    isActive 
                      ? 'text-primary bg-primary/5' :'text-text-secondary hover:text-text-primary'
                  }`}
                  title={item?.tooltip}
                >
                  <div className="relative">
                    <Icon name={item?.icon} size={20} />
                    {item?.badge && item?.badge > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center font-mono">
                        {item?.badge > 99 ? '99+' : item?.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">{item?.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => openAuthModal('login')}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => openAuthModal('signup')}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative flex items-center">
              <Icon 
                name="Search" 
                size={18} 
                className="absolute left-3 text-muted-foreground z-10"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 py-2.5 bg-muted/50 border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 focus:bg-background"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 p-1 text-muted-foreground hover:text-text-primary transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => {
                const isActive = location?.pathname === item?.path;
                return (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-smooth ${
                      isActive 
                        ? 'text-primary bg-primary/5' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }`}
                  >
                    <div className="relative">
                      <Icon name={item?.icon} size={20} />
                      {item?.badge && item?.badge > 0 && (
                        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-medium rounded-full w-4 h-4 flex items-center justify-center font-mono">
                          {item?.badge > 9 ? '9+' : item?.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-medium">{item?.label}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => openAuthModal('login')}
                >
                  Sign In
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => openAuthModal('signup')}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Authentication Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-card rounded-lg shadow-large animate-scale-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-card-foreground font-heading">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <button
                  onClick={closeAuthModal}
                  className="p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    placeholder="Enter your password"
                  />
                </div>

                {authMode === 'login' && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button type="submit" fullWidth className="mt-6">
                  {authMode === 'login' ? 'Sign In' : 'Create Account'}
                </Button>

                <div className="text-center mt-4">
                  <span className="text-sm text-muted-foreground">
                    {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {authMode === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;