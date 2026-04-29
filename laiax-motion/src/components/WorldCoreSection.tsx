import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const IMG = "/assets/generated/laiax_shimmer_world_core.webp";

export default function WorldCoreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="world-core" className="relative overflow-hidden border-y border-white/10 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: [
            "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(0,210,122,.07), transparent 45%)",
            "linear-gradient(180deg, #0A0A0B 0%, #03050A 35%, #131316 100%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">00 · Instituto distribuido</p>
          <h2 className="text-[clamp(28px,4.8vw,58px)] font-extralight leading-[1.05] tracking-tight text-white">
            Latinoamérica entra al <span className="italic text-[#3DFFA8]">sistema operativo</span> del futuro.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            Red ejecutiva con LATAM como densidad de señal: el instituto alinea empresa, adopción exponencial y criterio de dirección — no
            contenido gravado desde lejos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#decision-engine" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#00D27A]">
              Ver el motor <ArrowRight size={16} />
            </a>
            <a href="#region" className="liquid-glass rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white">
              Territorio
            </a>
          </div>
          <p className="mt-8 max-w-xl border-t border-white/15 pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/40">
            Video ciclo mundo · <span className="text-[#3DFFA8]">world-core-loop.mp4</span> <span className="text-[#3DFFA8]">world-core-loop.webm</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="liquid-glass group relative overflow-hidden rounded-[clamp(20px,3vw,32px)] shadow-[0_24px_80px_rgba(0,0,0,.55)]"
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#3DFFA8]/10 via-transparent to-[#C6FF3D]/8 mix-blend-soft-light" />
          <img src={IMG} alt="" width={1920} height={1080} loading="lazy" className="aspect-video w-full object-cover object-[center_45%] transition-transform duration-[9000ms] ease-out md:group-hover:scale-[1.02]" decoding="async" />
        </motion.div>
      </div>
    </section>
  );
}
