import { motion } from "framer-motion";
import { Code2, Globe, User, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";

const tagline = `${profile.course} · ${profile.location}`;

/** Intro splash: icons pop in, the title builds word by word, a tagline types out. */
export default function Welcome({ onDone }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(function tick() {
      setTyped(tagline.slice(0, ++i));
      if (i < tagline.length) setTimeout(tick, 45);
    }, 1500);
    const done = setTimeout(onDone, 4000);
    return () => { clearTimeout(start); clearTimeout(done); };
  }, [onDone]);

  const word = (delay, from = { y: 20 }) => ({
    initial: { opacity: 0, filter: "blur(10px)", ...from },
    animate: { opacity: 1, filter: "blur(0px)", x: 0, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
  });

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-night px-4"
    >
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-4">
          {[Code2, User, Github].map((Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.15 }}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/5 shadow-[0_0_25px_rgba(168,85,247,0.35)] backdrop-blur"
            >
              <Icon size={20} className="text-white" />
            </motion.span>
          ))}
        </div>
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="block">
            <motion.span {...word(0.5)} className="inline-block">Welcome</motion.span>{" "}
            <motion.span {...word(0.65)} className="inline-block">To</motion.span>{" "}
            <motion.span {...word(0.8)} className="inline-block">My</motion.span>
          </span>
          <span className="mt-3 block">
            <motion.span {...word(1, { x: -60 })} className="text-gradient inline-block">Portfolio</motion.span>{" "}
            <motion.span {...word(1.15, { x: 60 })} className="text-gradient inline-block">Website</motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#a855f7]/10 px-5 py-2 text-sm text-[#c4b5fd] shadow-[0_0_30px_rgba(168,85,247,0.25)]"
        >
          <Globe size={15} />
          <span className="caret">{typed}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
