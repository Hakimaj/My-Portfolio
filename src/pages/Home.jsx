import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components for the Hero Section
const HeroSection = styled.section`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;

const CallToActionButton = styled(Link)`
  background-color: #61dafb;
  color: #282c34;
  padding: 12px 25px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

function Home() {
  return (
    <HeroSection>
      <Headline>
        Hi, I'm ABDULHAKIM.
      </Headline>
      <Subtitle>
      Java & React Student | Building Modern Web Experiences
      </Subtitle>
      <CallToActionButton to="/projects">
        View My Work
      </CallToActionButton>
    </HeroSection>
  );
}

export default Home;