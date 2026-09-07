import { motion } from "framer-motion";
import { User } from "lucide-react";

export const About = () => {
  return (
    <section className="w-full p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl bg-[#f0faf5] border border-[#80d4ab] rounded-xl p-6 md:p-8 shadow-xs">
        {/* Encabezado */}
        <div className="flex items-center gap-2 mb-6 text-[#2e7d58]">
          <User className="w-5 h-5 text-emerald-700" />
          <h2 className="text-lg md:text-xl font-semibold text-emerald-950">
            ./About-me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Contenedor de la Polaroid con Filtro Menta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0 group cursor-pointer"
          >
            {/* Marco Polaroid */}
            <div className="bg-[#f0faf5] border-2 border-[#80d4ab] p-3 pb-8 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-48 md:w-56">
              <div className="relative overflow-hidden rounded bg-[#022c22]">
                {/* Ruta directa desde la carpeta public */}
                <img
                  src="/piano-polaroid.jpg"
                  alt="Marcos Herrera tocando el piano"
                  className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Capas de sombra y duotono Verde Menta / Esmeralda */}
                <div className="absolute inset-0 bg-[#047857] mix-blend-color opacity-90 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-[#80d4ab] mix-blend-soft-light opacity-80 pointer-events-none" />
              </div>

              {/* Pie de Polaroid estilo código */}
              <div className="mt-3 text-center text-[11px] text-[#2e7d58] font-medium tracking-tight">
                // dev & music production //
              </div>
            </div>
          </motion.div>

          {/* Reseña corta */}
          <div className="space-y-4 text-xs md:text-sm text-[#2e7d58] leading-relaxed">
            <div className="text-xs text-[#2e7d58]">/**</div>

            <div className="pl-4 border-l-2 border-[#80d4ab] space-y-2">
              <p className="text-emerald-950 font-semibold text-sm">
                Marcos Herrera — Web Developer & Digital Creator
              </p>
              <p>
                My name is Marcos Herrera. Apart from my passion for coding, I
                have more talents like music production and piano performance.
              </p>
              <p>
                Pasionate for clean coding, and well-structured typing. Very
                aware of the interface designing, and always aiming at customer
                satisfaction.
              </p>
            </div>

            <div className="text-xs text-[#2e7d58]"> */</div>
          </div>
        </div>
      </div>
    </section>
  );
};
