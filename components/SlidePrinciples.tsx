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
      title="Princípios Innegociáveis"
      subtitle="Base para decisão, execução e liderança"
    >
      <div className="relative h-full w-full flex flex-col">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -top-10 -left-12 w-48 h-48 bg-nu-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-nu-sky/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-10 h-full">
          {/* Intro card */}
          <motion.div
            className="xl:col-span-1 bg-gradient-to-br from-nu-primary to-nu-secondary text-white rounded-2xl p-10 shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-white/80">Operação Nubank</p>
              <h2 className="font-rubik text-3xl leading-tight">O que nos guia em cada decisão</h2>
              <p className="text-base text-white/90 leading-relaxed">
                Cultura traduzida em ação: foco no simples, inovação constante e excelência na entrega.
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Alinhar expectativas de liderança e time.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Usar os princípios para orientar decisões rápidas.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Garantir consistência no dia a dia da operação.</span>
              </div>
            </div>
          </motion.div>

          {/* Principles list */}
          <motion.div
            className="xl:col-span-2 bg-white rounded-2xl shadow-lg border border-nu-primary/10 p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-nu-primary/70 uppercase tracking-widest">Princípios</p>
                <h3 className="font-rubik text-2xl text-nu-primary">Como agimos e decidimos</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-nu-primary/10 border border-nu-primary/20 flex items-center justify-center text-nu-primary font-bold">
                10
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 max-h-[60vh] overflow-y-auto pr-2">
              {PRINCIPLES.map((principle, index) => (
                <div key={principle} className="flex items-start gap-4 bg-nu-sky/5 rounded-xl px-4 py-3 border border-nu-primary/5">
                  <span className="text-nu-secondary font-bold text-sm mt-1">{index + 1}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
