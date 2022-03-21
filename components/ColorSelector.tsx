import React from 'react';
import styled from 'styled-components';
import { ColorSelectorProps } from '../types/product';

const ColorSelectorContainer = styled.div`
  display: flex;
`;

const ColorSelectorWrapper = styled.div<{ selected: boolean; size: string }>`
  width: ${({ size }) => (size === 'sm' ? '28px' : '39px')};
  height: ${({ size }) => (size === 'sm' ? '28px' : '39px')};
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? '#BEBEBE' : '#FFFFFF')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const SelectorColor = styled.div<{ color: string; size: string }>`
  width: ${({ size }) => (size === 'sm' ? '20px' : '30px')};
  height: ${({ size }) => (size === 'sm' ? '20px' : '30px')};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid
    ${({ color }) => (color === '#FFFFFF' ? '#DEDEDE' : '#FFFFFF')};
`;

const ColorSelector: React.FC<ColorSelectorProps> = ({
  size = 'sm',
  variants,
  selectedVariant,
  setSelectedVariant,
}) => {
  return (
    <ColorSelectorContainer id={'swatch-container'}>
      {variants.map((variant, index) => (
        <ColorSelectorWrapper
          size={size}
          selected={variant.color === selectedVariant.color}
          key={index}
        >
          <SelectorColor
            size={size}
            id={`color-${variant.color}`}
            color={variant.color}
            onClick={() => setSelectedVariant(variant)}
          />
        </ColorSelectorWrapper>
      ))}
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
