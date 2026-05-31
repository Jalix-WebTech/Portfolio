import { useEffect, useState } from "react";

export default function Splash({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1300);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => setPhase(4), 2900);
    const tEnd = setTimeout(() => onDone(), 3400);
    return () => [t1, t2, t3, t4, tEnd].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        phase >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            className="logo-draw"
            fill="none"
          >
            <defs>
              <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#7da7ff" />
                <stop offset="100%" stopColor="#2563ff" />
              </linearGradient>
            </defs>
            <path
              d="M16 64 L16 24 L44 56 L44 24 L72 56 L72 24"
              stroke="url(#lg)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="72" cy="64" r="3.5" fill="#7da7ff" />
          </svg>
        </div>

        {/* Name */}
        <div
          className={`splash-fade ${phase >= 1 ? "" : "invisible"}`}
          style={{ animationDelay: "0ms" }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
JALI<span className="text-gradient">XON</span>
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={`splash-fade ${phase >= 2 ? "" : "invisible"}`}
          style={{ animationDelay: "0ms" }}
        >
          <p className="text-ink-300 text-sm md:text-base tracking-[0.18em] uppercase">
            Building Digital Experiences That Drive Growth
          </p>
        </div>

        {/* loading bar */}
        <div className="mt-6 w-56 h-[2px] rounded-full bg-ink-700 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600"
            style={{
              width: `${Math.min(100, phase * 28)}%`,
              transition: "width 600ms ease",
            }}
          />
        </div>
      </div>

      {/* dev credit */}
      <div
        className={`absolute bottom-8 splash-fade ${phase >= 3 ? "" : "invisible"}`}
        style={{ animationDelay: "0ms" }}
      >
        <p className="text-[11px] tracking-[0.3em] text-ink-400 uppercase">
Designed & Engineered by <span className="text-ink-200">James Felix</span>
        </p>
      </div>
    </div>
  );
}
