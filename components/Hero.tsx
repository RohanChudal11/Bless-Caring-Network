'use client';

import { useEffect, useState } from 'react';
import { FaArrowRight, FaHeart } from 'react-icons/fa';

const backgroundImages = [
  '/backgrounds/hero1.jpeg',
  '/backgrounds/hero2.jpeg',
  '/backgrounds/hero3.jpeg',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 md:px-8 transition-all duration-1000"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImages[currentImage]}
          alt="Bless Caring Background"
          className="w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2178bd99] to-[#8cc6414d]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto text-white animate-fadeInUp space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          YOUR COMPLETE{' '}
          <span className="text-[#8cc641]">HEALTH SOLUTION</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-md leading-snug">
          <span className="text-[#8cc641]">Nurse-Led.</span>{' '}
          <span className="text-white">Personally Matched.</span>{' '}
          <span>Always There.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-light text-white/90">
          Care and support that fits your life — not the other way around.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-light">
          Australia’s trusted nurse-owned agency for Hospitals, Aged Care, and Home Care.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
          <a href="#contact">
            <button className="flex items-center justify-center gap-2 bg-[#8cc641] text-[#2178bd] text-sm sm:text-base md:text-lg font-bold py-3 px-6 sm:px-8 rounded-full shadow-md hover:scale-105 transition-all duration-300">
              <FaHeart className="text-sm" />
              Get Started
            </button>
          </a>
          <a href="#services">
            <button className="flex items-center justify-center gap-2 bg-white text-[#2178bd] border-2 border-[#8cc641] text-sm sm:text-base md:text-lg font-bold py-3 px-6 sm:px-8 rounded-full shadow-md hover:scale-105 transition-all duration-300">
              <FaArrowRight className="text-sm" />
              Our Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
