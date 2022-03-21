import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { ColorSelector, LikeButton } from '../components';
import { Variant, ProductProps } from '../types/product';

const ProductCardContainer = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.002);
  }
`;

const ProductHeader = styled.div`
  width: 100%;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const ProductType = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #bebebe;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
`;

const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #6bbbff;
`;

const ProductFirstPrice = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #fe6969;
  text-decoration: line-through;
`;

const ProductPriceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );
  const [liked, setLiked] = useState<boolean>(false);
  const router = useRouter();

  const usageVariants = [
    ...new Map(product.variants.map((item) => [item['color'], item])).values(),
  ];

  const linkToDetailPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { parentElement } = target;
    if (
      target.id.includes('color') ||
      target.id === 'like-btn' ||
      parentElement?.id === 'heart-icon'
    )
      return;
    router.push(`/product/${product.id}`);
  };

  return (
    <ProductCardContainer
      onClick={linkToDetailPage}
      id={`product-card-${product.id}`}
    >
      <ProductHeader>
        <ProductName>{product.name}</ProductName>
        <ProductType>{product.brand}</ProductType>
      </ProductHeader>
      <ProductImageContainer>
        <Image
          alt='product image'
          src={selectedVariant.imageUrl}
          layout={'fill'}
          objectFit={'cover'}
        />
      </ProductImageContainer>
      <ColorSelector
        size={'sm'}
        variants={usageVariants}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
      <ProductFooter>
        <ProductPriceContainer>
          <ProductPrice>
            ${(selectedVariant.price - selectedVariant.discount).toFixed(2)}
          </ProductPrice>
          {selectedVariant.discount === 0 && (
            <ProductFirstPrice>${selectedVariant.price}</ProductFirstPrice>
          )}
        </ProductPriceContainer>
        <LikeButton size={'sm'} liked={liked} setLiked={setLiked} />
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
