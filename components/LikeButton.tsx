import React from 'react';
import styled from 'styled-components';
import { HeartOutlined } from '@ant-design/icons';
import { LikeButtonProps } from '../types/product';

const LikeButtonContainer = styled.div<{ liked: boolean; size: string; }>`
  width: ${({ size }) => size === 'sm' ? '42px' : '64px'};
  height: ${({ size }) => size === 'sm' ? '42px' : '64px'};
  border: 1px solid ${({ liked }) => liked ? '#6BBBFF' : '#C4C4C4'};
  background-color: ${({ liked }) => liked ? '#6BBBFF' : '#FFFFFF'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: ${({ size }) => size === 'sm' ? '1.2rem' : '1.7rem'};;
    color: ${({ liked }) => liked ? '#FFFFFF' : '#6BBBFF'};
  }
`;

const LikeButton: React.FC<LikeButtonProps> = ({ size = 'sm', liked, setLiked }) => {
  return (
    <LikeButtonContainer size={size} liked={liked} onClick={() => setLiked(!liked)} id={'like-btn'}>
      <HeartOutlined id={'heart-icon'} />
    </LikeButtonContainer>
  );
};

export default LikeButton;
