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
      className="relative min-h-screen flex items-center justify-center pt-16 transition-all duration-1000"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImages[currentImage]}
          alt="Bless Caring Background"
          className="w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(33, 120, 189, 0.6), rgba(140, 198, 65, 0.3))',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-10">
          <div className="text-white">
            YOUR COMPLETE <span style={{ color: '#8cc641' }}>HEALTH SOLUTION</span>
          </div>
        </h1>

        <div className="mt-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-md">
            <span style={{ color: '#8cc641' }}>Nurse-Led.</span>{' '}
            <span style={{ color: '#ffffff' }}>Personally Matched.</span>{' '}
            <span className="text-white">Always There.</span>
          </h2>

          <p className="text-lg md:text-xl font-light text-white/90">
            Care and support that fits your life — not the other way around.
          </p>
          <p className="text-sm md:text-base text-white/80 font-light">
            Australia’s trusted nurse-owned agency for Hospitals, Aged Care, and Home Care.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="flex items-center justify-center gap-2 bg-[#8cc641] text-[#2178bd] text-base md:text-lg font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <FaHeart className="text-sm" />
                Get Started
              </button>
            </a>
            <a href="#services">
              <button className="flex items-center justify-center gap-2 bg-white text-[#2178bd] border-2 border-[#8cc641] text-base md:text-lg font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <FaArrowRight className="text-sm" />
                Our Services
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
