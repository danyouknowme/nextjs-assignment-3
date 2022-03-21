import React from 'react';
import styled from 'styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { SpinnerProps } from '../types/product';

const SpinnerContainer = styled.div`
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #bebebe;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountText = styled.span`
  font-size: 20px;
  user-select: none;
`;

const RemoveContainer = styled.div<{ limited: boolean }>`
  cursor: ${({ limited }) => (limited ? 'default' : 'pointer')};
  margin-left: 15px;
  color: ${({ limited }) => (limited ? '#BEBEBE' : '#000')};
`;

const AddContainer = styled.div<{ limited: boolean }>`
  cursor: ${({ limited }) => (limited ? 'default' : 'pointer')};
  margin-right: 15px;
  font-size: 0.9rem;
  color: ${({ limited }) => (limited ? '#BEBEBE' : '#000')};
`;

const Spinner: React.FC<SpinnerProps> = ({
  variant,
  selectedAmount,
  setSelectedAmount,
}) => {
  const RemoveAmount = () => {
    if (selectedAmount === 1) return;
    setSelectedAmount(selectedAmount - 1);
  };

  const AddAmount = () => {
    if (variant?.stock === selectedAmount) return;
    setSelectedAmount(selectedAmount + 1);
  };

  return (
    <SpinnerContainer id={'spinner'}>
      <RemoveContainer limited={selectedAmount === 1} onClick={RemoveAmount}>
        <MinusOutlined />
      </RemoveContainer>
      <AmountText>{selectedAmount}</AmountText>
      <AddContainer
        limited={selectedAmount === variant?.stock}
        onClick={AddAmount}
      >
        <PlusOutlined />
      </AddContainer>
    </SpinnerContainer>
  );
};

export default Spinner;
