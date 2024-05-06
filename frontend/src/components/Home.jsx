import React from 'react';
import styled from 'styled-components';
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import hero from "../assets/hero.jpg";
import { useNavigate } from 'react-router-dom'; 

const lorem = new LoremIpsum();

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f3f3f3;
  color: black;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const GuestButton = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center;
  background-color: #6FC3DF;
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Set minimum height to cover entire viewport */
`;

const SchoolInfo = styled.div`
  margin-top: 20px;
`;

const SchoolImage = styled.img`
  width: 80%; /* Increase image size */
  max-height: 80vh; /* Max height to maintain aspect ratio */
  object-fit: cover; /* Cover entire container */
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 36px; /* Increased font size */
  font-weight: bold;
  color: white; /* Text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for better visibility */
`;

const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px; /* Increased font size */
  color: white; /* Text color */
  text-align: justify; /* Justify text */
  padding: 0 20px; /* Add some padding for better readability */
`;

const Home = () => {
  const navigate = useNavigate(); // Access the navigate function using useNavigate hook
  const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    // Navigate to the "/choose-user" route when Login button is clicked
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Login</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{loremText}</p>
          </LoremTextContainer>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />
      </HomeContainer>
    </>
  );
};

export default Home;
