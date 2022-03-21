import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product, Variant } from '../types/product';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import BackButton from './BackButton';
import Spinner from './Spinner';
import LikeButton from './LikeButton';
import axios from 'axios';

const ProductDetailContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const ProductImageContainer = styled.div`
  position: relative;
  flex: 1;
`;

const ProductDetailData = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 24px 0;

  h1 {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }

  span {
    font-size: 16px;
    font-weight: 300;
    color: #bebebe;
  }
`;

const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 30px 0;

  span {
    color: #bebebe;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    color: #fe6969;
    text-decoration: line-through;
    margin: 0 0 4px 8px;
  }
`;

const ProductOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 49px 0;
`;

const ProductOptionsColor = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #bebebe;
    margin-bottom: 8px;
  }
`;

const ProductOptionsSize = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span:not(span:last-child) {
    color: #bebebe;
    margin-bottom: 13px;
  }
`;

const ProductDetailFooter = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 60px 0 38px 0;
  align-items: center;
`;

const AddToCartButton = styled.div<{ disabled: boolean }>`
  width: 400px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  background-color: ${({ disabled }) => (disabled ? '#BEBEBE' : '#6BBBFF')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  h3 {
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    user-select: none;
  }
`;

const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: #cecece;
`;

const ProductDetailCard: React.FC<{ product: Product }> = ({ product }) => {
  const usageColorVariants = [
    ...new Map(product.variants.map((item) => [item['color'], item])).values(),
  ];
  const [selectedColorVariant, setSelectedColorVariant] = useState<Variant>(
    usageColorVariants[0]
  );
  const usageSizeVariant = product.variants.filter(
    (variant) => variant.color === selectedColorVariant.color
  );
  const [selectedSizeVariant, setSelectedSizeVariant] =
    useState<Variant | null>(null);
  const usageAmountVariant = product.variants.filter(
    (variant) =>
      variant.size === selectedSizeVariant?.size &&
      variant.color === selectedColorVariant.color
  );
  const [selectedAmountVariant, setSelectedAmountVariant] = useState<number>(1);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    setSelectedSizeVariant(null);
  }, [selectedColorVariant]);

  useEffect(() => {
    setSelectedAmountVariant(1);
  }, [selectedColorVariant, selectedSizeVariant]);

  const onAddToCart = async () => {
    if (!selectedSizeVariant) return;
    await axios
      .post('https://asia-southeast1-muze-academy.cloudfunctions.net/cart', {
        sku: selectedSizeVariant.sku,
        qty: selectedAmountVariant,
      })
      .then((res) => {
        if (confirm('Add product to cart successfully!')) {
          window
            .open(
              `https://asia-southeast1-muze-academy.cloudfunctions.net/cart/${res.data.id}`,
              '_blank'
            )
            ?.focus();
        }
      });
  };

  return (
    <ProductDetailContainer>
      <BackButton />
      <ProductImageContainer>
        <Image
          src={selectedColorVariant.imageUrl}
          alt=''
          layout={'fill'}
          objectFit={'cover'}
        />
      </ProductImageContainer>
      <ProductDetailData>
        <ProductName>
          <h1>{product.name}</h1>
          <span>{product.brand}</span>
        </ProductName>
        <HorizontalLine />
        <ProductPriceContainer>
          <span>Price</span>
          <ProductPrice>
            <h3>
              ${' '}
              {(
                selectedColorVariant.price - selectedColorVariant.discount
              ).toFixed(2)}
            </h3>
            <span>{selectedColorVariant.price}</span>
          </ProductPrice>
        </ProductPriceContainer>
        <HorizontalLine />
        <ProductOptionsContainer>
          <ProductOptionsColor>
            <span>Color</span>
            <ColorSelector
              size='md'
              variants={usageColorVariants}
              selectedVariant={selectedColorVariant}
              setSelectedVariant={setSelectedColorVariant}
            />
          </ProductOptionsColor>
          <ProductOptionsSize>
            <span>Size</span>
            <SizeSelector
              variants={usageSizeVariant}
              selectedVariant={selectedSizeVariant}
              setSelectedVariant={setSelectedSizeVariant}
            />
          </ProductOptionsSize>
        </ProductOptionsContainer>
        <HorizontalLine />
        <ProductDetailFooter>
          <Spinner
            variant={usageAmountVariant[0]}
            selectedAmount={selectedAmountVariant}
            setSelectedAmount={setSelectedAmountVariant}
          />
          <AddToCartButton
            onClick={onAddToCart}
            disabled={!selectedSizeVariant}
            id='add-to-cart'
          >
            <h3>Add to cart</h3>
          </AddToCartButton>
          <LikeButton size='md' liked={liked} setLiked={setLiked} />
        </ProductDetailFooter>
      </ProductDetailData>
    </ProductDetailContainer>
  );
};

export default ProductDetailCard;
