import React from 'react';

export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  slideNumber: number;
  totalSlides: number;
}

export interface SlideLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  slideNumber: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}