import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const SignUpHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6 mb-8">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-medium">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary font-heading">
              OmniSales
            </h1>
            <p className="text-sm text-muted-foreground">
              AI-Powered Fashion Platform
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground font-heading">
          Join OmniSales
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Create your account and discover personalized fashion with our AI stylist
        </p>
      </div>

      {/* Features Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Sparkles" size={16} className="text-accent" />
          </div>
          <span>AI Styling</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={16} className="text-success" />
          </div>
          <span>Secure Shopping</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Truck" size={16} className="text-primary" />
          </div>
          <span>Fast Delivery</span>
        </div>
      </div>

      {/* Back to Home */}
      <div className="pt-4">
        <button
          onClick={() => navigate('/home-landing')}
          className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default SignUpHeader;