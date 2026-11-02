import { useLocation, useNavigate } from "react-router-dom";

/** Scroll to a section, going back to the home page first if needed (the URL hash is used by the router). */
export function useGoTo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (id) => {
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (pathname === "/") go();
    else { navigate("/"); setTimeout(go, 120); }
  };
}
