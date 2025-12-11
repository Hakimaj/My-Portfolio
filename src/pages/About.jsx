import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../data/portfolioData'; // Import skills data

// --- Styled Components ---

const AboutWrapper = styled.section`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #282c34;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const BioSection = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 40px;
  text-align: left;
`;

// NEW STYLING BLOCK
const ContactInfo = styled.div`
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap on smaller screens */
  gap: 30px;
  justify-content: space-around;

  a {
    color: #282c34;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #61dafb;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkillCard = styled.div`
  background: #fff;
  border-left: 5px solid #61dafb;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-weight: bold;
`;

// --- Component Function ---

function About() {
  return (
    <AboutWrapper>
      <Title>About Me</Title>

      <BioSection>
<p>
          Hello! I am Abdulhakim, a dedicated React and Java Developer with a strong focus on building dynamic, high-performance, and responsive web applications.
          I thrive on bridging the gap between elegant design and robust, scalable code.
        </p>
        <p>
          My passion lies in transforming design concepts into intuitive user interfaces. Outside of coding, I enjoy Eating :).
        </p>
      </BioSection>

      {/* --- NEW CONTACT SECTION --- */}
      <h3>Contact & Connect</h3>
      <ContactInfo>
        <div>
          <strong>Email:</strong>
          <a href="mailto:abdulhakimaj6@gmail.com"> abdulhakimaj6@gmail.com</a>
        </div>
        <div>
          <strong>Phone:</strong>
          <a href="tel:+251922003971"> +251 922 003 971</a>
        </div>
        <div>
          <strong>GitHub:</strong>
          <a href="https://github.com/Hakimaj" target="_blank" rel="noopener noreferrer"> Hakimaj</a>
        </div>
      </ContactInfo>
      {/* --------------------------- */}

      <h3>Technical Skills</h3>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>{skill.name}</SkillCard>
        ))}
      </SkillsGrid>
    </AboutWrapper>
  );
}

export default About;