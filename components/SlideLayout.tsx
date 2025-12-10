import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayoutProps } from '../types';
import timeLogo from "./assets/time-logo.png";

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  showSidebar = true,
  slideNumber,
  totalSlides,
  onNext,
  onPrev,
  title,
  subtitle,
  backgroundImage
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-poppins text-nu-primary selection:bg-nu-sky selection:text-white flex">
      {/* Background Image if provided (mostly for Slide 1) */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Sidebar */}
      {showSidebar && (
        <aside className="h-full w-[4%] min-w-[60px] bg-gradient-to-b from-nu-primary to-nu-secondary flex flex-col justify-end items-center pb-8 shadow-lg z-20 shrink-0">
          {/* Logo Vertical - using img tag as requested */}
          <img 
          src={timeLogo} 
          alt="Time Logo" 
          className="object-contain rotate-90"
          style={{ maxWidth: '300%', height: 'auto', marginBottom: '70px' }}
        />
        </aside>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col relative z-10 ${showSidebar ? 'px-12 py-10' : ''}`}>
        
        {/* Header for Content Slides */}
        {showSidebar && title && (
          <header className="mb-8">
            <h1 className="font-rubik text-4xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <h2 className="font-poppins text-xl text-nu-mid mt-1 font-medium">
                {subtitle}
              </h2>
            )}
            <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-nu-primary to-nu-sky opacity-60 rounded-full" />
          </header>
        )}

        {/* Content Children */}
        <div className="flex-1 relative">
          {children}
        </div>

        {/* Footer / Navigation */}
        <footer className={`absolute bottom-6 right-8 flex items-center gap-6 ${!showSidebar ? 'text-white' : 'text-nu-secondary'}`}>
          <span className="font-poppins text-sm opacity-80 font-medium">
            {slideNumber} / {totalSlides}
          </span>
          
          <div className="flex gap-3">
            <button 
              onClick={onPrev}
              className={`p-2 rounded-full hover:bg-black/10 transition-colors ${slideNumber === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              disabled={slideNumber === 1}
            >
              {/* Triangle Left */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={onNext}
              className={`p-2 rounded-full hover:bg-black/10 transition-colors ${slideNumber === totalSlides ? 'opacity-30 cursor-not-allowed' : ''}`}
              disabled={slideNumber === totalSlides}
            >
              {/* Triangle Right */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};
