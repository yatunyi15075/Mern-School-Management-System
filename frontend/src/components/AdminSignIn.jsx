import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // For demonstration purposes, we'll directly navigate to the admin dashboard route
    // Replace this with your actual sign-in logic
    console.log('Admin Sign In:', { email, password });
  };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        {/* Use Link component to navigate to admin dashboard */}
        <Link to="/admin/dashboard">
          <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
        </Link>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
