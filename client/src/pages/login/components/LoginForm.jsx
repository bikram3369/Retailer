import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock credentials for testing
  const mockCredentials = {
    email: 'riya.sharma@gmail.com',
    mobile: '9876543210',
    password: 'Fashion@123'
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.emailOrMobile?.trim()) {
      newErrors.emailOrMobile = 'Email or mobile number is required';
    } else {
      const isEmail = formData?.emailOrMobile?.includes('@');
      const isMobile = /^[6-9]\d{9}$/?.test(formData?.emailOrMobile);
      
      if (!isEmail && !isMobile) {
        newErrors.emailOrMobile = 'Please enter a valid email or 10-digit mobile number';
      }
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const { emailOrMobile, password } = formData;
      
      // Check against mock credentials
      const isValidCredentials = (
        (emailOrMobile === mockCredentials?.email || emailOrMobile === mockCredentials?.mobile) &&
        password === mockCredentials?.password
      );

      if (isValidCredentials) {
        // Store user session
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', mockCredentials?.email);
        
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        navigate('/home-landing');
      } else {
        setErrors({
          general: `Invalid credentials. Use email: ${mockCredentials?.email} or mobile: ${mockCredentials?.mobile} with password: ${mockCredentials?.password}`
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Simulate Google OAuth
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', 'riya.sharma@gmail.com');
      navigate('/home-landing');
    }, 2000);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-lg shadow-large p-8 border border-border">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-card-foreground font-heading mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to continue your fashion journey
          </p>
        </div>

        {/* General Error */}
        {errors?.general && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="AlertCircle" size={20} className="text-error mt-0.5 flex-shrink-0" />
              <p className="text-sm text-error">{errors?.general}</p>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email or Mobile Number"
            type="text"
            name="emailOrMobile"
            placeholder="Enter email or 10-digit mobile"
            value={formData?.emailOrMobile}
            onChange={handleInputChange}
            error={errors?.emailOrMobile}
            required
            className="mb-4"
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={formData?.password}
              onChange={handleInputChange}
              error={errors?.password}
              required
              className="mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-smooth focus-ring rounded p-1"
            >
              <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e?.target?.checked)}
                className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-ring"
              />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-smooth"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isLoading}
            className="mt-6"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Google Login */}
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={handleGoogleLogin}
          iconName="Chrome"
          iconPosition="left"
          disabled={isLoading}
          className="mb-6"
        >
          Continue with Google
        </Button>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Don't have an account?{' '}
          </span>
          <button
            onClick={() => navigate('/sign-up')}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-smooth"
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;