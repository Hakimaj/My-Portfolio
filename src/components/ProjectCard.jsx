import React from 'react';
import styled from 'styled-components';

// --- Styled Components Definition (Keep as is) ---
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background-color: white;

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h3`
  color: #333;
  margin-top: 0;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 15px;
`;

const LinkButton = styled.a`
  display: inline-block;
  background-color: #282c34;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background-color: #444951;
  }
`;

function ProjectCard({ project }) {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      {/* Include project image here later  */}
      {project.liveLink && (
        <LinkButton href={project.liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </LinkButton>
      )}
      {' '}
      {project.repoLink && (
        <LinkButton href={project.repoLink} target="_blank" rel="noopener noreferrer">
          Code (GitHub)
        </LinkButton>
      )}
    </Card>
  );
}

// --- Correct Export ---
export default ProjectCard;