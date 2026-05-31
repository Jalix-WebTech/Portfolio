import { useEffect, useRef, useState } from "react";

type Token = { t: string; c: string };

// Lightweight "syntax highlighted" lines (pre-tokenized for a typing effect)
const LINES: Token[][] = [
  [{ t: "import", c: "kw" }, { t: " ", c: "" }, { t: "{ motion }", c: "var" }, { t: " from ", c: "kw" }, { t: "'framer-motion'", c: "str" }],
  [],
  [{ t: "export default function ", c: "kw" }, { t: "Hero", c: "fn" }, { t: "() {", c: "p" }],
  [{ t: "  return", c: "kw" }, { t: " (", c: "p" }],
  [{ t: "    <", c: "p" }, { t: "motion.section", c: "tag" }, { t: " className=", c: "attr" }, { t: '"hero"', c: "str" }],
  [{ t: "      initial=", c: "attr" }, { t: "{{ opacity: ", c: "p" }, { t: "0", c: "num" }, { t: " }}", c: "p" }],
  [{ t: "      animate=", c: "attr" }, { t: "{{ opacity: ", c: "p" }, { t: "1", c: "num" }, { t: " }}>", c: "p" }],
  [{ t: "      <", c: "p" }, { t: "h1", c: "tag" }, { t: ">We build ", c: "p" }, { t: "fast", c: "str" }, { t: " sites</", c: "p" }, { t: "h1", c: "tag" }, { t: ">", c: "p" }],
  [{ t: "    </", c: "p" }, { t: "motion.section", c: "tag" }, { t: ">", c: "p" }],
  [{ t: "  )", c: "p" }],
  [{ t: "}", c: "p" }],
];

const COLOR: Record<string, string> = {
  kw: "text-violet-300",
  str: "text-emerald-300",
  tag: "text-rose-300",
  attr: "text-sky-300",
  fn: "text-amber-300",
  num: "text-orange-300",
  var: "text-brand-200",
  p: "text-ink-300",
  "": "text-ink-300",
};

export default function LiveCode({ className = "" }: { className?: string }) {
  const [done, setDone] = useState<Token[][]>([]);
  const [curLine, setCurLine] = useState(0);
  const [curChars, setCurChars] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  // start typing when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (curLine >= LINES.length) {
      // restart loop after a pause
      const t = setTimeout(() => {
        setDone([]);
        setCurLine(0);
        setCurChars(0);
      }, 2600);
      return () => clearTimeout(t);
    }
    const lineText = LINES[curLine].map((tk) => tk.t).join("");
    if (curChars >= lineText.length) {
      const t = setTimeout(() => {
        setDone((d) => [...d, LINES[curLine]]);
        setCurLine((l) => l + 1);
        setCurChars(0);
      }, 90);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCurChars((c) => c + 1), 22 + Math.random() * 30);
    return () => clearTimeout(t);
  }, [started, curLine, curChars]);

  // render the currently-typing line up to curChars
  function renderPartial(line: Token[], chars: number) {
    let remaining = chars;
    const out: React.ReactNode[] = [];
    for (let i = 0; i < line.length; i++) {
      if (remaining <= 0) break;
      const slice = line[i].t.slice(0, remaining);
      out.push(
        <span key={i} className={COLOR[line[i].c]}>
          {slice}
        </span>
      );
      remaining -= line[i].t.length;
    }
    return out;
  }

  return (
    <div
      ref={ref}
      className={`glass border-gradient rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex items-center gap-2 text-[11px] text-ink-400 font-mono">
          <span className="text-brand-300">Hero.tsx</span>
          <span className="text-ink-600">— Jalixon</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live
        </div>
      </div>
      <pre className="p-5 text-[12.5px] md:text-[13px] leading-6 font-mono overflow-x-auto no-scrollbar min-h-[280px]">
        <code>
          {done.map((line, li) => (
            <div key={li} className="flex">
              <span className="select-none w-6 text-right pr-3 text-ink-600">
                {li + 1}
              </span>
              <span className="flex-1">
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map((tk, ti) => (
                    <span key={ti} className={COLOR[tk.c]}>
                      {tk.t}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
          {curLine < LINES.length && (
            <div className="flex">
              <span className="select-none w-6 text-right pr-3 text-ink-600">
                {done.length + 1}
              </span>
              <span className="flex-1">
                {renderPartial(LINES[curLine], curChars)}
                <span className="inline-block w-[7px] h-[15px] -mb-[2px] bg-brand-400 animate-pulse" />
              </span>
            </div>
          )}
        </code>
      </pre>
    </div>
  );
}
