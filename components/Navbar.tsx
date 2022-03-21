import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav<{ page: string }>`
  width: 100%;
  height: 80px;
  background-color: ${({ page }) =>
    page === 'productsByCategory' ? '#2C2C2C' : '#C4C4C4'};
`;

const Navbar: React.FC<{ page: string }> = ({ page }) => {
  return <NavbarContainer page={page} />;
};

export default Navbar;
