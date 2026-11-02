import { Tab, Tabs } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, Boxes, Code, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { certificates, projects, techStack } from "../data";
import { CertificateArt, ProjectShot } from "./Mock";

const tabSx = {
  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTabs-flexContainer": { gap: "8px" },
  "& .MuiTab-root": {
    flex: 1, minHeight: 64, borderRadius: "12px", color: "#94a3b8", textTransform: "none",
    fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: { xs: "0.75rem", md: "0.95rem" },
    transition: "all 0.3s",
    "&:hover": { color: "#fff", background: "rgba(139,92,246,0.1)" },
    "&.Mui-selected": { color: "#fff", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.25))", boxShadow: "0 4px 15px -3px rgba(139,92,246,0.3)" },
  },
};

const panel = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35 },
};

export default function Portfolio() {
  const [tab, setTab] = useState(0);
  const [cert, setCert] = useState(null);

  return (
    <section id="Portfolio" className="px-[5%] py-24 md:px-[10%]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">Portfolio Showcase</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            Explore my journey through projects, certifications and technical skills. Each one is a milestone in my continuous learning path.
          </p>
        </div>

        <div className="glass mt-10 p-2" data-aos="fade-up" data-aos-delay="150">
          <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth" sx={tabSx}>
            <Tab icon={<Code size={20} />} label="Projects" />
            <Tab icon={<Award size={20} />} label="Certificates" />
            <Tab icon={<Boxes size={20} />} label="Tech Stack" />
          </Tabs>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {tab === 0 && (
              <motion.div key="p" {...panel} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <div key={p.id} className="glass group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.6)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#a855f7]/10 opacity-50 transition-opacity group-hover:opacity-90" />
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <div className="h-full transition-transform duration-500 group-hover:scale-105"><ProjectShot kind={p.kind} /></div>
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-gradient text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-gray-300/80">{p.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1.5 text-sm text-[#93c5fd] transition-colors hover:text-[#bfdbfe]">
                          Live Demo <ExternalLink size={14} />
                        </a>
                        <Link to={`/project/${p.id}`} className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-4 py-2 text-sm text-white/90 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#a855f7]/50">
                          Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {tab === 1 && (
              <motion.div key="c" {...panel} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((c) => (
                  <button key={c.title} onClick={() => setCert(c)} className="group overflow-hidden rounded-xl text-left shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-1">
                    <div className="relative transition-[filter] duration-300 group-hover:brightness-90">
                      <CertificateArt cert={c} />
                      <span className="absolute inset-0 grid place-items-center bg-black/0 text-sm font-medium text-white opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">View Certificate</span>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {tab === 2 && (
              <motion.div key="t" {...panel} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {techStack.map((t) => (
                  <div key={t.name} className="glass group flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.6)]">
                    <img src={t.src} alt="" width={56} height={56} className="h-14 w-14 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm text-gray-300 group-hover:text-white">{t.name}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {cert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCert(null)} className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={cert.title} className="relative w-full max-w-2xl overflow-hidden rounded-xl">
              <CertificateArt cert={cert} />
              <button onClick={() => setCert(null)} aria-label="Close" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80">
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
