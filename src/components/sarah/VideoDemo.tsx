import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";
import { HandUnderline } from "./HandUnderline";

const bullets = [
  "Replies in 28 seconds. 24/7. Even at 10 PM.",
  "Filters buyers from dreamers.",
  "Books viewings while they're hot. No chasing. No ghosting.",
];

export function VideoDemo() {
  const [open, setOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">

        {/* Mobile / tablet: stacked headline above phone */}
        <Reveal>
          <div className="text-center lg:hidden">
            <p className="text-[42px] font-extrabold leading-[1.06] sm:text-[58px]">
              <span className="text-gradient">9:04 AM.</span>
            </p>
            <p className="text-[42px] font-extrabold leading-[1.06] text-foreground sm:text-[58px]">
              You open <span className="text-gradient">your CRM.</span>
            </p>
            <p className="mx-auto mt-3 max-w-sm text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px]">
              The lead is <HandUnderline>already qualified</HandUnderline>.{" "}
              The viewing <HandUnderline>is booked</HandUnderline>.
            </p>
          </div>
        </Reveal>

        {/* Desktop: two-column — phone left, text right */}
        <div className="mt-10 flex flex-col items-center gap-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* Phone mockup */}
          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[300px] lg:mx-0 lg:justify-self-center">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="relative rounded-[44px] p-[5px] shadow-float"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="relative overflow-hidden rounded-[40px] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-[14px] w-[90px] -translate-x-1/2 rounded-full bg-black/80" />
                  <video
                    src="/videos/Demowebsite_o.mp4"
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[540/1169] w-full object-contain"
                    aria-hidden
                  />
                  <button
                    onClick={handleOpen}
                    aria-label="Play full demo video"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-float backdrop-blur-sm transition-transform hover:scale-105">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 4l14 8-14 8V4z" fill="#7357F6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text content */}
          <Reveal delay={80}>
            <div className="text-center lg:text-left">
              {/* Desktop-only headline */}
              <div className="hidden lg:block">
                <p className="text-[42px] font-extrabold leading-[1.06] sm:text-[58px] lg:text-[72px]">
                  <span className="text-gradient">9:04 AM.</span>
                </p>
                <p className="text-[42px] font-extrabold leading-[1.06] text-foreground sm:text-[58px] lg:text-[72px]">
                  You open <span className="text-gradient">your CRM.</span>
                </p>
                <p className="mt-3 text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px] lg:text-[22px]">
                  The lead is <HandUnderline>already qualified</HandUnderline>.{" "}
                  The viewing <HandUnderline>is booked</HandUnderline>.
                </p>
              </div>

              <ul className="mt-8 space-y-5 lg:mt-10">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[16px] font-medium leading-relaxed text-foreground sm:text-[17px]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  onClick={handleOpen}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-primary px-6 py-3 text-[15px] font-semibold text-white shadow-float transition-transform hover:scale-105 active:scale-100"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 4l14 8-14 8V4z" fill="white" />
                  </svg>
                  Watch it happen
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ height: "min(90vh, 800px)", aspectRatio: "540/1169" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src="/videos/Demowebsite_o.mp4"
              controls
              autoPlay
              playsInline
              className="h-full w-full rounded-[24px] object-contain"
            />
            <button
              onClick={handleClose}
              aria-label="Close video"
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-card"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#171827" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
