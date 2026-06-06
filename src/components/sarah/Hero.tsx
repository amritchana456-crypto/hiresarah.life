import { Button } from "./Button";
import { Reveal } from "./Reveal";
import heroSvg from "../../../.svg/Hero.svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-18 pb-16 sm:pt-20 sm:pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      {/* Soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary-soft blur-3xl opacity-60" />
      <div aria-hidden className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-pink-soft blur-3xl opacity-50" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-7 px-5 sm:px-8 sm:gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-10 xl:gap-12">
        <div className="contents lg:block lg:max-w-[650px]">
          <Reveal className="order-1 relative z-10">
            <h1 className="mt-2 text-[42px] font-medium leading-[1.06] text-foreground sm:text-[58px] lg:mt-0 lg:text-[72px]">
              Did you hire agents to{" "}
              <span className="whitespace-nowrap text-gradient font-extrabold">close deals?</span>
            </h1>
          </Reveal>
          <Reveal delay={160} className="order-2 relative z-10 lg:mt-6">
            <p className="max-w-xl text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px] lg:text-[22px]">
              Or to answer{" "}
              <span className="font-bold">"is this still available?"</span>{" "}
              40 times a day.
            </p>
          </Reveal>

          <Reveal delay={320} className="order-4 relative z-10 flex flex-col items-center gap-4 lg:mt-9 lg:items-start">
            <Button size="lg" onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}>
              Hire Sarah for 3 days free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Button>
            <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-green animate-pulse-dot" />
              Only 3 agency managers can test Sarah free.
            </div>
          </Reveal>
        </div>

        {/* Right: visual */}
        <Reveal delay={240} className="order-3 relative mx-auto w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-[760px] lg:mx-0 lg:justify-self-end lg:max-w-[640px] xl:max-w-[680px]">
          <img
            src={heroSvg}
            alt="Animated Sarah AI real estate assistant illustration"
            className="w-full h-auto"
            width={512}
            height={512}
          />
        </Reveal>
      </div>
    </section>
  );
}
