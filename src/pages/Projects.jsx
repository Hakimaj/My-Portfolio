import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';

// Styled Components for the Layout (Projects Page specific)
const ProjectsWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #282c34;
  font-size: 2.5rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

function Projects() {
  return (
    <ProjectsWrapper>
      <Title>My Portfolio Projects</Title>
      <ProjectGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
}

export default Projects; // Exporting the Projects page component