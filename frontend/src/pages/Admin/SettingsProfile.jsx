import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const SettingsProfileContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileLabel = styled.label`
  margin-bottom: 10px;
`;

const ProfileInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProfileButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SettingsProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePhoto: '',
    // Add other profile details here
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit profile data
    console.log('Submitted:', profileData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <SettingsProfileContainer>
      <Sidebar />
      <Content>
        <h1>Settings & Profile</h1>
        {/* Profile Section */}
        <ProfileSection>
          <h2>Profile</h2>
          <ProfileForm onSubmit={handleSubmit}>
            <ProfileLabel>First Name:</ProfileLabel>
            <ProfileInput
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
            />
            <ProfileLabel>Last Name:</ProfileLabel>
            <ProfileInput
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
            />
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInput
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
            {/* Add more profile details and fields */}
            <ProfileButton type="submit">Save Profile</ProfileButton>
          </ProfileForm>
        </ProfileSection>
        {/* Add more sections for other settings */}
      </Content>
    </SettingsProfileContainer>
  );
};

export default SettingsProfile;
