import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";

const bullets = [
  "Replies to inquiries in under 30 seconds — even at 10 PM.",
  "Qualifies the buyer before your agent picks up the phone.",
  "Books the viewing automatically while interest is still high.",
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
          <p className="text-center text-[28px] font-extrabold leading-snug text-foreground sm:text-[36px] lg:hidden">
            Reply first.{" "}
            <span className="text-gradient">Book the viewing.</span>
          </p>
        </Reveal>

        {/* Desktop: two-column — phone left, text right */}
        <div className="mt-10 flex flex-col items-center gap-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Phone mockup */}
          <Reveal delay={150}>
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[300px] lg:mx-0 lg:justify-self-center">
              <div
                className="relative rounded-[44px] p-[5px] shadow-float"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="relative overflow-hidden rounded-[40px] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-[14px] w-[90px] -translate-x-1/2 rounded-full bg-black/80" />
                  <video
                    src="/Whatsapp_Chat.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="aspect-[9/16] w-full object-cover"
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
              <p className="hidden text-[36px] font-extrabold leading-snug text-foreground lg:block lg:text-[44px]">
                Reply first.{" "}
                <span className="text-gradient">Book the viewing.</span>
              </p>

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
            style={{ height: "min(90vh, 800px)", aspectRatio: "9/16" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src="/Whatsapp_Chat.mp4"
              controls
              autoPlay
              playsInline
              className="h-full w-full rounded-[24px] object-cover"
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
