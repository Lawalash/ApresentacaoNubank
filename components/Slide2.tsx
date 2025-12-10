import React from 'react';
import SlideLayout from './SlideLayout';
import { motion } from 'framer-motion';

// Simple check icon component
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nu-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Slide2: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <SlideLayout
      title="Governança Locker"
      subtitle="Contexto & Objetivos"
      tagline="Onde estamos e para onde vamos"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        
        {/* Column 1: Contexto Atual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h3 className="font-rubik text-2xl text-nu-primary mb-6 border-l-4 border-nu-secondary pl-4">
            Contexto Atual
          </h3>
          <div className="space-y-6 font-poppins text-gray-700 text-lg leading-relaxed">
            <p>
              A <strong>Governança Locker</strong> está em reta final de implementação nos segmentos críticos 
              <span className="text-nu-secondary font-semibold"> PJ_CHAT, PJ_CHAT_N2 e CSI_CHAT</span>.
            </p>
            <p>
              Os ajustes técnicos essenciais de agente, buffer e monitoramento já foram aplicados com sucesso.
            </p>
            <div className="bg-nu-primary/5 p-6 rounded-xl border border-nu-primary/10">
              <p className="font-semibold text-nu-primary mb-2">Necessidade Crítica:</p>
              <p>
                Garantir comportamento padronizado via <span className="underline decoration-nu-accent-2 decoration-2">treinamento massivo</span>,
                abordando uso correto do Locker, pausas, jornada, HE e integração TABI.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Objetivos da Expansão */}
        <div className="flex flex-col justify-center relative">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-rubik text-2xl text-nu-primary mb-6"
          >
            Objetivos da Expansão
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-nu-primary hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h4 className="font-rubik text-xl text-gray-800 font-medium">Alinhamento Único</h4>
                  <p className="font-poppins text-gray-600 mt-1 text-sm">Entendimento sobre tolerância, login/logout e bloqueios.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-nu-secondary hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h4 className="font-rubik text-xl text-gray-800 font-medium">Papel da Liderança</h4>
                  <p className="font-poppins text-gray-600 mt-1 text-sm">Fortalecer aprovação, qualificação e acompanhamento de HE via TABI.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-nu-accent-1 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h4 className="font-rubik text-xl text-gray-800 font-medium">Redução de Passivo</h4>
                  <p className="font-poppins text-gray-600 mt-1 text-sm">Sustentar a redução de riscos trabalhistas na jornada.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2;