import React, { useCallback, useEffect, useState } from 'react';
import { Slide1 } from './components/Slide1';
import { SlidePrinciples } from './components/SlidePrinciples';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        nextSlide();
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const commonProps = {
    slideNumber: currentSlide,
    totalSlides,
    onNext: nextSlide,
    onPrev: prevSlide,
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 {...commonProps} />;
      case 2:
        return <SlidePrinciples {...commonProps} />;
      case 3:
        return <Slide2 {...commonProps} />;
      case 4:
        return <Slide3 {...commonProps} />;
      case 5:
        return <Slide4 {...commonProps} />;
      case 6:
        return <Slide5 {...commonProps} />;
      default:
        return <Slide1 {...commonProps} />;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* 
        This wrapper ensures the 16:9 aspect ratio is maintained relative to the screen,
        or allows it to be full screen. For presentation mode, we usually want full screen.
        Here we simply render the slide component which handles full screen layout.
      */}
      {renderSlide()}
    </div>
  );
};
