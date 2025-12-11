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
        {/* Left Column: Executive Context */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-secondary shadow-sm h-full flex flex-col">
            <h3 className="text-xl font-rubik font-bold text-nu-primary mb-4">Onde estamos no piloto</h3>
            
            <div className="space-y-3 flex-1 font-poppins text-sm text-gray-600 leading-relaxed">
              <p>
                A Governança Locker foi pilotada nos segmentos <strong>PJ_CHAT, PJ_CHAT_N2 e CSI_CHAT</strong>. 
                Para os <strong>colaboradores ativos</strong>, o treinamento LOCKER está <strong>100% concluído</strong>. 
                As pendências (8) referem-se exclusivamente a desligados, férias, afastamentos e licenças.
              </p>

              <p>
                No <strong>TABI (liderança)</strong>, alcançamos <strong>80% de conclusão</strong>, faltando apenas 
                <strong>1 supervisor (337809 – Victor Manuel Franco de Lima)</strong> para validarmos 100% do piloto.
              </p>

              <p>
                Com esse cenário validado, <strong>expandimos agora os treinamentos para 100% da operação Nubank</strong>. 
                Em paralelo, atualizamos o <strong>Agente Locker 3.0.41.2510</strong> para toda a base, trazendo 
                ganhos de estabilidade, telemetria e alinhamento à jornada Nubank.
              </p>
            </div>

            <div className="mt-6 space-y-2 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-xs font-medium text-gray-700"><strong>LOCKER (piloto):</strong> 100% dos ativos treinados.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-xs font-medium text-gray-700"><strong>TABI (liderança):</strong> 80% concluído — 1 supervisor pendente.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-xs font-medium text-gray-700"><strong>Próximo passo:</strong> expansão do treinamento para 100% da operação Nubank.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-xs font-medium text-gray-700"><strong>Em paralelo:</strong> Agente Locker 3.0.41.2510 em rollout para toda a base.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Dashboard + Adherence Graph */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-primary shadow-sm h-full flex flex-col">
            <h3 className="text-xl font-rubik font-bold text-nu-primary mb-6">Visão rápida da aderência (Piloto)</h3>
            
            <div className="space-y-6 flex-1">
              {/* LOCKER Chart */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Locker — Ativos (PJ_CHAT + PJ_CHAT_N2)</span>
                  <span className="text-sm font-bold text-nu-primary">100%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-primary to-nu-secondary w-full" />
                </div>
                <p className="text-xs text-gray-500 mt-1">51 + 0 = 51 colaboradores treinados</p>
              </div>

              {/* TABI Chart */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">TABI — Lideranças (PJ_CHAT + PJ_CHAT_N2)</span>
                  <span className="text-sm font-bold text-nu-secondary">80%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-secondary to-nu-primary w-[80%]" />
                </div>
                <p className="text-xs text-gray-500 mt-1">4 concluídos | 1 pendente (Victor Manuel Franco de Lima)</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Nota:</strong> Locker considera apenas colaboradores ativos do piloto. As 8 pendências no Click são de desligados/afastados (demitidos, férias, afastamentos, licenças). <strong>Ativos pendentes: 0.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};