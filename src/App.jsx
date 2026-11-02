import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import Welcome from "./components/Welcome";

export default function App() {
  const [welcome, setWelcome] = useState(true);
  const done = useCallback(() => setWelcome(false), []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, disable: () => matchMedia("(prefers-reduced-motion: reduce)").matches });
  }, []);
  // re-measure after the splash leaves so the first sections animate in
  useEffect(() => { if (!welcome) setTimeout(() => AOS.refreshHard(), 100); }, [welcome]);

  return (
    <>
      <Background />
      <AnimatePresence mode="wait">{welcome && <Welcome key="welcome" onDone={done} />}</AnimatePresence>
      {!welcome && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Portfolio />
                  <Contact />
                </main>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </>
      )}
    </>
  );
}
