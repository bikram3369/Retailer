import React from 'react';
import { Helmet } from 'react-helmet';
import Image from '@/components/AppImages';
import SignUpHeader from './components/SignUpHeader';
import SignUpForm from './components/SignUpForm';
import AlternativeSignUp from './components/AlternativeSignUp';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - OmniSales | AI-Powered Fashion Platform</title>
        <meta name="description" content="Create your OmniSales account and discover personalized fashion with our AI stylist. Join thousands of fashion enthusiasts shopping smarter." />
        <meta name="keywords" content="sign up, register, fashion, AI stylist, online shopping, Indian fashion" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
        </div>

        <div className="relative z-10 flex min-h-screen">
          {/* Left Side - Hero Image (Hidden on mobile) */}
          <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
            <Image
              src="https://images.unsplash.com/photo-1727101818134-cef4d4ed3eb6"
              alt="Modern Indian fashion store interior with elegant clothing displays, warm lighting, and contemporary design showcasing premium ethnic and western wear"
              className="w-full h-full object-cover" />

            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center text-white space-y-6 max-w-md">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white"
                    fill="currentColor">

                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                <h2 className="text-4xl font-bold font-heading">
                  Welcome to the Future of Fashion
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Join thousands of fashion enthusiasts who trust our AI stylist to discover their perfect look
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-white/80">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-sm text-white/80">Style Recommendations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-md space-y-8">
              {/* Header */}
              <SignUpHeader />

              {/* Main Sign Up Form */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-large border border-border/50 p-8">
                <SignUpForm />
              </div>

              {/* Alternative Sign Up Options */}
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl shadow-medium border border-border/30 p-6">
                <AlternativeSignUp />
              </div>

              {/* Trust Indicators */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span>Privacy Protected</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <span>Trusted by 50K+</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  By signing up, you agree to our Terms of Service and Privacy Policy. 
                  Your data is encrypted and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Section */}
        <div className="lg:hidden absolute top-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1543857182-cd420065f549"
            alt="Modern Indian fashion store interior with elegant clothing displays and contemporary design"
            className="w-full h-full object-cover opacity-30" />

        </div>
      </div>
    </>);

};

export default SignUpPage;