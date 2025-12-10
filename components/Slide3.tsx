import React from 'react';
import SlideLayout from './SlideLayout';
import { motion } from 'framer-motion';

// Background Animation Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-10 left-20 w-96 h-96 bg-nu-primary rounded-full blur-[80px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        y: [0, -50, 0],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute bottom-10 right-20 w-[30rem] h-[30rem] bg-nu-secondary rounded-full blur-[100px]"
    />
  </div>
);

const BulletPoint = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2 mb-2 font-poppins text-sm text-gray-700">
    <span className="w-1.5 h-1.5 bg-gradient-to-r from-nu-primary to-nu-secondary rounded-full mt-2 flex-shrink-0" />
    <span>{text}</span>
  </li>
);

const Slide3: React.FC = () => {
  return (
    <SlideLayout
      title="Governança Locker"
      subtitle="Detalhe dos Treinamentos"
      tagline="Conteúdo técnico Locker & TABI"
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <AnimatedBackground />

        {/* Cards Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
          
          {/* Locker Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="bg-gradient-to-r from-nu-primary to-nu-secondary p-4 flex justify-between items-center">
               <div>
                  <h3 className="font-rubik text-2xl text-white font-bold">Locker</h3>
                  <p className="font-poppins text-nu-accent-2 text-sm">Atendentes</p>
               </div>
               <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-poppins">~ 3 min</span>
            </div>
            
            <div className="p-6 flex-1">
              <ul className="space-y-1">
                <BulletPoint text="Conceito de Agente Locker e bloqueios de jornada." />
                <BulletPoint text="Buffer de entrada/saída: como funciona." />
                <BulletPoint text="Importância do login/logout correto." />
                <BulletPoint text="Orientações práticas para o dia a dia." />
              </ul>
            </div>
          </motion.div>

          {/* TABI Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
             <div className="bg-gradient-to-r from-nu-secondary to-nu-accent-1 p-4 flex justify-between items-center">
               <div>
                  <h3 className="font-rubik text-2xl text-white font-bold">TABI</h3>
                  <p className="font-poppins text-nu-accent-2 text-sm">Liderança</p>
               </div>
               <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-poppins">~ 4 min</span>
            </div>
            
            <div className="p-6 flex-1">
              <ul className="space-y-1">
                <BulletPoint text="Registro, aprovação e qualificação de HE." />
                <BulletPoint text="Conexão TABI x Locker na prática." />
                <BulletPoint text="Boas práticas para uso responsável de Hora Extra." />
                <BulletPoint text="Visão gerencial de jornada." />
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Observation Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 mt-12 bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 max-w-3xl text-center"
        >
          <p className="font-poppins text-gray-500 text-sm">
            Conteúdos curtos, direcionados e pensados para <span className="font-semibold text-nu-primary">minimizar impacto na operação</span>.
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide3;