// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NikeIcon from '../assets/nike.png';
import AdidasIcon from '../assets/adidas.png';
import PumaIcon from '../assets/puma.png';
import ReebokIcon from '../assets/reebok.png';
import UnderArmourIcon from '../assets/underarmour.png';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100%; 
  overflow-y: hidden; 
  margin: 0 auto;
  padding: 20px;
`;

const BrandIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandIcons = [
    { src: NikeIcon, alt: 'Nike' },
    { src: AdidasIcon, alt: 'Adidas' },
    { src: PumaIcon, alt: 'Puma' },
    { src: ReebokIcon, alt: 'Reebok' },
    { src: UnderArmourIcon, alt: 'Under Armour' },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {brandIcons.map((icon, index) => (
          <BrandIcon key={index}>
            <img src={icon.src} alt={icon.alt} />
          </BrandIcon>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
