import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Code2, ExternalLink, Github, Layers, Package, Star } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data";
import { ProjectShot } from "./Mock";

const rise = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } });

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = projects.find((x) => x.id === id);

  useEffect(() => {
    scrollTo(0, 0); // braces matter: newer browsers return a Promise here, which React would treat as a cleanup
  }, [id]);

  if (!p)
    return (
      <div className="grid min-h-screen place-items-center text-center">
        <div>
          <p className="text-xl">Project not found.</p>
          <Link to="/" className="mt-4 inline-block text-[#a78bfa] underline">Back home</Link>
        </div>
      </div>
    );

  return (
    <section className="min-h-screen px-[5%] pb-20 pt-28 md:px-[10%]">
      <div className="mx-auto max-w-7xl">
        <motion.div {...rise()} className="mb-10 flex items-center gap-3 text-sm">
          <button onClick={() => navigate(-1)} className="glass flex items-center gap-2 !rounded-xl px-4 py-2 text-white/90 transition-colors hover:bg-white/10">
            <ArrowLeft size={16} /> Back
          </button>
          <span className="flex items-center gap-1 text-white/50">
            Projects <ChevronRight size={14} /> <span className="text-white/90">{p.title}</span>
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div {...rise(0.1)}>
              <h1 className="bg-gradient-to-r from-[#e0e7ff] via-[#c4b5fd] to-[#a855f7] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">{p.title}</h1>
              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
            </motion.div>
            <motion.p {...rise(0.2)} className="text-base leading-relaxed text-gray-300/90 md:text-lg">{p.description}</motion.p>

            <motion.div {...rise(0.3)} className="grid grid-cols-2 gap-4">
              {[[Code2, p.tech.length, "Total Technology", "#6366f1"], [Layers, p.features.length, "Key Features", "#a855f7"]].map(([Icon, n, label, c]) => (
                <div key={label} className="glass flex items-center gap-3 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full" style={{ background: `${c}33` }}><Icon size={20} style={{ color: c }} /></span>
                  <div><b className="text-xl">{n}</b><p className="text-xs text-gray-400">{label}</p></div>
                </div>
              ))}
            </motion.div>

            <motion.div {...rise(0.4)} className="flex flex-wrap gap-3">
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-xl border border-[#6366f1]/30 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 px-6 py-3 text-[#c7d2fe] transition-all hover:from-[#6366f1]/20 hover:to-[#a855f7]/20">
                <ExternalLink size={18} /> Live Demo
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-xl border border-[#a855f7]/30 bg-gradient-to-r from-[#a855f7]/10 to-[#ec4899]/10 px-6 py-3 text-[#e9d5ff] transition-all hover:from-[#a855f7]/20 hover:to-[#ec4899]/20">
                <Github size={18} /> Github
              </a>
            </motion.div>

            <motion.div {...rise(0.5)}>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white/90"><Code2 size={20} className="text-[#a78bfa]" /> Technologies Used</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="flex items-center gap-2 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/10 px-4 py-2 text-sm text-[#c7d2fe] transition-colors hover:bg-[#6366f1]/20">
                    <Package size={14} /> {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div {...rise(0.2)} className="group relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
              <div className="h-full transition-transform duration-700 group-hover:scale-105"><ProjectShot kind={p.kind} /></div>
            </motion.div>
            <motion.div {...rise(0.35)} className="glass p-8">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white/90"><Star size={20} className="text-yellow-400" /> Key Features</h3>
              <ul className="mt-5 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
