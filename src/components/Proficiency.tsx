import { motion } from "framer-motion";
import { BarChart3, Square } from "lucide-react";
import { skillProficiency } from "../data/portfolio";

export const Proficiency = () => {
  return (
    <section className="w-full p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl bg-[#f0faf5] border border-[#80d4ab] rounded-xl p-6 md:p-8 shadow-xs">
        {/* Encabezado directo para RRHH */}
        <div className="flex items-center gap-2 mb-6 text-[#2e7d58]">
          <BarChart3 className="w-5 h-5 text-emerald-700" />
          <h2 className="text-lg md:text-xl font-semibold text-emerald-950">
            ./tech-level
          </h2>
        </div>

        {/* Grid de Barras de Progreso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {skillProficiency.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-950 font-semibold">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#2e7d58] bg-[#d8f3e5] px-2 py-0.5 border border-[#80d4ab] rounded font-medium">
                  {item.label}
                </span>
              </div>

              {/* Barra de progreso visual */}
              <div className="w-full bg-[#d8f3e5]/50 border border-[#80d4ab] rounded-md h-3.5 p-0.5 flex items-center overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-emerald-600 rounded-sm flex items-center justify-end pr-0.5"
                >
                  <Square className="w-2 h-2 text-emerald-200 fill-current opacity-70" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
