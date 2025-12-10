import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

const PRINCIPLES = [
  "ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
  "FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
  "SÓ ACREDITAMOS NO SIMPLES.",
  "SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
  "TEMOS FOCO.",
  "ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
  "NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
  "SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
  "SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
  "SOMOS FELIZES COM O QUE FAZEMOS."
];

export const SlidePrinciples: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout
      {...props}
      title="Princípios Inegociáveis"
      subtitle="Base para decisão, execução e liderança"
    >

      <div className="relative h-full w-full flex flex-col">
        {/* Content - Two columns layout */}
        <div className="flex-1 flex gap-16 relative">
          {/* Left side - Title */}
          <motion.div
            className="w-1/3 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-nu-primary/60 uppercase tracking-widest mb-2">Operação Nubank</p>
                <h2 className="font-rubik text-5xl font-bold text-nu-primary leading-tight">
                  PRINCÍPIOS<br />INEGOCIÁVEIS
                </h2>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-nu-primary to-nu-sky rounded-full" />
              <p className="text-base text-gray-600 leading-relaxed">
                O que nos guia em cada decisão: foco no simples, inovação constante e excelência na entrega.
              </p>
            </div>
          </motion.div>

          {/* Right side - Principles list */}
          <motion.div
            className="w-2/3 flex flex-col overflow-y-auto pr-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <motion.div
                  key={principle}
                  className="flex items-start gap-6 pb-4 border-b border-nu-primary/10 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <span className="text-nu-secondary font-bold text-lg min-w-[40px] pt-1">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <p className={`text-base leading-relaxed pt-1 ${index === 1 ? 'text-gray-900 font-bold' : 'text-gray-700 font-medium'}`}>
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};