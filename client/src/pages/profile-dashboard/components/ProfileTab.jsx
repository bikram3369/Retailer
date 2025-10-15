import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProfileTab = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Riya Sharma",
    email: "riya.sharma@gmail.com",
    mobile: "+91 98765 43210",
    dateOfBirth: "15/03/1995",
    gender: "Female",
    addresses: [
      {
        id: 1,
        type: "Home",
        name: "Riya Sharma",
        address: "A-204, Sunrise Apartments, Linking Road, Bandra West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400050",
        mobile: "+91 98765 43210",
        isDefault: true
      },
      {
        id: 2,
        type: "Office",
        name: "Riya Sharma",
        address: "Tech Park, 5th Floor, Sector 18, Cyber City",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122015",
        mobile: "+91 98765 43210",
        isDefault: false
      }
    ]
  });

  const [editingAddress, setEditingAddress] = useState(null);
  const [showAddAddress, setShowAddAddress] = useState(false);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
  };

  const handleDeleteAddress = (addressId) => {
    setProfileData(prev => ({
      ...prev,
      addresses: prev?.addresses?.filter(addr => addr?.id !== addressId)
    }));
  };

  const handleSetDefaultAddress = (addressId) => {
    setProfileData(prev => ({
      ...prev,
      addresses: prev?.addresses?.map(addr => ({
        ...addr,
        isDefault: addr?.id === addressId
      }))
    }));
  };

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Personal Information</h3>
          <Button
            variant={isEditing ? "default" : "outline"}
            size="sm"
            onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
            iconName={isEditing ? "Check" : "Edit2"}
            iconPosition="left"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            value={profileData?.fullName}
            onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e?.target?.value }))}
            disabled={!isEditing}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            value={profileData?.email}
            onChange={(e) => setProfileData(prev => ({ ...prev, email: e?.target?.value }))}
            disabled={!isEditing}
            required
          />
          
          <Input
            label="Mobile Number"
            type="tel"
            value={profileData?.mobile}
            onChange={(e) => setProfileData(prev => ({ ...prev, mobile: e?.target?.value }))}
            disabled={!isEditing}
            required
          />
          
          <Input
            label="Date of Birth"
            type="text"
            value={profileData?.dateOfBirth}
            onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e?.target?.value }))}
            disabled={!isEditing}
            placeholder="DD/MM/YYYY"
          />
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
            <div className="flex space-x-4">
              {['Male', 'Female', 'Other']?.map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={profileData?.gender === gender}
                    onChange={(e) => setProfileData(prev => ({ ...prev, gender: e?.target?.value }))}
                    disabled={!isEditing}
                    className="mr-2"
                  />
                  <span className="text-sm text-foreground">{gender}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Delivery Addresses */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Delivery Addresses</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddAddress(true)}
            iconName="Plus"
            iconPosition="left"
          >
            Add New Address
          </Button>
        </div>

        <div className="space-y-4">
          {profileData?.addresses?.map((address) => (
            <div key={address?.id} className="border border-border rounded-lg p-4 relative">
              {address?.isDefault && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                    Default
                  </span>
                </div>
              )}
              
              <div className="pr-16">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} className="text-muted-foreground" />
                  <span className="font-medium text-foreground">{address?.type}</span>
                </div>
                
                <p className="text-sm text-foreground font-medium mb-1">{address?.name}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {address?.address}, {address?.city}, {address?.state} - {address?.pincode}
                </p>
                <p className="text-sm text-muted-foreground">Mobile: {address?.mobile}</p>
              </div>
              
              <div className="flex items-center space-x-2 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditAddress(address)}
                  iconName="Edit2"
                >
                  Edit
                </Button>
                
                {!address?.isDefault && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSetDefaultAddress(address?.id)}
                      iconName="Star"
                    >
                      Set Default
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteAddress(address?.id)}
                      iconName="Trash2"
                      className="text-error hover:text-error"
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Account Security */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-6">Account Security</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Lock" size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Password</p>
                <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Change Password
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Smartphone" size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Enable 2FA
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Login Activity</p>
                <p className="text-sm text-muted-foreground">Monitor your account access</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Activity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;