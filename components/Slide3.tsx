import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide3: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout 
      {...props} 
      title="Governança Locker"
      subtitle="Detalhe dos Treinamentos · Conteúdo técnico Locker & TABI"
    >
      <div className="relative h-full flex flex-col">
        {/* Background Ambient Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-nu-sky/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nu-mid/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 flex-1">
          
          {/* Card LOCKER */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-mid hover:shadow-xl transition-shadow h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-rubik text-2xl text-nu-primary">Locker · Atendentes</h3>
              <span className="bg-nu-sky/20 text-nu-primary text-xs font-bold px-3 py-1 rounded-full">~ 2 minutos</span>
            </div>

            <ul className="space-y-4 font-poppins text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Abre sozinho no início da jornada e acompanha todo o expediente.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Só libera login dentro do horário e desconecta ao término.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Hora extra só roda se o supervisor registrar a HE.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Importante clicar em “OK” nos status e “Sair” ao encerrar a jornada.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Pausas NR 17: Locker mostra quando fazer; pausa é direito, não luxo.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Histórico mostra tempo trabalhado, saldo e previsão de saída.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Mensagem central: Locker traz tranquilidade, controle e segurança ao atendente.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card TABI */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-secondary hover:shadow-xl transition-shadow h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-rubik text-2xl text-nu-secondary">TABI · Liderança</h3>
              <span className="bg-nu-secondary/20 text-nu-secondary text-xs font-bold px-3 py-1 rounded-full">~ 2 min 30</span>
            </div>

            <ul className="space-y-4 font-poppins text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Ferramenta de controle inteligente de jornada integrada ao Locker e ao ponto.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>HE aprovada no TABI gera jornada precisa, segura e rastreável no Locker.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Fluxo: checar bolsão/período, horas disponíveis e distribuir por matrícula.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Limite máximo de 1h45 de HE por operador.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Visualize a lista de operadores com HE atribuída.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Boas práticas: não passar do limite, não autorizar em baixo volume, não usar só planilhas.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Mensagem central: TABI é a fotografia da operação e apoio para decisões seguras.</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Text */}
        <motion.p 
          className="text-center font-poppins text-gray-500 text-sm mt-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Vídeos curtos, fáceis de consumir e feitos para dar segurança e baixo impacto na operação.
        </motion.p>
      </div>
    </SlideLayout>
  );
};
