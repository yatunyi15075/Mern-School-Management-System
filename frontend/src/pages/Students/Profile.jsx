
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const ProfileContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProfileDetail = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Example High School',
    email: 'john.doe@example.com'
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileInfo>
          <ProfileDetail>
            <Label>Name:</Label>
            <Value>{studentProfile.name}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Age:</Label>
            <Value>{studentProfile.age}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Grade:</Label>
            <Value>{studentProfile.grade}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>School:</Label>
            <Value>{studentProfile.school}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Email:</Label>
            <Value>{studentProfile.email}</Value>
          </ProfileDetail>
        </ProfileInfo>
      </Content>
    </ProfileContainer>
  );
};

export default ProfileSection;
