import { useEffect } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";

interface Link {
  href: string;
  label: string;
}

export function MobileMenu({
  open,
  onClose,
  onBook,
  links,
}: {
  open: boolean;
  onClose: () => void;
  onBook: () => void;
  links: Link[];
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/20 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute inset-x-4 top-4 rounded-3xl border border-border-soft bg-white p-5 shadow-float transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="mt-6 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                className="block rounded-2xl px-4 py-3.5 text-[17px] font-semibold text-foreground transition-colors hover:bg-primary-softer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              onClose();
              window.setTimeout(onBook, 180);
            }}
          >
            Hire Sarah free
          </Button>
        </div>
      </div>
    </div>
  );
}
