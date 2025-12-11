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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {/* Left Column: KPIs + Resumo Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-secondary shadow-sm h-full flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-rubik font-bold text-nu-primary mb-2">
                Status do piloto · Nubank
              </h3>
              <p className="text-xs font-poppins text-gray-600">
                Pilotado nos segmentos{' '}
                <span className="font-semibold">PJ_CHAT, PJ_CHAT_N2 e CSI_CHAT</span>.
              </p>
            </div>

            {/* Chips de segmentos */}
            <div className="flex flex-wrap gap-2">
              {['PJ_CHAT', 'PJ_CHAT_N2', 'CSI_CHAT'].map((seg) => (
                <span
                  key={seg}
                  className="px-3 py-1 rounded-full text-[11px] font-medium font-poppins bg-nu-surface text-nu-primary border border-nu-primary/10"
                >
                  {seg}
                </span>
              ))}
            </div>

            {/* KPIs principais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* KPI Locker Ativos */}
              <div className="bg-gradient-to-br from-nu-primary/10 to-nu-secondary/5 rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  LOCKER · Ativos (piloto)
                </span>
                <span className="text-2xl font-rubik font-bold text-nu-primary mt-1">
                  100%
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  51 colaboradores treinados
                </span>
              </div>

              {/* KPI TABI Liderança */}
              <div className="bg-gradient-to-br from-nu-secondary/10 to-nu-primary/5 rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  TABI · Lideranças
                </span>
                <span className="text-2xl font-rubik font-bold text-nu-secondary mt-1">
                  80%
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  4 concluídos · 1 pendente
                </span>
              </div>

              {/* KPI Pendências no Click */}
              <div className="bg-gradient-to-br from-gray-50 to-nu-surface rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  Pendências no Click
                </span>
                <span className="text-2xl font-rubik font-bold text-amber-500 mt-1">
                  8
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  Demitidos / afastados / licenças
                </span>
              </div>
            </div>

            {/* Próximos passos super objetivos */}
            <div className="mt-auto pt-3 border-t border-gray-100 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">Piloto validado:</span> LOCKER 100% para ativos; TABI com apenas 1 liderança pendente{' '}
                  <span className="font-semibold">(337809 · Victor Manuel Franco de Lima)</span>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">Agora:</span> expansão dos treinamentos para{' '}
                  <span className="font-semibold">100% da operação Nubank</span>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">Em paralelo:</span> rollout do{' '}
                  <span className="font-semibold">Agente Locker 3.0.41.2510</span> para toda a base
                  (estabilidade, telemetria e alinhamento de jornada).
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Gráficos de aderência */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-primary shadow-sm h-full flex flex-col gap-6">
            <h3 className="text-xl font-rubik font-bold text-nu-primary">
              Aderência visual · Piloto
            </h3>

            <div className="flex-1 space-y-6">
              {/* Locker por segmento */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-poppins font-medium text-gray-700">
                    Locker · Aderência por segmento
                  </span>
                  <span className="text-[11px] font-poppins text-gray-500">
                    Apenas colaboradores ativos
                  </span>
                </div>

                <div className="space-y-3">
                  {/* PJ_CHAT */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-poppins text-gray-600">PJ_CHAT</span>
                      <span className="font-poppins font-semibold text-nu-primary">
                        86,44%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-primary to-nu-secondary w-[86%]" />
                    </div>
                    <p className="text-[11px] font-poppins text-gray-500 mt-1">
                      51 concluídos · 8 pendências (desligados/afastados).
                    </p>
                  </div>

                  {/* PJ_CHAT_N2 */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-poppins text-gray-600">PJ_CHAT_N2</span>
                      <span className="font-poppins font-semibold text-nu-primary">
                        100%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-primary to-nu-secondary w-full" />
                    </div>
                    <p className="text-[11px] font-poppins text-gray-500 mt-1">
                      Turma concluída · sem pendências ativas.
                    </p>
                  </div>
                </div>
              </div>

              {/* TABI Lideranças */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-poppins font-medium text-gray-700">
                    TABI · Lideranças (PJ_CHAT + PJ_CHAT_N2)
                  </span>
                  <span className="text-[11px] font-poppins text-gray-500">
                    5 supervisores
                  </span>
                </div>
                <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-secondary to-nu-primary w-[80%]" />
                </div>
                <p className="text-[11px] font-poppins text-gray-500 mt-1">
                  4 concluídos · 1 pendente{' '}
                  <span className="font-semibold">
                    (337809 · Victor Manuel Franco de Lima)
                  </span>
                </p>
              </div>
            </div>

            {/* Nota de rodapé bem curta */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[10px] font-poppins text-gray-600 leading-relaxed">
                <span className="font-semibold">Nota:</span> Aderência de LOCKER considera apenas ativos do piloto. As 8 pendências no Click
                referem-se a desligados, férias, afastamentos e licenças.{' '}
                <span className="font-semibold">Ativos pendentes: 0.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
