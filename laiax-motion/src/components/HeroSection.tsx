import { ArrowUpRight } from "lucide-react";

const HERO_POSTER = "/assets/generated/laiax_shimmer_velocity_portal.webp";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-[#03050A]">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={HERO_POSTER}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_42%] opacity-[0.88]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 120% 90% at 50% 45%, transparent 18%, rgba(3,5,10,0.5) 58%, rgba(3,5,10,0.97) 100%)",
              "linear-gradient(180deg, rgba(3,5,10,0.75) 0%, transparent 22%, transparent 68%, rgba(10,10,11,0.88) 100%)",
            ].join(", "),
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-[0.65]"
          style={{
            background: [
              "radial-gradient(ellipse 130% 90% at 15% -10%, rgba(0,210,122,0.4), transparent 52%)",
              "radial-gradient(ellipse 80% 70% at 95% 75%, rgba(255,255,255,0.06), transparent 48%)",
              "radial-gradient(circle at 40% 40%, transparent 42%, rgba(10,10,11,0.85) 100%)",
            ].join(", "),
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: [
              "linear-gradient(to right, rgba(255,255,255,.035) 1px, transparent 1px)",
              "linear-gradient(to bottom, rgba(255,255,255,.035) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse at center, black 38%, transparent 86%)",
          }}
        />
      </div>

      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center text-[#00D27A]">
              <svg viewBox="0 0 200 120" className="h-3 w-5">
                <path d="M 8 90 L 192 18 L 175 38 L 30 90 Z" fill="#00D27A" />
                <path d="M 95 102 L 165 60 L 158 78 L 110 102 Z" fill="#F5F4F0" />
              </svg>
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-white">LAIAX</span>
            <div className="ml-8 hidden items-center gap-8 md:flex">
              <a href="#about" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                Instituto
              </a>
              <a href="#services" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                Servicios
              </a>
              <a href="#threshold" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                Umbral
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-white/50 md:inline">ES / EN</span>
            <a href="#featured" className="liquid-glass rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
              Postular
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-14 pt-6 md:px-10">
        <div className="flex items-start justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 md:text-xs">
          <div className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D27A] shadow-[0_0_10px_#00D27A]" />
            <span>v1.0 · Cohorte 01 abierta</span>
          </div>
          <span>LAIAX · 2026</span>
        </div>

        <div className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center gap-6 pb-16 pt-10 text-center">
          <p className="max-w-xl text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 md:text-xs">
            Latin American Institute for AI &amp; eXponential Organizations
          </p>
          <h1 className="max-w-[16ch] text-[13vw] font-extralight leading-[1] tracking-[0.04em] text-white md:text-[8.5vw] lg:text-[7.25rem]">
            <span className="block">La ventaja del</span>
            <span className="block">futuro no es</span>
            <span className="block font-instrument italic text-[#3DFFA8] shadow-[0_0_28px_rgba(0,210,122,0.45)]">información.</span>
          </h1>
          <p className="max-w-[46ch] text-base leading-relaxed text-[#d0d0d6] md:text-lg">
            Es <strong className="font-medium text-[#F5F4F0]">velocidad de adaptación</strong>. Infraestructura institucional para adoptar tecnologías exponenciales en Latinoamérica. No una academia: un instituto con cohorte ejecutiva MADE.
          </p>
          <ul className="flex max-w-xl flex-wrap justify-center gap-2 px-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7A7A82]">
            <li className="rounded-full border border-white/15 bg-[rgba(10,10,11,0.4)] px-4 py-2.5 backdrop-blur-md">
              <strong className="text-white">17</strong> ciudades
            </li>
            <li className="rounded-full border border-white/15 bg-[rgba(10,10,11,0.4)] px-4 py-2.5 backdrop-blur-md">
              <strong className="text-white">17</strong> meses
            </li>
            <li className="rounded-full border border-white/15 bg-[rgba(10,10,11,0.4)] px-4 py-2.5 backdrop-blur-md">
              MADE · maestría
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#00D27A]"
            >
              Conocer trabajo
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#threshold" className="liquid-glass rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white">
              Umbral
            </a>
          </div>
        </div>

        <div className="mx-auto mt-auto grid max-w-4xl grid-cols-2 gap-6 border-t border-white/15 pt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 md:grid-cols-4 md:text-xs">
          <div>
            <span className="text-white">17</span>&nbsp;<span className="text-white/55">Ciudades</span>
          </div>
          <div>
            <span className="text-white">17</span>&nbsp;<span className="text-white/55">Meses</span>
          </div>
          <div>
            <span className="text-white">∞</span>&nbsp;<span className="text-white/55">Adopción</span>
          </div>
          <div className="flex items-center gap-2 md:justify-center">
            <span>↓ Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
