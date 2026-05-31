import { useEffect, useRef, useState } from "react";
import { IconClose, IconArrowUpRight } from "./Icons";

const WA = "https://wa.me/2348155141240?text=" +
  encodeURIComponent("Hello Jalixon, I'd like to discuss a website project for my business.");

/* AI bot avatar icon */
function AiIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <defs>
        <linearGradient id="aiG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7da7ff" />
          <stop offset="100%" stopColor="#1748e6" />
        </linearGradient>
      </defs>
      <rect x="10" y="14" width="28" height="22" rx="8" fill="url(#aiG)" />
      <rect x="10" y="14" width="28" height="22" rx="8" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
      {/* antenna */}
      <line x1="24" y1="8" x2="24" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="7" r="2.4" fill="white" />
      {/* eyes */}
      <circle cx="19" cy="24" r="3" fill="white" />
      <circle cx="29" cy="24" r="3" fill="white" />
      <circle cx="19.6" cy="24.6" r="1.2" fill="#0a2270" />
      <circle cx="29.6" cy="24.6" r="1.2" fill="#0a2270" />
      {/* mouth */}
      <path d="M19 30 Q24 33 29 30" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* ears */}
      <rect x="6" y="21" width="4" height="8" rx="2" fill="url(#aiG)" />
      <rect x="38" y="21" width="4" height="8" rx="2" fill="url(#aiG)" />
    </svg>
  );
}

type Msg = { from: "bot" | "user"; text: string; cta?: { label: string; href: string } };

const QUICK = [
  "What services do you offer?",
  "How much does a website cost?",
  "Show me your work",
  "How do I get started?",
];

