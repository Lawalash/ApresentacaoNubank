import React from 'react';
import { motion } from 'framer-motion';

const nubankImage = "components/imagens/nubank.png";

const Slide1: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex bg-gradient-to-br from-nu-primary to-nu-secondary relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white opacity-5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-nu-accent-2 opacity-10 rounded-full blur-[120px]" />

      <div className="w-full h-full flex flex-row items-center px-16 lg:px-24 relative z-10">
        
        {/* Left Side: Text */}
        <div className="w-1/2 flex flex-col justify-center text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-rubik text-6xl lg:text-7xl font-bold leading-tight mb-2">
              Governança Locker
            </h1>
            <h2 className="font-poppins text-2xl lg:text-3xl font-light text-nu-accent-2">
              Treinamentos TABI & Locker · Nubank
            </h2>
          </motion.div>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] w-32 bg-white/50 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-poppins tracking-wide uppercase font-semibold text-lg text-white/90"
          >
            Governança & Excelência Operacional
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-poppins text-sm text-white/70 mt-8"
          >
            Operações · Time de Governança Locker
          </motion.p>
        </div>

        {/* Right Side: Visual */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-[90%] max-w-[600px] aspect-square flex items-center justify-center"
          >
             {/* Abstract backdrop for image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-[40px] rotate-3 transform shadow-2xl backdrop-blur-sm border border-white/10" />
             
             {/* Actual Image container */}
             <div className="absolute inset-4 rounded-[30px] overflow-hidden shadow-inner bg-black/20">
                <img 
                  src={nubankImage} 
                  alt="Nubank Concept" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback visual if image is missing
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-nu-primary');
                    (e.target as HTMLImageElement).parentElement!.innerHTML += '<div class="text-white font-rubik text-4xl font-bold">Nu</div>';
                  }}
                />
             </div>
             
             {/* Glow effect */}
             <div className="absolute -inset-4 bg-nu-accent-2 opacity-20 blur-2xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide1;