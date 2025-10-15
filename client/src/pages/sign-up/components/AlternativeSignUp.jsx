import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const AlternativeSignUp = () => {
  const navigate = useNavigate();
  const [showOtpSignup, setShowOtpSignup] = useState(false);
  const [otpData, setOtpData] = useState({
    mobile: '',
    otp: ''
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success
      navigate('/home-landing', { 
        state: { 
          message: 'Successfully signed up with Google!',
          user: { name: 'Priya Sharma', email: 'priya.sharma@gmail.com' }
        }
      });
    } catch (error) {
      setErrors({ google: 'Google sign up failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex?.test(otpData?.mobile)) {
      setErrors({ mobile: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsOtpSent(true);
    } catch (error) {
      setErrors({ mobile: 'Failed to send OTP. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpData?.otp || otpData?.otp?.length !== 6) {
      setErrors({ otp: 'Please enter a valid 6-digit OTP' });
      return;
    }

    // Mock OTP validation (correct OTP: 123456)
    if (otpData?.otp !== '123456') {
      setErrors({ otp: 'Invalid OTP. Please try again. (Use: 123456)' });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/home-landing', { 
        state: { 
          message: 'Mobile number verified successfully!',
          user: { name: 'New User', mobile: otpData?.mobile }
        }
      });
    } catch (error) {
      setErrors({ otp: 'Verification failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpInputChange = (e) => {
    const { name, value } = e?.target;
    setOtpData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {/* Google Sign Up */}
      <Button
        variant="outline"
        size="lg"
        fullWidth
        onClick={handleGoogleSignUp}
        loading={isLoading && !showOtpSignup}
        disabled={isLoading}
        className="border-2 hover:bg-muted/50"
      >
        <div className="flex items-center justify-center space-x-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continue with Google</span>
        </div>
      </Button>
      {errors?.google && (
        <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
          <p className="text-sm text-error">{errors?.google}</p>
        </div>
      )}
      {/* OTP Sign Up Toggle */}
      <div className="text-center">
        <button
          type="button"
          onClick={() => setShowOtpSignup(!showOtpSignup)}
          className="text-sm text-primary hover:text-primary/80 font-medium hover:underline transition-colors flex items-center justify-center space-x-2 mx-auto"
        >
          <Icon name="Smartphone" size={16} />
          <span>Sign up with Mobile OTP</span>
          <Icon name={showOtpSignup ? "ChevronUp" : "ChevronDown"} size={16} />
        </button>
      </div>
      {/* OTP Sign Up Form */}
      {showOtpSignup && (
        <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-center">
            <h3 className="font-medium text-foreground mb-2">
              Sign up with Mobile OTP
            </h3>
            <p className="text-sm text-muted-foreground">
              We'll send you a verification code
            </p>
          </div>

          {!isOtpSent ? (
            <div className="space-y-4">
              <Input
                label="Mobile Number"
                type="tel"
                name="mobile"
                placeholder="Enter 10-digit mobile number"
                value={otpData?.mobile}
                onChange={handleOtpInputChange}
                error={errors?.mobile}
                maxLength={10}
                className="w-full"
              />
              
              <Button
                variant="default"
                size="default"
                fullWidth
                onClick={handleSendOtp}
                loading={isLoading && showOtpSignup}
                disabled={isLoading || !otpData?.mobile}
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center p-3 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-sm text-success">
                  OTP sent to +91 {otpData?.mobile}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Use: 123456 for testing
                </p>
              </div>

              <Input
                label="Enter OTP"
                type="text"
                name="otp"
                placeholder="Enter 6-digit OTP"
                value={otpData?.otp}
                onChange={handleOtpInputChange}
                error={errors?.otp}
                maxLength={6}
                className="w-full text-center text-lg font-mono"
              />

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="default"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  className="flex-1"
                >
                  Resend OTP
                </Button>
                <Button
                  variant="default"
                  size="default"
                  onClick={handleVerifyOtp}
                  loading={isLoading}
                  disabled={isLoading || !otpData?.otp}
                  className="flex-1"
                >
                  Verify
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlternativeSignUp;