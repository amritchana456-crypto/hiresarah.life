import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#how", label: "How Sarah Helps" },
  { href: "#creator", label: "Creator" },
];

export function Navbar() {
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
          scrolled
            ? "bg-white/75 backdrop-blur-xl border-b border-border-soft"
            : "bg-transparent"
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
            <Button size="sm" onClick={() => scrollTo("#cta")}>
              Hire Sarah free
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white/80 backdrop-blur md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}

function scrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
