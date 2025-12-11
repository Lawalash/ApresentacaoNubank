import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide2: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout 
      {...props} 
      title="Governança Locker"
      subtitle="Contexto & Objetivos · Onde estamos e para onde vamos"
    >
      <div className="grid grid-cols-12 gap-8 h-full">
        {/* Left Column: Context */}
        <motion.div 
          className="col-span-12 lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-nu-primary/5 p-2 px-4 rounded-lg inline-block w-fit">
            <span className="text-sm font-bold text-nu-primary uppercase tracking-wider">Operações · Nubank</span>
          </div>

          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-secondary shadow-sm">
            <h3 className="font-rubik text-2xl text-nu-primary mb-4">Contexto Atual</h3>
            <ul className="space-y-4 font-poppins text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-mid shrink-0" />
                <span>Governança Locker ativa nos squads PJ_CHAT, PJ_CHAT_N2 e CSI_CHAT pronta para a operação completa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-mid shrink-0" />
                <span>Ajustes técnicos de agente, buffer e monitoramento já concluídos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-mid shrink-0" />
                <span className="text-nu-primary font-medium">Gargalo agora é aderência aos treinamentos Locker (atendentes) e TABI (liderança).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-mid shrink-0" />
                <span>Sem treinamento, aumentam riscos de jornada fora do horário, pausas sem registro e HE sem controle.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column: Objectives */}
        <motion.div 
          className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-nu-primary to-nu-secondary rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <h3 className="font-rubik text-2xl mb-6 border-b border-white/20 pb-2">Objetivos da Expansão</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-nu-sky text-lg mb-1">Locker na ponta</h4>
                <p className="text-sm opacity-90">Atendentes treinados para abrir/fechar jornada certo e respeitar pausas.</p>
              </div>

              <div>
                <h4 className="font-bold text-nu-sky text-lg mb-1">TABI na liderança</h4>
                <p className="text-sm opacity-90">Supervisores qualificados para aprovar HE e dar rastreabilidade.</p>
              </div>

              <div>
                <h4 className="font-bold text-nu-sky text-lg mb-1">Operação segura</h4>
                <p className="text-sm opacity-90">Jornada correta, pausas NR 17 garantidas e menor risco trabalhista.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
