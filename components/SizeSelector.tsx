import React from 'react';
import styled from 'styled-components';
import { SizeSelectorProps, Variant } from '../types/product';

const SizeSelectorContainer = styled.div`
  display: flex;
`;

const SizeSelectorWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 10.5px;
  background-color: ${({ selected }) => selected && '#6BBBFF'};
  color: ${({ selected }) => selected && '#FFF'};
  border: 1px solid ${({ selected }) => (selected ? '#6BBBFF' : '#C4C4C4')};
  border-radius: 4px;
  margin-right: 4px;
  cursor: pointer;

  &.disabled {
    cursor: default;
    color: #bebebe;
  }
`;

const SizeSelector: React.FC<SizeSelectorProps> = ({
  variants,
  selectedVariant,
  setSelectedVariant,
}) => {
  const onSetSelectedVariant = (variant: Variant) => {
    if (variant.stock === 0) return;
    setSelectedVariant(variant);
  };

  return (
    <SizeSelectorContainer id={'size-container'}>
      {variants?.map((variant, index) => (
        <SizeSelectorWrapper
          className={`${variant.stock === 0 ? 'disabled' : ''}`}
          selected={variant.size === selectedVariant?.size}
          key={index}
        >
          <span onClick={() => onSetSelectedVariant(variant)}>
            {variant.size}
          </span>
        </SizeSelectorWrapper>
      ))}
    </SizeSelectorContainer>
  );
};

export default SizeSelector;
