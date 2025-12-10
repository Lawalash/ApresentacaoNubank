import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';
import nubankBg from "./assets/nubank-bg.svg";

export const Slide1: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout 
      {...props} 
      showSidebar={false} 
      backgroundImage={nubankBg}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#225B8E] via-[#2A898D]/90 to-[#2A898D]/40 z-0 pointer-events-none" />

      <div className="relative z-10 w-full h-full flex flex-row items-center px-16">
        
        {/* Left Content */}
        <div className="w-1/2 flex flex-col justify-center text-white space-y-2">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-rubik text-6xl font-bold leading-tight"
          >
            Governança <br /> Locker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-poppins text-2xl font-light text-nu-sky pt-2"
          >
            Conversa rápida sobre jornada, pausas e hora extra
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-1 bg-nu-cyan my-4 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-poppins text-lg opacity-90 font-medium tracking-wide"
          >
            Treinamentos rápidos: LOCKER (atendentes) + TABI (liderança)
          </motion.p>
        </div>

        {/* Right Content - Glass Card/Composition */}
        <div className="w-1/2 flex justify-center items-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-[80%] aspect-square bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-8 relative overflow-hidden"
          >
             {/* Decorative abstract shapes inside the card */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-nu-sky/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-nu-primary/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
             
             <div className="text-white text-center z-10">
                <h3 className="font-rubik text-3xl mb-2 font-semibold">Operação Nubank</h3>
                <p className="font-poppins text-sm opacity-90 leading-relaxed">
                  Alinhamento de liderança e supervisão<br/>para Locker e TABI.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
