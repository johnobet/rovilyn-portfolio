/** Fixed purple/blue blobs drifting behind every page. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night">
      <div className="blob left-[-10%] top-[-10%] h-[38rem] w-[38rem] bg-[#7c3aed]" />
      <div className="blob right-[-12%] top-[20%] h-[34rem] w-[34rem] bg-[#06b6d4]" style={{ animationDelay: "-6s" }} />
      <div className="blob bottom-[-15%] left-[25%] h-[36rem] w-[36rem] bg-[#4f46e5]" style={{ animationDelay: "-12s" }} />
      <div className="grid-overlay absolute inset-0" />
    </div>
  );
}
