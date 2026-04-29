import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const IMG = "/assets/generated/laiax_latam_topographic_shimmer.webp";

export default function RegionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="region" className="relative overflow-hidden bg-[#131316] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(ellipse_90%_70%_at_80%_30%,rgba(198,255,61,.06),transparent_50%),radial-gradient(ellipse_70%_50%_at_10%_80%,rgba(0,210,122,.07),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="relative mx-auto w-full max-w-[380px] lg:order-1 lg:justify-self-start"
        >
          <div className="liquid-glass group relative aspect-[2/3] overflow-hidden rounded-[clamp(20px,3vw,32px)] shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_120px_rgba(0,210,122,.08)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3DFFA8]/8 via-transparent to-[#00D27A]/10 mix-blend-soft-light" />
            <img
              src={IMG}
              alt=""
              width={800}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[7000ms] ease-out hover:scale-105 md:group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.06 }}
          className="lg:order-2"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">02 · Territorio</p>
          <h2 className="text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            El futuro de la región se <span className="italic text-[#3DFFA8]">recorre</span>, no se debate desde lejos.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            Instituto distribuido, bilingüe, con pies en LATAM y señales en los ecosistemas donde la adopción se ensaya primero. Velocidad
            territorial cuando la empresa ejecuta antes que observar desde la tribuna.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/60 md:text-base">
            {[
              "17 ciudades como capítulos de una tesis ejecutiva.",
              "Red institucional, no formato de masas.",
              "Pipeline MADE → iniciativas futuras (Labs, Fellowship).",
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
            Video terreno · <span className="text-[#3DFFA8]">latam-terrain-loop.mp4</span> <span className="text-[#3DFFA8]">.webm</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
