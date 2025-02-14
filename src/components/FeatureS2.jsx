import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureS2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const trainingItems = [
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-NUT-1061-05-01.jpg', name: 'One-on-One Training', discount: 'Upto 37% OFF', price: '₹1,229', oldPrice: '₹1,849' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/10/NB-NUT-1011-01-01.jpg', name: 'Group Personal Training', discount: 'Upto 34% OFF', price: '₹1,595', oldPrice: '₹2,399' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/12/NB-ATH-1000-02-01.jpg', name: 'Zumba', discount: 'Upto 43% OFF', price: '₹1,424', oldPrice: '₹2,499' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-01x.jpg', name: 'Spin/Cycling', discount: 'Upto 19% OFF', price: '₹792', oldPrice: '₹980' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2022/01/NB-MUT-1015-32-01x.jpg', name: 'Strength Training', discount: 'Upto 29% OFF', price: '₹1,599', oldPrice: '₹2,099' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/11/NB-NUT-1054-04-01.jpg', name: 'Fitness Challenges', discount: 'Upto 36% OFF', price: '₹862', oldPrice: '₹1,249' },
  ];

  const creatineItems = [
    { img: 'img/01.png', name: 'Nutrabay Pure Creatine Monohydrate Micronised - 100 gm', discount: 'Upto 30% OFF', price: '₹1,499', oldPrice: '₹2,100' },
    { img: 'img/02.png', name: 'Nutrabay Gold Micronized Creatine Monohydrate - 120 gm (0.26 Lb), Orange', discount: 'Upto 25% OFF', price: '₹1,299', oldPrice: '₹1,750' },
    { img: 'img/03.png', name: ' GNC Pro Performance Creatine Monohydrate - 250 gm (0.55 Lb) Unflavoured ', discount: 'Upto 20% OFF', price: '₹1,899', oldPrice: '₹2,400' },
    { img: 'img/04.png', name: 'Wellcore Creatine Monohydrate Micronised', discount: 'Upto 35% OFF', price: '₹1,699', oldPrice: '₹2,599' },
    { img: 'img/05.png', name: 'Kaged Muscle Creatine HCl  - 45.36 gm (0.09 Lb) Lemon Lime,', discount: 'Upto 28% OFF', price: '₹1,999', oldPrice: '₹2,800' },
    { img: 'img/40.png ', name: 'Big Daddy Nutrition Creatine Monohydrate, 300g', discount: 'Upto 40% OFF', price: '₹1,299', oldPrice: '₹2,199' },
  ]; 
  



  return (
    <div className="container mx-auto px-4 py-8">
      {/* Training Programs Section */}
      <Slider {...settings}>
        {trainingItems.map((item, index) => (
          <div key={index} className="slider-box p-4 rounded-lg text-center relative">
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              {item.discount}
            </div>
            <img src={item.img} alt={item.name} className="w-full h-auto max-w-full object-cover rounded-md mb-4" />
            <p className="text-[#0A192F] rajdhani-font font-semibold text-sm md:text-base lg:text-lg">
              {item.name}
            </p>
            <p className="text-black font-bold text-lg">
              From <span className="text-black font-extrabold">{item.price}</span> 
              <span className="text-gray-400 line-through">{item.oldPrice}</span>
            </p>
          </div>
        ))}
      </Slider>

      {/* Creatine Products Section */}
      
      <div className="flex items-center w-full mt-6 p-4">
        
          <p className="text-xl md:text-3xl font-semibold whitespace-nowrap rajdhani-font">creatine </p>
          <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
        </div>      <Slider {...settings}>
        {creatineItems.map((item, index) => (
          <div key={index} className="slider-box p-4 rounded-lg text-center relative">
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              {item.discount}
            </div>
            <img src={item.img} alt={item.name} className="w-full h-auto max-w-full object-cover rounded-md mb-4" />
            <p className="text-[#0A192F] rajdhani-font font-semibold text-sm md:text-base lg:text-lg">
              {item.name}
            </p>
            <p className="text-black font-bold text-lg">
              From <span className="text-black font-extrabold">{item.price}</span> 
              <span className="text-gray-400 line-through">{item.oldPrice}</span>
            </p>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default FeatureS2;
