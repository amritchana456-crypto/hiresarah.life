import { Button } from "./Button";
import { Reveal } from "./Reveal";
import heroSvg from "../../../.svg/Hero.svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-18 pb-16 sm:pt-20 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary-soft blur-3xl opacity-60" />
      <div aria-hidden className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-pink-soft blur-3xl opacity-50" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 sm:gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-10">
        {/* Left: copy */}
        <div className="relative z-10">
          <Reveal>
            <h1 className="mt-2 text-[40px] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-[56px] lg:mt-6 lg:text-[72px]">
              Stop wasting time on{" "}
              <span className="text-gradient">non-serious</span> buyers.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hidden lg:block mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground sm:text-[18px]">
              Sarah qualifies leads, books viewings, and hands off serious buyers to your team, automatically, 24/7.
            </p>
          </Reveal>
        </div>

        {/* Right: visual cluster */}
        <div className="relative mx-auto w-full max-w-[512px]">
          <img
            src={heroSvg}
            alt="Animated Sarah AI real estate assistant illustration"
            className="w-full h-auto"
            width={512}
            height={512}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 mt-10 flex flex-col items-center gap-4">
        <Button size="lg" onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}>
          Hire Sarah for 3 days free
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Button>
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-green animate-pulse-dot" />
          Only 3 agency managers can test Sarah free.
        </div>
      </div>
    </section>
  );
}
