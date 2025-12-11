import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  font-size: 0.9rem;
`;

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>&copy; {currentYear} Abdulhakim Jejaw. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;