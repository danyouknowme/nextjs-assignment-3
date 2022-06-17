import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenFilterMenu } from '../app/filterSlice';
import { useRanger } from 'react-ranger';

const FilterMenuContainer = styled.div<{ active: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  opacity: ${({ active }) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'visible' : 'none')};
`;

const FilterMenuContent = styled.div`
  width: 600px;
  height: 100vh;
  background-color: #fff;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  span {
    text-decoration: underline;
    color: #bebebe;
    margin-left: 1.2rem;
  }

  svg {
    color: #000;
    font-size: 1.2rem;
  }
`;

const Color = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    font-size: 20px;
  }
`;
const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ColorCircle = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: ${({ color }) => color === '#FFFFFF' && '1px solid #DEDEDE'};
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const Size = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    font-size: 20px;
  }
`;

const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const SizeCircle = styled.div`
  width: 56px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    font-size: 1rem;
    margin: 0;
  }
`;

const PriceRage = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 29px;
  }
`;

const RangeSlider = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const ButtonSlider = styled.div`
  span {
    margin: 0;
    width: max-content;
    position: absolute;
    top: 30px;
    transform: translate(-50%, -50%);
  }
`;

const FilterMenu = () => {
  const [values, setValues] = useState([100, 1200]);
  const openFilterMenu = useSelector(
    (state: any) => state.filter.openFilterMenu
  );
  const dispatch = useDispatch();
  const { getTrackProps, handles } = useRanger({
    min: 100,
    max: 1200,
    stepSize: 100,
    values,
    onChange: setValues,
  });

  const colorList = [
    '#156A45',
    '#393E4F',
    '#FFFFFF',
    '#000000',
    '#01FFCC',
    '#33CC00',
    '#9933CC',
    '#FF66CC',
    '#A30000',
    '#0000CC',
    '#FF0000',
    '#DEB887',
    '#FF9900',
    '#808080',
  ];
  const sizeList = [
    '4 US',
    '5 US',
    '6 US',
    '7 US',
    '8 US',
    '9 US',
    '10 US',
    '11 US',
    '12 US',
    '13 US',
  ];

  const CloseFilterMenu = () => {
    dispatch(setOpenFilterMenu(false));
  };

  return (
    <FilterMenuContainer active={openFilterMenu}>
      <FilterMenuContent>
        <Header>
          <h2>Filter & Sort</h2>
          <HeaderLeft>
            <span>Clear All</span>
            <CloseOutlined onClick={CloseFilterMenu} />
          </HeaderLeft>
        </Header>
        <Color>
          <span>Color</span>
          <ColorContainer>
            {colorList.map((color, index) => (
              <ColorCircle color={color} key={index} />
            ))}
          </ColorContainer>
        </Color>
        <Size>
          <span>Size</span>
          <SizeContainer>
            {sizeList.map((size, index) => (
              <SizeCircle key={index}>
                <span>{size}</span>
              </SizeCircle>
            ))}
          </SizeContainer>
        </Size>
        <PriceRage>
          <span>Price Range</span>
          <RangeSlider
            {...getTrackProps({
              style: {
                height: '4px',
                background: '#2C2C2C',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
                borderRadius: '2px',
              },
            })}
          >
            {handles.map(({ value, getHandleProps }) => (
              <ButtonSlider key={'buttonSlider'}>
                <button
                  {...getHandleProps({
                    style: {
                      width: '30px',
                      height: '30px',
                      outline: 'none',
                      borderRadius: '50%',
                      background: 'white',
                      border: 'solid 1px #888',
                    },
                  })}
                />
                <span>$ {value}</span>
              </ButtonSlider>
            ))}
          </RangeSlider>
        </PriceRage>
      </FilterMenuContent>
    </FilterMenuContainer>
  );
};

export default FilterMenu;
