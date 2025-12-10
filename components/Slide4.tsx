import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide4: React.FC<SlideProps> = (props) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <SlideLayout 
      {...props} 
      title="Governança Locker"
      subtitle="Planejamento da Expansão · Definições da Liderança"
    >
      <div className="flex flex-col h-full justify-center pb-8">
        
        {/* Grid Layout: 2 Top, 1 Bottom Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
          
          {/* Card 1: Ponto de Decisão */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="font-rubik text-xl text-nu-primary mb-3 font-semibold">Ponto de Decisão</h3>
            <p className="font-poppins text-gray-600 mb-2 leading-relaxed">
              Em quanto tempo conseguimos treinar <strong>100% da operação NUBANK</strong>?
            </p>
            <p className="font-poppins text-sm text-gray-400">
              Considerando ~2 min para Locker e ~2 min 30 para TABI.
            </p>
          </motion.div>

          {/* Card 2: Janela Ideal */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="font-rubik text-xl text-nu-mid mb-3 font-semibold">Janela Ideal</h3>
            <p className="font-poppins text-gray-600 leading-relaxed">
              Qual a data de início e data limite para concluirmos Locker (atendentes) e TABI (liderança)?
            </p>
          </motion.div>

          {/* Card 3: Critério de Sucesso - Centered */}
          <div className="md:col-span-2 md:w-2/3 md:mx-auto w-full">
            <motion.div 
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-nu-primary to-nu-secondary text-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="font-rubik text-2xl mb-4 font-semibold">Critério de Sucesso</h3>
              <p className="font-poppins text-lg leading-relaxed">
                Qual o percentual mínimo de aderência que consideramos sucesso da etapa?
              </p>
              <p className="font-poppins text-nu-sky font-bold mt-2 text-xl">
                (ex.: 95%, 98% ou 100%)
              </p>
            </motion.div>
          </div>

        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="font-poppins text-nu-primary/80 text-sm font-medium border-t border-gray-200 pt-6 inline-block px-8">
            Próximos passos: plano conjunto (Operação + Governança de Jornada + Planejamento) com pausas/janelas e reports periódicos de aderência.
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};
