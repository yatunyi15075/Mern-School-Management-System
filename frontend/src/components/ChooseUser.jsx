
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChooseUserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const UserSection = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signIn">Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Button to="/student-signIn">Login as Student</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signIn">Login as Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
