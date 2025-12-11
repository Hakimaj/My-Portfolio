import { Link } from 'react-router-dom';
import styled from 'styled-components'; // Import styled

// 1. Define the styled component
const NavWrapper = styled.nav`
  background-color: #282c34;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    color: #61dafb;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    // 2. Use the styled component in your JSX
    <NavWrapper>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>

      </ul>
    </NavWrapper>
  );
}

export default Header;