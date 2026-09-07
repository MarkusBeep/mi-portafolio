import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Terminal, FileCode, Check } from "lucide-react";
import { personalData } from "../data/portfolio";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    // Copiar el correo al portapapeles
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);

    // Ocultar la confirmación tras 2 segundos
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl bg-[#f0faf5] border border-[#80d4ab] rounded-xl overflow-hidden shadow-sm">
        {/* Barra superior de pestañas de VS Code */}
        <div className="bg-[#d8f3e5] border-b border-[#80d4ab] px-4 py-2 flex items-center gap-2 text-xs text-[#2e7d58]">
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#80d4ab] inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-200 inline-block" />
          </div>
          <div className="bg-[#f0faf5] border-t-2 border-emerald-600 px-3 py-1 rounded-t border-x text-emerald-950 font-medium flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-emerald-600" />
            Hero.tsx
          </div>
        </div>

        {/* Cuerpo del editor */}
        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="text-xs text-[#2e7d58] mb-3">
              <span className="text-emerald-700">// status:</span> available
            </div>

            <h1 className="text-2xl md:text-4xl font-semibold text-emerald-950 mb-2">
              <span className="text-emerald-700 font-normal"></span>{" "}
              {personalData.name.replace(/\s+/g, "")}{" "}
              <span className="text-emerald-700 font-normal">=</span>
            </h1>

            <div className="pl-4 border-l-2 border-[#80d4ab] my-4 space-y-2">
              <p className="text-[#0f5132] font-medium text-sm md:text-base">
                <span className="text-emerald-700">role:</span> "
                {personalData.role}",
              </p>
              <p className="text-[#2e7d58] text-xs md:text-sm leading-relaxed">
                <span className="text-emerald-700">bio:</span> "
                {personalData.bio}"
              </p>
            </div>

            {/* Fila de Botones */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {/* Botón interactivo de correo */}
              <a
                href={`mailto:${personalData.email}`}
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium rounded-md transition-colors shadow-xs cursor-pointer select-none"
                title="Haz clic para enviar email o copiar al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>// ¡Email copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contáctame</span>
                  </>
                )}
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#d8f3e5] hover:bg-emerald-200 text-emerald-900 border border-[#80d4ab] rounded-md transition-colors"
                aria-label="GitHub"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#d8f3e5] hover:bg-emerald-200 text-emerald-900 border border-[#80d4ab] rounded-md transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {personalData.socials.youtube && (
                <a
                  href={personalData.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#d8f3e5] hover:bg-emerald-200 text-emerald-900 border border-[#80d4ab] rounded-md transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Foto de perfil */}
          <div className="relative">
            <div className="text-xs text-[#2e7d58] mb-1 flex items-center gap-1">
              <Terminal className="w-3 h-3" /> profile.jpg
            </div>
            <img
              src="/profile_img.jpeg"
              alt={personalData.name}
              className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-md border-2 border-[#80d4ab] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
