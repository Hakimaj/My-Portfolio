import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
// Assuming you have a Footer component ready, e.g., src/components/Footer.jsx
import Footer from './Footer';

// Basic global styles for reset and typography
const GlobalStyle = createGlobalStyle`
  html, body { /* Make sure html and body are targeted */
    margin: 0;
    padding: 0;
    width: 100%; /* Ensure they span full width */
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #333;
  }
`;

// Styled component for the main content area
const MainContent = styled.main`
  min-height: calc(100vh - 120px);
  padding: 0;
  /* --- ADD THIS LINE --- */
  width: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
        {children} {/* This is where page content (Home, Projects, etc.) is rendered */}
      </MainContent>
      <Footer />
    </>
  );
}

export default Layout;