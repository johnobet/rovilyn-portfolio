import { motion } from "framer-motion";
import { ExternalLink, Facebook, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";
import { useGoTo } from "../useGoTo";

/** Types each role out, pauses, deletes it, moves to the next. */
function useTypewriter(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, i = 0, deleting = false, t;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      if (!deleting && i === word.length) { deleting = true; t = setTimeout(tick, 1800); return; }
      if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; }
      t = setTimeout(tick, deleting ? 40 : 90);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

const chips = ["React", "JavaScript", "Tailwind", "PHP"];

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const goTo = useGoTo();

  return (
    <section id="Home" className="flex min-h-screen items-center px-[5%] pt-20 md:px-[10%]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 space-y-7 lg:order-1">
          <div data-aos="zoom-in" data-aos-delay="200" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 px-4 py-2 text-sm text-[#c4b5fd] shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Sparkles size={15} className="text-[#a78bfa]" /> Ready to Innovate
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl" data-aos="fade-up" data-aos-delay="400">
            <span className="block text-white">Frontend</span>
            <span className="text-gradient block">Developer</span>
          </h1>

          <p className="h-8 text-xl font-light text-gray-200 md:text-2xl" data-aos="fade-up" data-aos-delay="600">
            <span className="caret">{typed}</span>
          </p>

          <p className="max-w-xl text-base font-light leading-relaxed text-gray-400 md:text-lg" data-aos="fade-up" data-aos-delay="800">
            {profile.heroText}
          </p>

          <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="1000">
            {chips.map((c) => <span key={c} className="chip">{c}</span>)}
          </div>

          <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="1200">
            {[["Projects", ExternalLink, "Portfolio"], ["Contact", Mail, "Contact"]].map(([label, Icon, id]) => (
              <button key={label} onClick={() => goTo(id)} className="group relative rounded-xl p-px">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-40 blur-md transition-opacity group-hover:opacity-90" />
                <span className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-night px-6 py-3 text-sm text-gray-200 transition-colors group-hover:text-white">
                  {label} <Icon size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            ))}
          </div>

          <div className="flex gap-3" data-aos="fade-up" data-aos-delay="1400">
            {[[Facebook, profile.facebook.url, "Facebook"], [Mail, `mailto:${profile.email}`, "Email"]].map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="glass grid h-11 w-11 place-items-center !rounded-xl text-gray-400 transition-all hover:-translate-y-1 hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* her photo floating on a glowing purple orb */}
        <div className="order-1 flex justify-center lg:order-2" data-aos="fade-left" data-aos-delay="600">
          <div className="group relative aspect-square w-[min(86vw,500px)]">
            <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#06b6d4] opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[4%] rounded-full border border-dashed border-[#a855f7]/30"
            />
            <div className="absolute inset-[12%] rounded-full bg-gradient-to-b from-[#6366f1]/40 to-[#a855f7]/10 ring-1 ring-white/10" />
            <motion.img
              src="rovilyn.webp"
              alt="Rovilyn Castrodes"
              width={1000}
              height={1000}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 [mask-image:radial-gradient(circle_at_50%_42%,#000_58%,transparent_72%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
