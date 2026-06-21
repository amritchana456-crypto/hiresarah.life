import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

function ChatAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let animation: { destroy: () => void } | undefined;

    import("lottie-web/build/player/lottie_light").then((lottie) => {
      if (destroyed || !containerRef.current) return;

      animation = lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/chat.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });
    });

    return () => {
      destroyed = true;
      animation?.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}

export function FounderCTA({ onBook }: { onBook: () => void }) {
  return (
    <section id="creator" className="relative">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Final CTA panel */}
        <Reveal delay={120}>
          <div
            id="cta"
            className="relative mt-24 overflow-hidden rounded-[36px] bg-gradient-primary p-10 shadow-float sm:mt-32 sm:p-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-12 -bottom-12 h-72 w-72 rounded-full bg-pink/40 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16 text-white">
              {/* Left: text content */}
              <div className="flex-1 text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />3 spots only
                </span>
                <h2 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-tight sm:text-[48px]">
                  Someone is going to message your agency tonight.
                </h2>
                <p className="mt-5 text-[16.5px] leading-relaxed text-white/85">
                  Will they get 8 hours of silence, or a booked viewing? Stop bleeding late-night
                  leads to agencies that never go offline.
                </p>
                <div className="mt-9 flex flex-col items-start gap-3">
                  <button
                    type="button"
                    onClick={onBook}
                    className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-bold text-primary shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.3)]"
                  >
                    Hire Sarah for 3 days free
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                  <p className="text-[13px] text-white/75">Only 3 agency managers accepted.</p>
                </div>
              </div>
              {/* Right: animation — visible on all screen sizes */}
              <div className="flex flex-shrink-0 items-center justify-center mt-8 md:mt-0 w-full h-[260px] md:w-[280px] md:h-auto md:aspect-square rounded-[26px] bg-gradient-to-br from-primary-softer via-white to-pink-soft p-4">
                <ChatAnimation />
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-14 border-t border-border-soft py-10">
          <div className="flex flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left">
            <div className="max-w-lg">
              <Logo />
              <p className="mt-3 text-[15px] font-semibold leading-relaxed text-foreground">
                Built for agencies that want fewer missed buyers and less inbox noise.
              </p>
              <p className="mt-2 text-[13px] text-muted-foreground">Created by Amrit Chana.</p>
            </div>
            <nav className="flex items-center gap-6 text-[13px] font-medium text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
          <p className="mt-7 text-center text-[12.5px] text-muted-foreground sm:text-left">
            Copyright {new Date().getFullYear()} Sarah. Built for real estate agency managers.
          </p>
        </footer>
      </div>
    </section>
  );
}
