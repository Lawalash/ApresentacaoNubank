import React from 'react';
import SlideLayout from './SlideLayout';
import { motion } from 'framer-motion';

const Slide4: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <SlideLayout
      title="Governança Locker"
      subtitle="Planejamento da Expansão"
      tagline="Definições da Liderança"
    >
      <div className="h-full flex flex-col">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full flex-grow content-center">
          
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-primary relative group"
          >
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-nu-primary/10 flex items-center justify-center text-nu-primary">
              1
            </div>
            <h3 className="font-rubik text-2xl text-nu-primary mb-4 font-medium group-hover:text-nu-secondary transition-colors">
              Ponto de Decisão
            </h3>
            <p className="font-poppins text-lg text-gray-700">
              Em quanto tempo conseguimos treinar <span className="font-bold">100% da operação NUBANK?</span>
            </p>
            <p className="font-poppins text-base text-gray-500 mt-2">
              Considerando ~3 min para Locker e ~4 min para TABI.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-secondary relative group"
          >
             <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-nu-secondary/10 flex items-center justify-center text-nu-secondary">
              2
            </div>
            <h3 className="font-rubik text-2xl text-nu-secondary mb-4 font-medium">
              Janela Ideal
            </h3>
            <p className="font-poppins text-lg text-gray-700">
              Qual a data de início e data limite para concluirmos os treinamentos de Locker (atendentes) e TABI (liderança)?
            </p>
          </motion.div>

          {/* Card 3 (Centered below) */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:max-w-xl mx-auto w-full bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-accent-1 relative group"
          >
             <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-nu-accent-1/10 flex items-center justify-center text-nu-accent-1">
              3
            </div>
            <h3 className="font-rubik text-2xl text-nu-accent-1 mb-4 font-medium text-center">
              Critério de Sucesso
            </h3>
            <p className="font-poppins text-lg text-gray-700 text-center">
              Qual o percentual mínimo de aderência que consideramos sucesso da etapa?
              <br/>
              <span className="text-sm text-gray-400 mt-1 block">(ex.: 95%, 98% ou 100%)</span>
            </p>
          </motion.div>

        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="font-poppins text-gray-600 bg-gray-50 inline-block px-6 py-3 rounded-lg border border-gray-200">
            <span className="font-bold text-nu-primary">Próximos passos:</span> Estruturar plano com Planejamento (pausas/janelas) e iniciar reports periódicos de aderência.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide4;