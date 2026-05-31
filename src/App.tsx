import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import {
  About,
  CEO,
  Contact,
  Craft,
  Hero,
  Portfolio,
  Process,
  Services,
  TechStack,
  Testimonials,
  WhyUs,
  waLink,
  SOCIALS,
} from "./components/Sections";
import Chatbot from "./components/Chatbot";
import {
  IconArrowUpRight,
  IconClose,
  IconFacebook,
  IconReddit,
  IconInstagram,
  IconLinkedin,
  IconMenu,
  IconMoon,
  IconSun,
  IconTwitter,
  IconWhatsapp,
} from "./components/Icons";

const NAV = [
  { l: "Home", h: "#home" },
  { l: "About", h: "#about" },
  { l: "Services", h: "#services" },
  { l: "Work", h: "#portfolio" },
  { l: "Craft", h: "#craft" },
  { l: "Process", h: "#process" },
  { l: "Founder", h: "#founder" },
  { l: "Contact", h: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 group">
      <span className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19V5l8 9V5l8 9" />
        </svg>
      </span>
      <span className="font-display font-bold text-lg tracking-tight">
Jalixon<span className="text-brand-400">.</span>
      </span>
    </a>
  );
}

function Navbar({
  theme,
  toggleTheme,
}: {
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-ink-950/70 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.l}
                href={n.h}
                className="px-4 py-2 text-sm text-ink-200 hover:text-white transition-colors"
              >
                {n.l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hidden md:flex h-10 w-10 rounded-full glass border-gradient items-center justify-center text-ink-200 hover:text-white"
            >
              {theme === "dark" ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              Book Call <IconArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="lg:hidden h-10 w-10 rounded-full glass border-gradient flex items-center justify-center text-white"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ink-900 border-l border-white/5 p-6 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 rounded-full glass border-gradient flex items-center justify-center text-white"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.l}
                href={n.h}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-lg font-display text-white hover:bg-white/5 rounded-lg"
              >
                {n.l}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full glass border-gradient py-3 text-sm text-white"
            >
              {theme === "dark" ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
              {theme === "dark" ? "Light" : "Dark"} mode
            </button>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white"
          >
            <IconWhatsapp className="h-4 w-4" />
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-sm text-ink-300 max-w-sm leading-relaxed">
              Jalixon is a Nigeria-based web development agency building
              high-performance digital products for ambitious businesses across
              Nigeria and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { i: <IconLinkedin />, h: SOCIALS.linkedin, l: "LinkedIn" },
                { i: <IconTwitter />, h: SOCIALS.x, l: "X" },
                { i: <IconFacebook />, h: SOCIALS.facebook, l: "Facebook" },
                { i: <IconInstagram />, h: SOCIALS.instagram, l: "Instagram" },
                { i: <IconReddit />, h: SOCIALS.reddit, l: "Reddit" },
                { i: <IconWhatsapp />, h: SOCIALS.whatsapp, l: "WhatsApp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.h}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.l}
                  className="h-10 w-10 rounded-full glass border-gradient flex items-center justify-center text-ink-200 dark:text-ink-200 hover:text-white hover:bg-brand-500/20"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-ink-400">Studio</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-200">
              {["About", "Work", "Process", "Founder", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-ink-400">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-200">
              {[
                "Website Development",
                "E-Commerce",
                "Web Applications",
                "UI/UX Design",
                "SEO Optimization",
                "Maintenance & Support",
              ].map((l) => (
                <li key={l}>
                  <a href="#services" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-ink-400">Get Updates</h4>
            <p className="mt-4 text-sm text-ink-300">
              Quarterly insights on web craft, performance, and product design.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex glass border-gradient rounded-full p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-ink-400 focus:outline-none"
              />
              <button className="rounded-full bg-brand-500 hover:bg-brand-600 px-5 py-2 text-xs font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Jalixon. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group"
      >
        <span className="relative inline-flex h-14 w-14 rounded-full bg-emerald-500 text-white items-center justify-center shadow-xl shadow-emerald-500/30 pulse-ring hover:scale-105 transition-transform">
          <IconWhatsapp className="h-7 w-7" />
        </span>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink-900 border border-white/10 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </a>

      {/* Sticky consultation pill (left side) */}
      <a
        href="#contact"
        className={`fixed left-6 bottom-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-5 py-3 text-sm font-semibold shadow-xl shadow-black/30 hover:bg-brand-500 hover:text-white transition-all ${
          stickyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Book a free consultation
      </a>
    </>
  );
}

export default function App() {
  const [splash, setSplash] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-ink-50 text-ink-900" : "bg-ink-950 text-ink-100"} selection:bg-brand-500`}>
      {splash && <Splash onDone={() => setSplash(false)} />}

      <Navbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Craft />
        <TechStack />
        <CEO />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Chatbot />
    </div>
  );
}
