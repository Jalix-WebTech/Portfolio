import { useEffect, useMemo, useRef, useState } from "react";
import LiveCode from "./LiveCode";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrush,
  IconCart,
  IconCheck,
  IconClock,
  IconCode,
  IconFacebook,
  IconReddit,
  IconInstagram,
  IconLayers,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
  IconRefresh,
  IconRocket,
  IconSearch,
  IconShield,
  IconStar,
  IconTwitter,
  IconWhatsapp,
} from "./Icons";

const WHATSAPP_NUMBER = "2348155141240";
const WA_MSG = encodeURIComponent(
  "Hello Jalixon, I'd like to discuss a website project for my business."
);
export const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

// Centralized brand contact + social links
export const SOCIALS = {
  x: "https://x.com/Jalixfelix?t=4H7nLB7uvteP_FxlBzmOhg&s=09",
  facebook: "https://www.facebook.com/profile.php?id=61585894787080",
  whatsapp: waLink,
  linkedin:
    "https://www.linkedin.com/in/felix-james-3848ab2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  instagram: "https://www.instagram.com/jalixtech?igsh=MThoMjY2NmozbDR2cg==",
  reddit: "https://www.reddit.com/u/Fast-Replacement3820/s/9xAiKyKv3I",
  email: "jamefelix1262002@gmail.com",
  phoneDisplay: "+234 815 514 1240",
};

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Comp = As as any;
  return (
    <Comp
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/* ---------- Section wrapper ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-300 font-medium">
      <span className="h-[1px] w-8 bg-brand-400/60" />
      {children}
    </span>
  );
}

/* ============================================================
   HERO
============================================================ */
export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass border-gradient px-4 py-1.5 text-xs text-ink-200 dark:text-ink-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Accepting new projects · Q2 2026
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                We Build <span className="text-gradient">High-Performance</span> Websites That Grow Businesses
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl text-lg text-ink-300 leading-relaxed">
                From business websites to enterprise platforms, we craft digital
                experiences that attract customers, increase credibility, and
                drive measurable revenue growth.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-7 py-4 text-sm font-semibold text-white transition-colors glow-ring"
                >
                  Book Consultation
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors backdrop-blur"
                >
                  View Portfolio
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
                {[
                  { k: "18+", v: "Projects Shipped" },
                  { k: "12+", v: "Happy Clients" },
                  { k: "3 yrs", v: "Building Web" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-white">
                      {s.k}
                    </div>
                    <div className="text-xs text-ink-400 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual: stacked browser mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <HeroMockup />
            </Reveal>
          </div>
        </div>

        {/* Logos marquee */}
        <div className="relative mt-24">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-400">
            Trusted by ambitious teams worldwide
          </p>
          <div className="mt-6 overflow-hidden">
            <div className="flex w-max gap-14 animate-marquee opacity-70">
              {[
                "AURORA",
                "NORTHWIND",
                "LUMEN",
                "QUANTIVA",
                "PIXEL FORGE",
                "VERTEX",
                "OCTAVIA",
                "MERIDIAN",
              ]
                .concat([
                  "AURORA",
                  "NORTHWIND",
                  "LUMEN",
                  "QUANTIVA",
                  "PIXEL FORGE",
                  "VERTEX",
                  "OCTAVIA",
                  "MERIDIAN",
                ])
                .map((n, i) => (
                  <span
                    key={i}
                    className="font-display text-xl md:text-2xl font-bold tracking-[0.2em] text-ink-300/80"
                  >
                    {n}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-brand-500/10 blur-3xl rounded-[40px]" />
      {/* Main browser */}
      <div className="relative glass border-gradient rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-floaty">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 px-3 py-1 rounded-md bg-white/5 text-[10px] text-ink-300 font-mono">
jalixon.com
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded bg-white/10" />
              <div className="h-2 w-16 rounded bg-white/5" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-6 w-12 rounded bg-white/5" />
              <div className="h-6 w-12 rounded bg-brand-500/80" />
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-gradient-to-br from-brand-500/30 via-brand-700/20 to-transparent p-5 border border-white/5">
            <div className="h-3 w-3/4 rounded bg-white/20" />
            <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
            <div className="mt-4 flex gap-2">
              <div className="h-7 w-20 rounded bg-brand-400" />
              <div className="h-7 w-20 rounded bg-white/10" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div
        className="absolute -bottom-10 -left-6 w-40 rounded-[26px] glass border-gradient overflow-hidden shadow-2xl animate-floaty"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="px-3 pt-3">
          <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
          <div className="mt-3 rounded-xl bg-gradient-to-br from-brand-500/40 to-brand-800/40 p-3">
            <div className="h-1.5 w-12 rounded bg-white/30" />
            <div className="mt-1.5 h-1.5 w-16 rounded bg-white/15" />
            <div className="mt-3 h-12 rounded bg-white/10" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 pb-3">
            <div className="h-10 rounded bg-white/5" />
            <div className="h-10 rounded bg-white/5" />
          </div>
        </div>
      </div>

      {/* Floating metric card */}
      <div
        className="absolute -top-6 -right-6 glass border-gradient rounded-xl p-4 w-44 animate-floaty"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="text-[10px] uppercase tracking-widest text-ink-400">
          Lighthouse
        </div>
        <div className="mt-1 font-display text-3xl font-bold text-white">98</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[96%] bg-gradient-to-r from-emerald-400 to-brand-400" />
        </div>
        <div className="mt-2 text-[10px] text-ink-400">Performance Score</div>
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT
============================================================ */
export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionLabel>About the Studio</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              A boutique studio building <span className="text-gradient">products that matter</span>.
            </h2>
            <p className="mt-6 text-ink-300 leading-relaxed">
              Jalixon is a Nigeria-based team of designers and engineers
              specializing in modern websites, SaaS platforms, and e-commerce
              experiences. Since 2023, we've partnered with founders, startups,
              and growing businesses across Nigeria and beyond to ship digital
              products that look unforgettable and convert relentlessly.
            </p>
            <p className="mt-4 text-ink-300 leading-relaxed">
              Every engagement is led by a principal — no juniors handed the
              wheel, no agency middlemen. Just craft, accountability, and a
              relentless focus on outcomes.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["18+", "Projects delivered"],
                ["12+", "Clients served"],
                ["98", "Avg. Lighthouse score"],
                ["4.9/5", "Client satisfaction"],
              ].map(([k, v]) => (
                <div key={v} className="glass rounded-xl p-5 border-gradient">
                  <div className="font-display text-3xl font-bold text-white">{k}</div>
                  <div className="text-xs text-ink-400 mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                t: "Our Mission",
                d: "Deliver world-class digital solutions that help businesses thrive online — faster, smarter, and built to scale.",
                i: <IconRocket className="h-6 w-6 text-brand-300" />,
              },
              {
                t: "Our Vision",
                d: "Become the most trusted web development partner for ambitious businesses building the next generation of digital products.",
                i: <IconLayers className="h-6 w-6 text-brand-300" />,
              },
              {
                t: "What We Do",
                d: "Strategy, design, and engineering for high-performance websites, web applications, e-commerce, and SaaS platforms.",
                i: <IconCode className="h-6 w-6 text-brand-300" />,
              },
              {
                t: "Why Clients Choose Us",
                d: "Senior-only delivery, transparent process, measurable outcomes, and partnerships that outlive the project.",
                i: <IconShield className="h-6 w-6 text-brand-300" />,
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="glass border-gradient rounded-2xl p-6 h-full tilt-card">
                  <div className="h-11 w-11 rounded-xl bg-brand-500/15 flex items-center justify-center">
                    {c.i}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES
============================================================ */
const SERVICES = [
  {
    icon: IconCode,
    title: "Website Development",
    desc: "Custom-built marketing & business websites engineered for speed, SEO, and conversion.",
    benefits: ["Hand-coded performance", "SEO-ready architecture", "CMS integration"],
  },
  {
    icon: IconCart,
    title: "E-Commerce Development",
    desc: "Conversion-focused online stores with secure payments, inventory, and analytics built-in.",
    benefits: ["Stripe & PayPal", "Headless commerce", "Subscriptions & upsells"],
  },
  {
    icon: IconLayers,
    title: "Web Application Development",
    desc: "Scalable web apps and internal platforms — from MVPs to enterprise-grade systems.",
    benefits: ["TypeScript everywhere", "API & integrations", "Role-based access"],
  },
  {
    icon: IconBrush,
    title: "UI / UX Design",
    desc: "Interfaces that feel intuitive and convert. Research-led, system-driven design.",
    benefits: ["Design systems", "Prototypes in Figma", "Accessibility by default"],
  },
  {
    icon: IconShield,
    title: "Website Maintenance",
    desc: "Proactive monitoring, security patching, and continuous improvements every month.",
    benefits: ["24/7 uptime checks", "Security hardening", "Monthly reports"],
  },
  {
    icon: IconSearch,
    title: "SEO Optimization",
    desc: "Technical and on-page SEO that grows organic traffic and qualified leads.",
    benefits: ["Core Web Vitals", "Schema markup", "Content strategy"],
  },
  {
    icon: IconRocket,
    title: "Performance Optimization",
    desc: "Make your existing site blazingly fast. Better UX, higher rankings, more revenue.",
    benefits: ["Sub-second loads", "Image & font tuning", "Edge caching"],
  },
  {
    icon: IconRefresh,
    title: "Website Redesign",
    desc: "Modernize your brand and rebuild your site for today's standards and tomorrow's growth.",
    benefits: ["Brand refresh", "Migration support", "Zero downtime launch"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Premium services for ambitious <span className="text-gradient">digital products</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-ink-300 max-w-md">
              End-to-end web development services delivered by senior
              specialists. Pick a single service or partner with us across the
              full lifecycle.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group glass border-gradient rounded-2xl p-6 h-full tilt-card relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-700/10 border border-brand-400/20 flex items-center justify-center text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs text-ink-300"
                      >
                        <IconCheck className="h-3.5 w-3.5 text-brand-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-300 hover:text-brand-200"
                  >
                    Learn more <IconArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PORTFOLIO
============================================================ */
const PORTFOLIO = [
  {
    title: "Aurora Bank — Digital Onboarding",
    category: "SaaS Platforms",
    industry: "Fintech",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    challenge: "Onboarding drop-off above 40% on legacy KYC flows.",
    solution: "Redesigned multi-step flow with progressive disclosure & smart defaults.",
    result: "+62% completion · 3.1s avg. time saved per user",
    image: "/images/work-fintech.jpg",
    device: "Web App",
  },
  {
    title: "Northwind Outdoors — Storefront",
    category: "E-Commerce",
    industry: "Retail",
    tech: ["Shopify Hydrogen", "React", "Stripe"],
    challenge: "Slow product pages hurting conversion and SEO rankings.",
    solution: "Migrated to headless commerce with edge-cached PDPs.",
    result: "+38% revenue · LCP from 4.2s → 0.9s",
    image: "/images/work-ecommerce.jpg",
    device: "Tablet · Mobile",
  },
  {
    title: "Lumen Health — Clinic Portal",
    category: "Healthcare Solutions",
    industry: "Healthcare",
    tech: ["React", "Node.js", "MongoDB", "HIPAA"],
    challenge: "Fragmented patient records across 12 clinics.",
    solution: "Unified portal with role-based access and audit trails.",
    result: "−71% admin time · 100% HIPAA compliance",
    image: "/images/work-healthcare.jpg",
    device: "Desktop",
  },
  {
    title: "Vertex Realty — Listings Platform",
    category: "Real Estate Platforms",
    industry: "Real Estate",
    tech: ["Next.js", "Mapbox", "Algolia", "Vercel"],
    challenge: "Outdated UX with poor search and no map integration.",
    solution: "Faceted search, interactive maps, saved listings, agent dashboard.",
    result: "+220% qualified leads · 5x faster search",
    image: "/images/work-realestate.jpg",
    device: "Laptop",
  },
  {
    title: "Quantiva Capital — Corporate Site",
    category: "Corporate Websites",
    industry: "Investment",
    tech: ["Next.js", "Sanity CMS", "TypeScript"],
    challenge: "Brand refresh required to attract enterprise LPs.",
    solution: "Elevated identity, motion-rich storytelling, investor portal.",
    result: "+48% inbound meetings · ₦140B new AUM in 6 mo.",
    image: "/images/work-corporate.jpg",
    device: "Desktop",
  },
  {
    title: "Octavia LMS — Education Suite",
    category: "Educational Systems",
    industry: "EdTech",
    tech: ["React", "Express", "PostgreSQL", "Stripe"],
    challenge: "Schools needed an integrated LMS + billing platform.",
    solution: "Modular LMS with live classes, assessments, and revenue tools.",
    result: "12,000+ students onboarded in Year 1",
    image: "/images/work-education.jpg",
    device: "Tablet · Laptop",
  },
];

const CATEGORIES = [
  "All",
  "Corporate Websites",
  "E-Commerce",
  "SaaS Platforms",
  "Educational Systems",
  "Healthcare Solutions",
  "Real Estate Platforms",
];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Case studies in <span className="text-gradient">craft & growth</span>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    filter === c
                      ? "bg-brand-500 text-white"
                      : "glass border-gradient text-ink-300 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <button
                onClick={() => setActive(PORTFOLIO.indexOf(p))}
                className="group text-left w-full glass border-gradient rounded-2xl overflow-hidden tilt-card"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} shown on ${p.device}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-[10px] uppercase tracking-widest text-white">
                    {p.category}
                  </div>
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-brand-500/80 backdrop-blur text-[10px] uppercase tracking-widest text-white">
                    {p.device}
                  </div>
                  <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-widest text-ink-400">
                    {p.industry}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300 line-clamp-2">
                    {p.solution}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / project detail */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full glass border-gradient rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 md:h-80 relative overflow-hidden">
              <img
                src={PORTFOLIO[active].image}
                alt={PORTFOLIO[active].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center"
                aria-label="Close"
              >
                ×
              </button>
              <div className="absolute bottom-6 left-6">
                <div className="text-[10px] uppercase tracking-widest text-white/80">
                  {PORTFOLIO[active].industry} · {PORTFOLIO[active].category}
                </div>
                <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold text-white">
                  {PORTFOLIO[active].title}
                </h3>
              </div>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink-400">
                  Challenge
                </div>
                <p className="mt-2 text-sm text-ink-200 leading-relaxed">
                  {PORTFOLIO[active].challenge}
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink-400">
                  Solution
                </div>
                <p className="mt-2 text-sm text-ink-200 leading-relaxed">
                  {PORTFOLIO[active].solution}
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink-400">
                  Results
                </div>
                <p className="mt-2 text-sm text-brand-200 font-semibold leading-relaxed">
                  {PORTFOLIO[active].result}
                </p>
              </div>
              <div className="md:col-span-3 pt-2">
                <div className="text-[10px] uppercase tracking-widest text-ink-400">
                  Technology Stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PORTFOLIO[active].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   WHY CHOOSE US
============================================================ */
const REASONS = [
  { t: "Expert Developers", d: "Senior engineers with 8+ years building production systems." },
  { t: "Modern Technologies", d: "React, Next.js, TypeScript, and battle-tested cloud stacks." },
  { t: "Fast Delivery", d: "Agile sprints, weekly demos, and predictable launch dates." },
  { t: "Scalable Solutions", d: "Architecture that grows with your traffic and revenue." },
  { t: "Security Best Practices", d: "OWASP-aligned, encrypted, audited at every release." },
  { t: "Responsive Design", d: "Pixel-perfect from 320px phones to 4K displays." },
  { t: "Ongoing Support", d: "SLAs, monitoring, and a real human one message away." },
  { t: "Business-Focused", d: "Every decision tied to revenue, retention, or growth." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel>Why Jalixon</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Built on craft.<br />
              <span className="text-gradient">Measured by outcomes.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-ink-300">
              Eight reasons enterprise teams, scale-ups, and founders choose us
              as their long-term web development partner.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 50}>
              <div className="glass border-gradient rounded-2xl p-6 h-full tilt-card">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-brand-500/15 text-brand-300 flex items-center justify-center font-display font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {r.t}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-ink-300 leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CRAFT / LIVE CODE
============================================================ */
export function Craft() {
  return (
    <section id="craft" className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionLabel>Engineering Craft</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              We don't drag boxes.<br />
              <span className="text-gradient">We write real code.</span>
            </h2>
            <p className="mt-6 text-ink-300 leading-relaxed max-w-md">
              Every product is hand-engineered for performance, accessibility,
              and scale. No bloated builders, no template lock-in — just clean,
              maintainable code your team can grow with.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["Type-safe everywhere", "Strict TypeScript across the entire stack."],
                ["Tested & audited", "Unit, integration, and accessibility checks on every PR."],
                ["Built to last", "Documented, modular architecture you actually own."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-md bg-brand-500/15 text-brand-300 flex items-center justify-center shrink-0">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">{t}</div>
                    <div className="text-ink-400 text-sm">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 bg-brand-500/10 blur-3xl rounded-[40px]" />
              <LiveCode className="relative" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECH STACK
============================================================ */
const STACK = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue"],
  Backend: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "GraphQL"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  Cloud: ["AWS", "Google Cloud", "Vercel", "Cloudflare", "Docker", "Kubernetes"],
};

export function TechStack() {
  const [tab, setTab] = useState<keyof typeof STACK>("Frontend");
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel>Technology Stack</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A modern stack chosen for <span className="text-gradient">speed, scale & security</span>.
            </h2>
            <p className="mt-5 text-ink-300">
              We pick the right tools for the job — not the trendiest. Our
              defaults are proven at scale by teams like Vercel, Stripe, and
              Linear.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {(Object.keys(STACK) as Array<keyof typeof STACK>).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    tab === k
                      ? "bg-brand-500 text-white"
                      : "glass border-gradient text-ink-300 hover:text-white"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {STACK[tab].map((t) => (
                <span
                  key={t}
                  className="glass border-gradient rounded-xl px-4 py-2.5 text-sm text-white tilt-card"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-radial-glow rounded-full" />
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "22s" }} />
              <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" style={{ animationDuration: "16s" }} />
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-2xl glass border-gradient flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-gradient">Jx</span>
                </div>
              </div>
              {/* Tech dots */}
              {STACK[tab].slice(0, 6).map((t, i, arr) => {
                const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
                const r = 42; // %
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <div
                    key={t}
                    className="absolute -translate-x-1/2 -translate-y-1/2 glass border-gradient rounded-xl px-3 py-2 text-xs font-medium text-white whitespace-nowrap"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {t}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CEO / FOUNDER
============================================================ */
export function CEO() {
  return (
    <section id="founder" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/30 to-transparent blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden glass border-gradient aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/31647492/pexels-photo-31647492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="James Felix, Founder & CEO of Jalixon"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass border-gradient rounded-xl px-4 py-3">
                  <div className="text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-400">
                    Founder · CEO
                  </div>
                  <div className="font-display text-lg font-semibold text-white">
                    James Felix
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <SectionLabel>Meet the Founder</SectionLabel>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
                Leadership rooted in <span className="text-gradient">craft, integrity & vision</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-ink-300 leading-relaxed">
                James Felix is the founder and CEO of Jalixon. Over the past
                3+ years he has built modern web systems for startups, SMEs, and
                growing brands across Nigeria and beyond — leading the studio's
                design and engineering practice with technical depth and a sharp
                eye for product strategy.
              </p>
              <p className="mt-4 text-ink-300 leading-relaxed">
                "I started Jalixon to prove that a small, focused team could
                out-deliver any large agency. Every product we ship is judged on
                one question — did it move the business forward?"
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-3 max-w-md gap-6">
                <div>
                  <div className="font-display text-3xl font-bold text-white">3+</div>
                  <div className="text-xs text-ink-400 mt-1">Years building web</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">12+</div>
                  <div className="text-xs text-ink-400 mt-1">Clients served</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">18+</div>
                  <div className="text-xs text-ink-400 mt-1">Projects shipped</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { i: <IconLinkedin />, l: "LinkedIn", href: SOCIALS.linkedin },
                  { i: <IconTwitter />, l: "X (Twitter)", href: SOCIALS.x },
                  { i: <IconFacebook />, l: "Facebook", href: SOCIALS.facebook },
                  { i: <IconInstagram />, l: "Instagram", href: SOCIALS.instagram },
                  { i: <IconReddit />, l: "Reddit", href: SOCIALS.reddit },
                  { i: <IconWhatsapp />, l: "WhatsApp", href: SOCIALS.whatsapp },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.l}
                    className="h-11 w-11 rounded-full glass border-gradient flex items-center justify-center text-ink-200 hover:text-white hover:bg-brand-500/20 transition-colors"
                  >
                    {s.i}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
============================================================ */
const TESTIMONIALS = [
  {
    quote:
      "Jalixon rebuilt our SaaS marketing site in 6 weeks. Conversions doubled in the first month and we've never looked back.",
    name: "Sara Lindgren",
    role: "Head of Growth",
    company: "Aurora Bank",
    initials: "SL",
  },
  {
    quote:
      "Senior craft from day one. The team moved like an in-house squad and shipped a platform that scaled with us from 1k → 120k users.",
    name: "Marcus Reyes",
    role: "CTO",
    company: "Octavia LMS",
    initials: "MR",
  },
  {
    quote:
      "Hands down the most professional engagement we've had. Pixel-perfect design, blazingly fast site, real partnership.",
    name: "Priya Natarajan",
    role: "VP Marketing",
    company: "Quantiva Capital",
    initials: "PN",
  },
  {
    quote:
      "They redesigned our store and our Core Web Vitals went from red to all green. Revenue followed.",
    name: "James O'Connor",
    role: "Founder",
    company: "Northwind Outdoors",
    initials: "JO",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const active = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel>Client Voices</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Loved by founders & <span className="text-gradient">enterprise teams</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <Reveal>
            <div className="glass border-gradient rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-8 font-display text-7xl text-brand-500/30 leading-none">
                "
              </div>
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl md:text-2xl text-white leading-relaxed">
                {active.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center font-display font-bold text-white">
                  {active.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{active.name}</div>
                  <div className="text-xs text-ink-400">
                    {active.role} · {active.company}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-brand-400" : "w-2 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
============================================================ */
const PROCESS = [
  { t: "Discovery", d: "Stakeholder interviews, audits, and goals." },
  { t: "Planning", d: "Roadmap, scope, architecture, and timeline." },
  { t: "Design", d: "UX flows, wireframes, and high-fidelity UI." },
  { t: "Development", d: "Agile sprints with weekly demos." },
  { t: "Testing", d: "QA, performance, accessibility, security." },
  { t: "Launch", d: "Zero-downtime deployment and monitoring." },
  { t: "Support", d: "Ongoing optimization and partnership." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A proven process from <span className="text-gradient">idea to impact</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="relative">
                  <div className="mx-auto h-14 w-14 rounded-full bg-ink-800 border border-brand-400/30 flex items-center justify-center font-display font-bold text-brand-200">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="font-display text-base font-semibold text-white">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-xs text-ink-400 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT + WHATSAPP FORM
============================================================ */
export function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    type: "Website Development",
    budget: "₦300k – ₦800k",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Jalixon, I'd like to discuss a project.\n\n` +
        `Name: ${form.name}\n` +
        `Business: ${form.business}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Project Type: ${form.type}\n` +
        `Budget: ${form.budget}\n\n` +
        `${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputCls =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:outline-none focus:border-brand-400 focus:bg-white/[0.07] transition-colors";

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Let's build something <span className="text-gradient">remarkable</span> together.
            </h2>
            <p className="mt-5 text-ink-300 max-w-md">
              Tell us about your project. We typically reply within 4 business
              hours. Prefer WhatsApp? Tap the floating button anytime.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { i: <IconPin className="h-5 w-5" />, t: "Office", v: "Our Lady Catholic Hospital Area, Iseyin, Oyo State, Nigeria", href: "https://www.google.com/maps?q=Our%20Lady%20Catholic%20Hospital%2C%20Iseyin%2C%20Oyo%20State%2C%20Nigeria" },
                { i: <IconMail className="h-5 w-5" />, t: "Email", v: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
                { i: <IconPhone className="h-5 w-5" />, t: "Phone / WhatsApp", v: SOCIALS.phoneDisplay, href: SOCIALS.whatsapp },
                { i: <IconClock className="h-5 w-5" />, t: "Hours", v: "Mon – Sat · 9:00 AM – 7:00 PM WAT" },
              ].map((c) => {
                const Body = (
                  <>
                    <div className="h-11 w-11 rounded-xl glass border-gradient flex items-center justify-center text-brand-300 shrink-0">
                      {c.i}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-400 dark:text-ink-400">
                        {c.t}
                      </div>
                      <div className="mt-0.5 dark:text-white group-hover:text-brand-300 transition-colors">
                        {c.v}
                      </div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.t}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    {Body}
                  </a>
                ) : (
                  <div key={c.t} className="group flex items-start gap-4">
                    {Body}
                  </div>
                );
              })}
            </div>

            {/* Map — Our Lady Catholic Hospital, Iseyin, Oyo State, Nigeria */}
            <div className="mt-8 rounded-2xl overflow-hidden glass border-gradient aspect-[16/9] relative">
              <iframe
                title="Our Lady Catholic Hospital, Iseyin, Oyo State, Nigeria"
                src="https://www.google.com/maps?q=Our%20Lady%20Catholic%20Hospital%2C%20Iseyin%2C%20Oyo%20State%2C%20Nigeria&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={submit}
              className="glass border-gradient rounded-3xl p-7 md:p-9"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputCls} mt-2`}
                    placeholder="Jane Cooper"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Business Name
                  </label>
                  <input
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className={`${inputCls} mt-2`}
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputCls} mt-2`}
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`${inputCls} mt-2`}
                    placeholder="+1 555 000 0000"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Project Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className={`${inputCls} mt-2`}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.title} className="bg-ink-800">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-400">
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={`${inputCls} mt-2`}
                  >
                    {["< ₦300k", "₦300k – ₦800k", "₦800k – ₦2M", "₦2M – ₦5M", "₦5M+"].map(
                      (b) => (
                        <option key={b} className="bg-ink-800">
                          {b}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-widest text-ink-400">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputCls} mt-2 resize-none`}
                  placeholder="Tell us about your goals, timeline, and what success looks like…"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition-colors glow-ring"
              >
                <IconWhatsapp className="h-4 w-4" />
                Send via WhatsApp
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-emerald-300">
                  Opening WhatsApp… we'll be in touch shortly.
                </p>
              )}
              <p className="mt-3 text-center text-[11px] text-ink-400">
                By submitting you agree to our privacy policy. We never share your data.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
