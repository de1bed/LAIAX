import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const IMG = "/assets/generated/laiax_shimmer_membrane_vertical.webp";

export default function ThresholdSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="threshold" className="relative overflow-hidden border-y border-white/10 bg-[#03050A] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,210,122,.08),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="liquid-glass group relative aspect-[2/3] overflow-hidden rounded-[clamp(20px,3vw,32px)] shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_120px_rgba(0,210,122,.12)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3DFFA8]/10 via-transparent to-[#C6FF3D]/10 mix-blend-soft-light" />
            <img
              src={IMG}
              alt=""
              width={800}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[8000ms] ease-out hover:scale-105 md:group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.08 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">01 · Umbral</p>
          <h2 className="text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            Adopción exponencial atraviesa un{" "}
            <span className="italic text-[#3DFFA8] shadow-[0_0_28px_rgba(0,210,122,.35)]">umbral</span>, no una curva suave.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            Latinoamérica no llega tarde por falta de talento operativo: llega tarde cuando la institución que traduce velocidad en decisiones
            ejecutivas no existe. LAIAX opera en ese umbral entre disciplina estratégica y señales de adopción.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/60 md:text-base">
            {[
              "Transformación como decisión institucional, no buzzword.",
              "IA aplicada donde importa el resultado, no el experimento.",
              "Manifiesto y cohorte como compromiso público.",
            ].map((t) => (
              <li key={t} className="relative pl-7">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#00D27A] shadow-[0_0_12px_#3DFFA8]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#manifiesto" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#00D27A]">
              Manifiesto <ArrowRight size={16} />
            </a>
            <a href="#region" className="liquid-glass rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white">
              Territorio
            </a>
          </div>
          <p className="mt-8 max-w-xl border-t border-white/15 pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/40">
            Video membrana · <span className="text-[#3DFFA8]">membrane-vertical-loop.mp4</span> <span className="text-[#3DFFA8]">.webm</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
