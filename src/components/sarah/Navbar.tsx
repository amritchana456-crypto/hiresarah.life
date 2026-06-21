import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#how", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#creator", label: "About" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white/75 backdrop-blur-xl border-b border-border-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Sarah home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button size="sm" onClick={onBook}>
              Hire Sarah free
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/85 shadow-[0_0_0_1px_rgba(115,87,246,0.28),0_10px_24px_-12px_rgba(244,91,212,0.72)] backdrop-blur transition-shadow hover:shadow-[0_0_0_1px_rgba(244,91,212,0.42),0_14px_28px_-12px_rgba(115,87,246,0.8)] md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <defs>
                <linearGradient id="mobile-menu-gradient" x1="4" x2="20" y1="7" y2="17">
                  <stop stopColor="#7357F6" />
                  <stop offset="1" stopColor="#F45BD4" />
                </linearGradient>
              </defs>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="url(#mobile-menu-gradient)"
                strokeLinecap="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} onBook={onBook} links={links} />
    </>
  );
}
