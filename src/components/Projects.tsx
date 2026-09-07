import { motion } from "framer-motion";
import { Folder, ExternalLink, Code2 } from "lucide-react";
import { portfolioWebs } from "../data/portfolio";

export const Projects = () => {
  return (
    <section className="w-full p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl space-y-6">
        {/* Encabezado del directorio */}
        <div className="flex items-center gap-2 text-sm text-[#2e7d58]">
          <Folder className="w-4 h-4 text-emerald-700" />
          <span className="font-semibold text-emerald-950">./projects</span>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioWebs.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              /* 'group' permite animar los elementos hijos en hover */
              /* 'hover:bg-[#022c22]' aplica el verde menta muy oscuro/profundo */
              className="group bg-[#f0faf5] hover:bg-[#022c22] border border-[#80d4ab] hover:border-emerald-600 rounded-xl p-6 transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Meta superior */}
                <div className="flex items-center justify-between text-xs text-[#2e7d58] group-hover:text-emerald-400 mb-3 transition-colors duration-300">
                  <span>Projects: {index + 1}</span>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#d8f3e5] group-hover:bg-[#047857] text-emerald-900 group-hover:text-emerald-100 rounded transition-colors duration-300"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="p-1.5 bg-[#d8f3e5] group-hover:bg-[#047857] text-emerald-900 group-hover:text-emerald-100 rounded transition-colors duration-300">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Título: pasa de oscuro a BLANCO en hover */}
                <h3 className="text-lg font-bold text-emerald-950 group-hover:text-white transition-colors duration-300 mb-2">
                  {project.title}
                </h3>

                {/* Descripción: pasa a VERDE CLARO (mint) en hover */}
                <p className="text-xs md:text-sm text-[#2e7d58] group-hover:text-[#a7f3d0] leading-relaxed transition-colors duration-300 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Etiquetas / Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] px-2.5 py-1 bg-[#d8f3e5] group-hover:bg-[#064e3b] text-emerald-900 group-hover:text-emerald-200 border border-[#80d4ab] group-hover:border-emerald-700 rounded-md transition-colors duration-300"
                  >
                    '{tag}'
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
