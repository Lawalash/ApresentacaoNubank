import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide5: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout 
      {...props} 
      title="Governança Locker"
      // Using sidebar for consistency, though optional per prompt
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        
        {/* Main Thank You Message */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-rubik text-7xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent mb-6">
            Obrigado
          </h1>
          <p className="font-poppins text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Governança Locker é pilar de excelência e segurança; treinamentos LOCKER + TABI são o passo mínimo para jornada correta.
          </p>
        </motion.div>

        {/* Contact Block */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="font-rubik text-xl text-nu-primary mb-2">Dúvidas?</h3>
          <p className="font-poppins text-gray-500 mb-4">Estamos à disposição</p>
          
          <div className="bg-white px-6 py-3 rounded-full border border-nu-sky/30 shadow-sm">
             <span className="font-poppins font-medium text-nu-secondary">
               &lt; AeC - Contact Center - Eficiencia Fora da PA &gt;
             </span>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 font-poppins text-lg text-nu-primary font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Vamos garantir 100% de aderência aos treinamentos.
        </motion.p>

        {/* Final Copyright */}
        <div className="absolute bottom-4 text-center">
          <p className="text-xs text-gray-300 font-poppins">TRANSFORMAÇÃO DIGITAL & IA © 2025</p>
        </div>

      </div>
    </SlideLayout>
  );
};
