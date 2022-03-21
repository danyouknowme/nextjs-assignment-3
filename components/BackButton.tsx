import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';

const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
`;

const BackButton: React.FC = () => {
  const router = useRouter();

  const NavigateToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <BackButtonContainer onClick={(e) => NavigateToHome(e)} id='back-btn'>
      <IoIosArrowBack />
    </BackButtonContainer>
  );
};

export default BackButton;
