import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BrandCards from '../components/BrandCards'
import FeatureS2 from '../components/FeatureS2'
import Text from '../components/Text'
import TestimonialSlider from '../components/TestimonialSlider'
import WhatsAppPopup from '../Animation/WhatsAppPopup'

function Shop() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures it runs once when the component mounts
    
  return (
    <>
    <div className="relative min-h-screen">

    <div className="fixed w-full z-10">
            <Navbar />
          </div>
          <img 
  src="img/rt.png" 
  alt="Gym Image" 
  className="w-full h-[150px] sm:h-[400px] md:h-[500px] object-cover"
/>

<BrandCards/>
<Text title="STORE GYM CITY" />
<div class="w-full bg-red-500 text-white font-bold py-2">
    <marquee behavior="scroll" direction="left" scrollamount="8">
        ⚡ Gym Protein Powder ke Prices Fix Nahi Hain! Prices Regularly Change Hote Rehte Hain. Latest Price Ke Liye Shop Par Visit Karein! 🏋️‍♂️🔥
    </marquee>
</div>

<div className="flex items-center w-full mt-6 p-4">
          <p className="text-xl md:text-3xl font-semibold whitespace-nowrap rajdhani-font">protein supplement</p>
          <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
        </div>

<FeatureS2/>
<div class="w-full bg-red-500 text-white font-bold py-2">
    <marquee behavior="scroll" direction="left" scrollamount="8">
        ⚡ Gym Protein Powder Prices Are Not Fixed! Prices Keep Changing. Visit Our Shop for the Latest Price! 🏋️‍♂️🔥
    </marquee>
</div>

<TestimonialSlider/>

<div class="container mx-auto px-4 py-8 text-justify">
    <h1 class="text-2xl md:text-3xl font-bold mb-4 ">
        Authentic Online Supplement Store in India for Whey Protein, Health, Nutrition & Bodybuilding
    </h1>
    <p class="text-gray-500 mb-6 rajdhani-font ">
        Nutrabay is India’s trusted and fastest-growing nutrition and online supplement store with a wide range of products for health, wellness, fitness & bodybuilding, making them easy to purchase & accessible all over India.
    </p>

    <h2 class="text-xl font-semibold mb-2">Our Speciality</h2>
    <p class="text-gray-500 mb-6 rajdhani-font ">
        You get all products delivered directly from us, without any middlemen or 3rd party sellers. Additionally, we are certified by all the brands or their official Indian supplement importers for authentic supplements. 
        This ensures that you always get an authentic supplement as the entire supply chain is controlled by us. Customer satisfaction and happiness is our number 1 priority, we deliver this by ensuring a great user experience, 
        fast delivery, and high-quality products. Nutrabay is not only a multi-brand store with many top International and Indian brands but since April 2019, we have launched our own supplement range with a huge level of success 
        and customer appreciation. Committed to providing you genuine products at price points that are fair and affordable by all. We often run a lot of freebie offers with top products like samples, gym gloves, shakers, 
        gym bags, t-shirts, and more to keep customers satisfied. A company run by young and enthusiastic people whose mission is to help India become a fitter and stronger nation and are committed to bringing quality products to support this cause.
    </p>

    <h2 class="text-xl font-semibold mb-2">Products we offer</h2>
    <p class="text-gray-500 mb-6 rajdhani-font ">
        We offer products for Bodybuilding, Weight Loss, Wellness, and Accessories. Our best-seller products and categories include Whey Proteins, Mass Gainers, Vitamins, BCAAs, Creatine, Pre-Workouts. 
        We list and fulfill all popular and top supplement brands in India. Our best-seller brands include Nutrabay,<span className='text-orange-600'>gym city</span> Optimum Nutrition, Ultimate Nutrition, MuscleBlaze, Dymatize, GNC, Universal Nutrition, GAT Sport, MuscleTech, MusclePharm, and many more.
    </p>

    <h2 class="text-xl font-semibold mb-2">Authenticity Guarantee</h2>
    <p class="text-gray-500 rajdhani-font ">
        Nutrabay is the only online supplement store in India that can truly guarantee authenticity. When purchasing from our website, you never have to worry about getting a harmful substance and be 100% confident in what you get.
    </p>
</div>

<WhatsAppPopup/>
          </div>
    </>
  )
}

export default Shop














