import React from 'react';
import { motion } from 'framer-motion';

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

export const SlidePrinciples: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-poppins text-nu-primary selection:bg-nu-sky selection:text-white flex">
      {/* Sidebar */}
      <aside className="h-full w-[4%] min-w-[60px] bg-gradient-to-b from-nu-primary to-nu-secondary flex flex-col justify-end items-center pb-8 shadow-lg z-20 shrink-0">
        {/* Logo */}
        <div className="w-12 h-32 bg-white/10 rounded opacity-60" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 px-12 py-10">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-rubik text-4xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent">
            Princípios Inegociáveis
          </h1>
          <h2 className="font-poppins text-xl text-nu-mid mt-1 font-medium">
            Base para decisão, execução e liderança
          </h2>
          <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-nu-primary to-nu-sky opacity-60 rounded-full" />
        </header>

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
                  <p className="text-base text-gray-700 leading-relaxed font-medium pt-1">
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer / Navigation */}
        <footer className="absolute bottom-6 right-8 flex items-center gap-6 text-nu-secondary">
          <span className="font-poppins text-sm opacity-80 font-medium">
            3 / 5
          </span>
          
          <div className="flex gap-3">
            <button className="p-2 rounded-full hover:bg-black/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-black/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};