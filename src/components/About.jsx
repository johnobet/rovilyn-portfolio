import { ArrowUpRight, Award, Code2, Download, Globe, Sparkles } from "lucide-react";
import { profile, stats } from "../data";
import { useGoTo } from "../useGoTo";

const statIcons = [Code2, Award, Globe];

export default function About() {
  const goTo = useGoTo();

  return (
    <section id="About" className="px-[5%] pb-24 pt-28 md:px-[10%]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="zoom-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400 md:text-base">
            <Sparkles size={16} className="text-[#a78bfa]" /> Transforming ideas into digital experiences <Sparkles size={16} className="text-[#a78bfa]" />
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-3xl font-bold md:text-5xl" data-aos="fade-right">
              <span className="text-gradient">Hello, I&apos;m</span>
              <span className="mt-2 block text-white" data-aos="fade-right" data-aos-delay="200">
                {profile.first} {profile.last}
              </span>
            </h3>
            <p className="mt-6 text-justify text-base leading-relaxed text-gray-400 md:text-lg" data-aos="fade-right" data-aos-delay="400">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="Rovilyn-Castrodes-CV.pdf"
                download
                data-aos="fade-up-right"
                data-aos-delay="600"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-3 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-[#a855f7]/30"
              >
                <Download size={16} /> Download CV
              </a>
              <button
                onClick={() => goTo("Portfolio")}
                data-aos="fade-up-left"
                data-aos-delay="700"
                className="flex items-center gap-2 rounded-lg border border-[#a855f7]/50 px-6 py-3 text-sm font-medium text-[#c4b5fd] transition-all hover:scale-105 hover:bg-[#a855f7]/10"
              >
                <Code2 size={16} /> View Projects
              </button>
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
            <div className="group relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#06b6d4] opacity-40 blur-2xl transition-opacity duration-700 group-hover:opacity-70" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 bg-gradient-to-b from-[#312e81] to-[#581c87] shadow-[0_0_60px_rgba(124,58,237,0.4)] sm:h-80 sm:w-80">
                <img src="rovilyn.webp" alt="" className="h-full w-full scale-[1.35] object-cover object-[50%_30%] grayscale transition-all duration-700 group-hover:scale-[1.45] group-hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={s.label}
                data-aos={["fade-down-right", "fade-up", "fade-down-left"][i]}
                data-aos-delay={i * 100}
                className="glass group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/40 hover:shadow-[0_15px_40px_-15px_rgba(168,85,247,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon size={24} />
                  </span>
                  <span className="text-4xl font-bold">{s.value}</span>
                </div>
                <div className="relative mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-300">{s.label}</p>
                    <p className="mt-1 text-xs text-gray-500">{s.note}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-gray-500 transition-colors group-hover:text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
