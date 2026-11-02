import { profile } from "../data";

/** Fake project screenshots drawn with divs, so the mock projects need no image files. */
export function ProjectShot({ kind }) {
  const frame = "h-full w-full overflow-hidden text-[9px]";
  if (kind === "landing")
    return (
      <div className={`${frame} bg-gradient-to-br from-[#0f766e] to-[#155e75] p-4 text-white`}>
        <div className="flex justify-between opacity-80"><b>Guindulman</b><span className="flex gap-2"><i>Spots</i><i>Map</i><i>Stay</i></span></div>
        <p className="mt-5 text-[15px] font-bold leading-tight">Discover the hidden<br />gems of Guindulman</p>
        <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-[#0f766e]">Explore</span>
        <div className="mt-3 grid grid-cols-3 gap-1.5">{["Beach", "Cave", "Church"].map((t) => <div key={t} className="rounded bg-white/20 p-2">{t}</div>)}</div>
      </div>
    );
  if (kind === "shop")
    return (
      <div className={`${frame} bg-[#fff7ed] p-3 text-[#7c2d12]`}>
        <div className="flex justify-between"><b>Calamay Shop</b><span>🛒 3</span></div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[["Calamay", "₱120"], ["Puto", "₱60"], ["Suman", "₱80"], ["Bibingka", "₱90"], ["Kutsinta", "₱50"], ["Biko", "₱100"]].map(([n, p]) => (
            <div key={n} className="rounded-md bg-white p-1.5 shadow-sm"><div className="mb-1 h-6 rounded bg-[#fdba74]" />{n}<b className="block">{p}</b></div>
          ))}
        </div>
      </div>
    );
  if (kind === "dashboard")
    return (
      <div className={`${frame} flex bg-[#f8fafc] text-[#0f172a]`}>
        <div className="w-1/5 bg-[#1e3a8a] p-2 leading-5 text-white/80"><b className="text-white">BHR</b><br />Patients<br />Vaccines<br />Reports</div>
        <div className="flex-1 p-3">
          <b>Monthly Check-ups</b>
          <div className="mt-2 grid grid-cols-3 gap-1.5">{[["Patients", "412"], ["This month", "86"], ["Due shots", "14"]].map(([k, v]) => <div key={k} className="rounded bg-white p-1.5 shadow-sm">{k}<b className="block text-[12px]">{v}</b></div>)}</div>
          <div className="mt-2 flex h-14 items-end gap-1 rounded bg-white p-2 shadow-sm">{[30, 55, 40, 70, 60, 85, 65].map((h, i) => <div key={i} className="flex-1 rounded-sm bg-[#6366f1]" style={{ height: `${h}%` }} />)}</div>
        </div>
      </div>
    );
  if (kind === "mobile")
    return (
      <div className={`${frame} flex items-center justify-center gap-4 bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b]`}>
        {["Today", "This week"].map((t) => (
          <div key={t} className="h-[85%] w-[28%] rounded-2xl border-2 border-black/60 bg-white p-2 text-[#4c1d95]">
            <b>{t}</b>
            {["Data Struct quiz", "OOP project", "Thesis ch. 1"].map((x, i) => <p key={x} className="mt-1 flex items-center gap-1 rounded bg-[#ede9fe] px-1 py-0.5"><span className={`h-1.5 w-1.5 rounded-full ${i ? "bg-[#a855f7]" : "bg-[#22c55e]"}`} />{x}</p>)}
          </div>
        ))}
      </div>
    );
  if (kind === "weather")
    return (
      <div className={`${frame} bg-gradient-to-b from-[#0ea5e9] to-[#1d4ed8] p-3 text-white`}>
        <div className="flex justify-between"><b>Guindulman, Bohol</b><span>Search…</span></div>
        <p className="mt-3 text-[26px] font-light">29°</p><p>Partly cloudy · 60% rain</p>
        <div className="mt-2 grid grid-cols-7 gap-1 text-center">{["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} className="rounded bg-white/15 py-1">{d}<br />{27 + (i % 3)}°</div>)}</div>
      </div>
    );
  return (
    <div className={`${frame} bg-gradient-to-br from-[#fde047] to-[#fb923c] p-3 text-[#431407]`}>
      <div className="flex justify-between"><b>QuizBee 🐝</b><span>⏱ 0:12</span></div>
      <p className="mt-3 text-[12px] font-bold">What is 7 × 8?</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">{["54", "56", "64", "48"].map((a) => <div key={a} className={`rounded-md p-2 text-center font-bold ${a === "56" ? "bg-[#16a34a] text-white" : "bg-white/80"}`}>{a}</div>)}</div>
    </div>
  );
}

/** A certificate "paper" with her name on it. */
export function CertificateArt({ cert }) {
  return (
    <div className="relative aspect-[1.414] w-full overflow-hidden bg-white p-[7%] text-center text-[#1f2937]">
      <div className="absolute inset-[4%] border-2 border-[#6366f1]/40" />
      <div className="absolute -left-8 -top-8 h-24 w-24 rotate-45 bg-gradient-to-br from-[#6366f1] to-[#a855f7]" />
      <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-gradient-to-br from-[#fcd34d] to-[#d97706] shadow" />
      <p className="relative text-[8px] tracking-[0.3em] text-gray-500">CERTIFICATE OF</p>
      <p className="relative font-serif text-lg font-bold tracking-wide">{cert.title.includes("Place") ? "ACHIEVEMENT" : "COMPLETION"}</p>
      <p className="relative mt-2 text-[8px] text-gray-500">This is proudly presented to</p>
      <p className="relative font-serif text-base italic text-[#6d28d9]">{profile.first} {profile.last}</p>
      <p className="relative mt-1 text-[9px] font-semibold">{cert.title}</p>
      <p className="relative text-[8px] text-gray-500">{cert.issuer} · {cert.year}</p>
    </div>
  );
}
