import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainCarousel.css';
import imagecarroussel from './imagecarroussel.png'
import imagemcarrosel2 from './imagemcarrosel2.png'

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="custom-dot"></div>
    )
  };

  const slides = [
    {
      image: imagecarroussel,
      title: 'Lava Rápido mais próximo'
    },
    {
      image: imagemcarrosel2,
      title: 'Lava-rápidos com selos de sustentabilidade!'
    }
  ];

  return (
    <div style={{width:'80%', marginLeft:'10%'}}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
              <h3 className="text-white text-lg font-semibold">{slide.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;