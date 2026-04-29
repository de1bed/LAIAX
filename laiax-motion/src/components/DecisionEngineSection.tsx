import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const IMG = "/assets/generated/laiax_shimmer_decision_engine.webp";

export default function DecisionEngineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="decision-engine" className="relative overflow-hidden border-y border-white/10 bg-[#131316] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(ellipse_85%_60%_at_75%_20%,rgba(0,210,122,.06),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-[400px]">
          <div className="liquid-glass group relative aspect-[2/3] overflow-hidden rounded-[clamp(20px,3vw,32px)] shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_100px_rgba(0,210,122,.12)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#00D27A]/10 via-transparent to-[#C6FF3D]/10 mix-blend-soft-light" />
            <img src={IMG} alt="" width={800} height={1200} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[8000ms] ease-out md:group-hover:scale-[1.03]" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.06 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">03 · Velocidad de decisión</p>
          <h2 className="text-[clamp(26px,4vw,50px)] font-extralight leading-[1.08] tracking-tight text-white">
            <span className="italic text-[#3DFFA8]">Un motor</span>. Decisiones ejecutivas antes que el mercado reinterpreta el playbook.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            Loops cortos de señal → prueba → ajuste, tutores IA por materia y mentores en activo con tu empresa como unidad del instituto — no paralelo a la operación real.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/60 md:text-base">
            {[
              "Criterio institucional cuando la tecnología excede a la organización.",
              "Decisiones públicas ante cohorte: accountability.",
              "Puente MADE → siguiente salida del pipeline.",
            ].map((t) => (
              <li key={t} className="relative pl-7">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#00D27A] shadow-[0_0_12px_#3DFFA8]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#00D27A]"
            >
              Lo que hacemos <ArrowRight size={16} />
            </a>
            <a href="#featured" className="liquid-glass rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white">
              Enfoque
            </a>
          </div>
          <p className="mt-8 max-w-xl border-t border-white/15 pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/40">
            Video motor · <span className="text-[#3DFFA8]">decision-engine-loop.mp4</span> <span className="text-[#3DFFA8]">.webm</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
