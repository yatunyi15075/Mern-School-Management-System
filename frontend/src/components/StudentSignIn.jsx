// StudentSignIn.js
import React, { useState } from 'react';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/StudentSignInStyles';

const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // For demonstration purposes, we'll directly navigate to the student dashboard route
    // Replace this with your actual sign-in logic
    console.log('Student Sign In:', { email, password });
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
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
        {/* Use Link component to navigate to student dashboard */}
        <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
