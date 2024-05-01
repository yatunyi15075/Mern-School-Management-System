import React from 'react';
import styled from 'styled-components';
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import hero from "../assets/hero.jpg"; // Import the hero background image

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
  background-image: url(${hero});
  background-size: cover; 
`;

const SchoolInfo = styled.div`
  margin-top: 20px;
`;

const SchoolImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  const loremText = lorem.generateParagraphs(1);

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
          <LoginButton>Login</LoginButton>
          <GuestButton>Guest Mode</GuestButton>
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
