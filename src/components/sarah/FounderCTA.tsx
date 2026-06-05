import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function FounderCTA() {
  return (
    <section id="creator" className="relative pt-28 sm:pt-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Founder block */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Creator of Sarah</span>
              <h2 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[44px]">
                Built by the creator of Sarah. Tested for{" "}
                <span className="text-gradient">real agency workflows.</span>
              </h2>
              <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
                I built Sarah for agency managers who don't need more noise in the inbox. They need cleaner conversations, faster qualification, and fewer serious buyers slipping through because the team was busy at the wrong moment.
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-[15px] font-bold text-white">AC</div>
                <div>
                  <p className="text-[15px] font-bold text-foreground">Amrit Chana</p>
                  <p className="text-[13px] text-muted-foreground">Creator of Sarah</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Founder video placeholder */}
          <Reveal delay={120}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-primary-soft blur-2xl opacity-70" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-softer via-white to-pink-soft border border-border-soft shadow-card">
                <div aria-hidden className="absolute inset-0 bg-purple-blob opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <button
                    type="button"
                    aria-label="Play founder video"
                    className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-float transition-transform hover:scale-110"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85">60-second founder video</p>
                  <p className="mt-1 text-[13px] text-white/70">Placeholder · personal intro from Amrit</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Final CTA panel */}
        <Reveal delay={120}>
          <div id="cta" className="relative mt-24 overflow-hidden rounded-[36px] bg-gradient-primary p-10 shadow-float sm:mt-32 sm:p-16">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-12 -bottom-12 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
                3 spots only
              </span>
              <h2 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-tight sm:text-[48px]">
                Want Sarah to handle your first layer of inquiries for 3 days?
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-white/85">
                I'm opening this free test to only 3 real estate agency managers. Sarah will be tested with your workflow so you can see how she handles inquiries before you decide anything.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-bold text-primary shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.3)]"
                >
                  Hire Sarah for 3 days free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
                <p className="text-[13px] text-white/75">Only 3 agency managers accepted.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Minimal footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-border-soft py-10 sm:flex-row">
          <div>
            <Logo />
            <p className="mt-2 text-[13px] text-muted-foreground">Digital team member for real estate agency managers.</p>
          </div>
          <nav className="flex items-center gap-6 text-[13px] font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </nav>
          <p className="text-[12.5px] text-muted-foreground">© {new Date().getFullYear()} Sarah</p>
        </footer>
      </div>
    </section>
  );
}

// Button import only used implicitly above? Keep silent to avoid unused warning
void Button;
