import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';

// This component acts as the "Presentation.tsx" mentioned in the prompt
// allowing the user to view all slides.
const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  const nextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(curr => curr - 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1: return <Slide1 key="slide1" />;
      case 2: return <Slide2 key="slide2" />;
      case 3: return <Slide3 key="slide3" />;
      case 4: return <Slide4 key="slide4" />;
      case 5: return <Slide5 key="slide5" />;
      default: return <Slide1 key="slide1" />;
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gray-50 text-gray-800 font-poppins">
      
      {/* Slide Content */}
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          {renderSlide()}
        </AnimatePresence>
      </div>

      {/* Navigation Controls (Simulation of the Presentation component controls) */}
      <div className="absolute bottom-4 right-4 z-50 flex gap-4">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="px-4 py-2 bg-nu-primary text-white rounded-lg shadow disabled:opacity-50 hover:bg-nu-secondary transition-colors font-rubik"
        >
          Anterior
        </button>
        <span className="px-4 py-2 bg-white rounded-lg shadow text-nu-primary font-bold font-rubik">
          {currentSlide} / {totalSlides}
        </span>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="px-4 py-2 bg-nu-primary text-white rounded-lg shadow disabled:opacity-50 hover:bg-nu-secondary transition-colors font-rubik"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default App;