function getAnswer(q: string): Msg {
  const s = q.toLowerCase();

  const has = (...k: string[]) => k.some((w) => s.includes(w));

  if (has("hello", "hi", "hey", "good morning", "good evening"))
    return { from: "bot", text: "Hi there! 👋 I'm Nova, Jalixon's AI assistant. I can tell you about our services, pricing, process, or portfolio. What would you like to know?" };

  if (has("service", "offer", "do you do", "what can you", "build"))
    return {
      from: "bot",
      text: "We offer 8 core services: Website Development, E-Commerce, Web App Development, UI/UX Design, Website Maintenance, SEO Optimization, Performance Optimization, and Website Redesign. Each is delivered by senior specialists. Want details on any one?",
    };

  if (has("price", "cost", "pricing", "budget", "how much", "rate", "quote"))
    return {
      from: "bot",
      text: "Projects typically range from around ₦300k for focused websites to ₦5M+ for larger platforms. The final quote depends on scope, complexity, and timeline. The fastest way to get an exact estimate is a free consultation.",
      cta: { label: "Get a free quote", href: WA },
    };

  if (has("portfolio", "work", "case stud", "project", "examples", "showcase"))
    return {
      from: "bot",
      text: "We've shipped 18+ products across e-commerce, healthcare, real estate, education, and corporate sites. Check out our Selected Work section for full case studies with results.",
      cta: { label: "View portfolio", href: "#portfolio" },
    };

  if (has("tech", "stack", "technology", "react", "next", "framework", "language"))
    return {
      from: "bot",
      text: "Our default stack: React, Next.js & TypeScript on the frontend; Node.js, Express & Python on the backend; PostgreSQL & MongoDB for data; and AWS, Google Cloud & Vercel for hosting. We choose what's right for your project.",
      cta: { label: "See tech stack", href: "#stack" },
    };

  if (has("process", "how do you work", "workflow", "steps", "timeline", "how long"))
    return {
      from: "bot",
      text: "Our 7-step process: Discovery → Planning → Design → Development → Testing → Launch → Support. Most websites launch in 3–8 weeks depending on scope, with weekly demos throughout.",
      cta: { label: "See our process", href: "#process" },
    };

  if (has("start", "get started", "begin", "hire", "work with", "next step", "consult", "book", "call", "contact"))
    return {
      from: "bot",
      text: "Awesome! The best first step is a free consultation. You can fill out the contact form or chat with us directly on WhatsApp — we usually reply within 4 business hours.",
      cta: { label: "Book on WhatsApp", href: WA },
    };

  if (has("seo", "rank", "google", "traffic", "search"))
    return {
      from: "bot",
      text: "Yes! SEO is built into everything we ship — semantic HTML, schema markup, Core Web Vitals optimization, and content strategy. Several clients have seen 200%+ growth in qualified organic leads.",
    };

  if (has("ecommerce", "e-commerce", "shop", "store", "sell online", "stripe", "payment"))
    return {
      from: "bot",
      text: "We build conversion-focused online stores with Stripe/PayPal, headless commerce, subscriptions, and analytics. Northwind Outdoors saw +38% revenue after our rebuild. Want to discuss yours?",
      cta: { label: "Talk e-commerce", href: WA },
    };

  if (has("maintenance", "support", "ongoing", "after launch"))
    return {
      from: "bot",
      text: "We offer ongoing maintenance plans: 24/7 uptime monitoring, security patching, performance tuning, and monthly reports. Your site stays fast, secure, and current.",
    };

  if (has("founder", "ceo", "team", "who are you", "about"))
    return {
      from: "bot",
      text: "Jalixon is a Nigeria-based studio founded by James Felix (3+ years building web systems, 18+ projects shipped). Every project is principal-led — no juniors handed the wheel.",
      cta: { label: "Meet the founder", href: "#founder" },
    };

  if (has("location", "where", "office", "based", "address"))
    return {
      from: "bot",
      text: "We're based in Iseyin, Oyo State, Nigeria (Our Lady Catholic Hospital area), and work with clients across Nigeria and beyond. Hours: Mon–Sat, 9 AM–7 PM WAT. Email: jamefelix1262002@gmail.com · WhatsApp: +234 815 514 1240.",
      cta: { label: "Contact us", href: "#contact" },
    };

  if (has("thank", "thanks", "great", "cool", "awesome", "nice"))
    return { from: "bot", text: "You're very welcome! 😊 Anything else I can help with — services, pricing, or booking a call?" };

  return {
    from: "bot",
    text: "Great question! I can help with our services, pricing, portfolio, tech stack, process, or getting started. For anything specific, our team is one message away on WhatsApp.",
    cta: { label: "Chat with the team", href: WA },
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi! I'm Nova, Jalixon's AI assistant. 🤖 Ask me anything about our services, pricing, or work — or pick a quick question below.",
    },
  ]);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, getAnswer(q)]);
    }, 650 + Math.random() * 500);
  }

  return (
    <>
      {/* Launcher button */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          setPulse(false);
        }}
        aria-label="Open AI assistant"
        className="fixed bottom-24 right-6 z-40 group"
      >
        <span className="relative inline-flex h-14 w-14 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 items-center justify-center shadow-xl shadow-brand-500/40 hover:scale-105 transition-transform">
          {open ? (
            <IconClose className="h-6 w-6 text-white" />
          ) : (
            <AiIcon className="h-9 w-9" />
          )}
          {pulse && !open && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-ink-950 animate-pulse" />
          )}
        </span>
        {!open && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink-900 border border-white/10 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            Ask Nova AI
          </span>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-40 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm transition-all origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="glass border-gradient rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[30rem]">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-brand-600/40 to-brand-800/20 border-b border-white/10">
            <div className="relative h-10 w-10 rounded-full bg-ink-900/60 flex items-center justify-center">
              <AiIcon className="h-7 w-7" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-ink-900" />
            </div>
            <div className="flex-1">
              <div className="font-display text-sm font-semibold text-white flex items-center gap-1.5">
                Nova
                <span className="text-[9px] uppercase tracking-wider bg-brand-500/30 text-brand-200 px-1.5 py-0.5 rounded">AI</span>
              </div>
              <div className="text-[11px] text-emerald-300">Online · replies instantly</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-8 w-8 rounded-full hover:bg-white/10 flex items-center justify-center text-ink-300"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.from === "bot" && (
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <AiIcon className="h-5 w-5" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-brand-500 text-white rounded-br-sm"
                      : "bg-white/[0.07] text-ink-100 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                  {m.cta && (
                    <a
                      href={m.cta.href}
                      target={m.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-3 py-1.5 text-xs font-semibold transition-colors"
                    >
                      {m.cta.label} <IconArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shrink-0 mr-2">
                  <AiIcon className="h-5 w-5" />
                </div>
                <div className="bg-white/[0.07] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-ink-300 animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick replies (only initially) */}
            {msgs.length === 1 && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full glass border-gradient text-ink-200 hover:text-white hover:bg-brand-500/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              className="flex-1 bg-white/5 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-ink-400 focus:outline-none focus:bg-white/[0.08] border border-white/10 focus:border-brand-400"
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-10 w-10 rounded-full bg-brand-500 hover:bg-brand-600 flex items-center justify-center text-white shrink-0 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
          <div className="px-4 pb-2 text-center text-[10px] text-ink-500">
            Powered by Jalixon AI · Instant answers, anytime
          </div>
        </div>
      </div>
    </>
  );
}
