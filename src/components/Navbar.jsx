import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGoTo } from "../useGoTo";
import { profile } from "../data";

const links = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const goTo = useGoTo();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(scrollY > 20);
      let current = "Home";
      links.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) current = id;
      });
      setActive(current);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  const item = (id, mobile) => (
    <button
      key={id}
      onClick={() => { goTo(id); setOpen(false); }}
      className={`group relative px-1 py-2 text-sm font-medium transition-colors ${mobile ? "block w-full text-left text-lg" : ""} ${
        active === id && pathname === "/" ? "text-white" : "text-[#e2d3fd]/70 hover:text-white"
      }`}
    >
      {id}
      {!mobile && (
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all duration-300 ${
            active === id && pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      )}
    </button>
  );

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-night/60 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-[5%] md:px-[10%]">
        <button onClick={() => goTo("Home")} className="text-gradient text-xl font-bold">
          {profile.first}
        </button>
        <div className="hidden items-center gap-8 md:flex">{links.map((id) => item(id))}</div>
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="text-[#e2d3fd] md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-[5%] md:hidden"
          >
            <div className="flex flex-col gap-2 pb-6 pt-2">{links.map((id) => item(id, true))}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
