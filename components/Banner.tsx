import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCard = styled.div`
  width: 100%;
  height: 530px;
  position: relative;
`;

const Banner: React.FC = () => {
  const banners = [
    { name: 'first banner', image: '/images/banner1.png' },
    { name: 'second banner', image: '/images/banner2.png' },
    { name: 'third banner', image: '/images/banner3.png' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <Slider {...sliderSettings}>
      {banners.map((banner) => (
        <BannerCard key={banner.name}>
          <Image src={banner.image} alt={banner.name} layout={'fill'} objectFit={'cover'} />
        </BannerCard>
      ))}
    </Slider>
  );
};

export default Banner;
