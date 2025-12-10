import React from 'react';
import SlideLayout from './SlideLayout';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  return (
    <SlideLayout
      title="Governança Locker"
      subtitle=""
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        
        {/* Background Decoration */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[80%] h-[80%] bg-gradient-to-b from-nu-primary/5 to-transparent rounded-full blur-3xl opacity-50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center z-10 space-y-8"
        >
          {/* Main Thank You Text */}
          <h1 className="font-rubik text-6xl md:text-7xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent">
            Obrigado
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vamos juntos garantir a excelência e a segurança da operação Nubank.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-nu-primary to-nu-secondary mx-auto rounded-full opacity-50 my-8" />

          {/* Contact Block */}
          <div className="space-y-4">
             <h3 className="font-rubik text-xl text-nu-primary font-medium">Dúvidas?</h3>
             <p className="font-poppins text-gray-500">Estamos à disposição</p>
             
             <div className="mt-6 bg-white shadow-lg border border-gray-100 rounded-xl px-8 py-4 inline-block transform hover:-translate-y-1 transition-transform duration-300">
               <span className="block text-xs font-bold text-nu-accent-1 uppercase tracking-widest mb-1">Contato</span>
               <code className="font-poppins text-nu-primary font-medium text-lg">
                 {'< AeC - Contact Center - Eficiencia Fora da PA >'}
               </code>
             </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 w-full text-center pb-4"
        >
          <p className="font-rubik text-xs text-gray-400 font-medium tracking-wider">
            NUBANK © 2025
          </p>
        </motion.footer>

      </div>
    </SlideLayout>
  );
};

export default Slide5;