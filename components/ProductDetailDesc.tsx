import React from 'react';
import styled from 'styled-components';

const DetailDescContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 30px;
  margin: 2rem 0;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    user-select: none;
  }

  span {
    line-height: 30px;
    user-select: none;
  }
`;

const ProductDetailDesc: React.FC<{ description: string; }> = ({ description }) => {
  return (
    <DetailDescContainer>
      <h3>Description</h3>
      <span>{description}</span>
    </DetailDescContainer>
  );
};

export default ProductDetailDesc;
