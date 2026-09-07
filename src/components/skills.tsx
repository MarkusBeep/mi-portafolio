import { motion } from "framer-motion";
import { Terminal, Code, Wrench, Layers } from "lucide-react";
import { skillsData } from "../data/portfolio";

export const Skills = () => {
  // Íconos auxiliares para dar variedad según el índice de categoría
  const categoryIcons = [Code, Layers, Wrench];

  return (
    <section className="w-full p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl bg-[#f0faf5] border border-[#80d4ab] rounded-xl overflow-hidden shadow-sm">
        {/* Barra superior estilo pestaña de VS Code */}
        <div className="bg-[#d8f3e5] border-b border-[#80d4ab] px-4 py-2 flex items-center gap-2 text-xs text-[#2e7d58]">
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#80d4ab] inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-200 inline-block" />
          </div>
          <div className="bg-[#f0faf5] border-t-2 border-emerald-600 px-3 py-1 rounded-t border-x text-emerald-950 font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            Skills.config.ts
          </div>
        </div>

        {/* Contenido principal de la sección */}
        <div className="p-6 md:p-10">
          <div className="text-xs text-[#2e7d58] mb-4">
            <span className="text-emerald-700">//</span> tecnologies
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-emerald-950 mb-6">
            <span className="text-emerald-700 font-normal"></span> skills{" "}
            <span className="text-emerald-700 font-normal">=</span> [
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-0 md:pl-6">
            {skillsData.map((group, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              const keyName = group.category.toLowerCase().replace(/\s+/g, "_");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#d8f3e5]/40 border border-[#80d4ab] rounded-lg p-5"
                >
                  <div className="flex items-center gap-2 mb-3 text-emerald-900 font-semibold text-sm">
                    <Icon className="w-4 h-4 text-emerald-700" />
                    {keyName}: [
                  </div>

                  <div className="flex flex-wrap gap-2 pl-3 border-l-2 border-[#80d4ab]/60 my-2">
                    {group.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2.5 py-1 bg-[#f0faf5] border border-[#80d4ab] text-emerald-950 text-xs rounded"
                      >
                        '{skill}'
                      </span>
                    ))}
                  </div>

                  <div className="text-emerald-900 font-semibold text-sm">
                    ],
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-xl md:text-2xl font-semibold text-emerald-950 mt-6">
            ];
          </div>
        </div>
      </div>
    </section>
  );
};
