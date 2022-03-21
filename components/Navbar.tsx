import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #C4C4C4;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer />
  );
};

export default Navbar;
