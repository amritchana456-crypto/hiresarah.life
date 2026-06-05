import { Button } from "./Button";
import { Reveal } from "./Reveal";

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
        <HeroVisual />
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

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[620px]">
      {/* Big rounded purple shape */}
      <div className="absolute inset-x-2 inset-y-6 rounded-[44px] bg-purple-blob shadow-float" />
      <div aria-hidden className="absolute -right-6 -bottom-6 h-40 w-40 rounded-[36px] bg-pink-soft blur-2xl opacity-70" />

      {/* Chat card — main */}
      <div className="absolute left-3 top-10 w-[78%] rounded-[24px] glass-card shadow-card p-5 animate-float">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-full bg-gradient-primary">
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green ring-2 ring-white" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-foreground leading-tight">Sarah</p>
              <p className="text-[10.5px] text-muted-foreground">New inquiry · 5s ago</p>
            </div>
          </div>
          <span className="rounded-full bg-green/15 px-2 py-0.5 text-[10px] font-bold text-green">Qualified</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-primary-softer px-3.5 py-2 text-[12.5px] text-foreground">
            Hi, is the 3-bed in Notting Hill still available?
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gradient-primary px-3.5 py-2 text-[12.5px] font-medium text-white">
            Yes! Quick question — what's your budget and ideal move-in date?
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-primary-softer px-3.5 py-2 text-[12.5px] text-foreground">
            £1.4M, moving in March.
          </div>
        </div>
      </div>

      {/* Lead qualification card */}
      <div className="absolute right-0 top-[42%] w-[60%] rounded-[22px] glass-card shadow-card p-4 animate-float-slow">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Lead profile</p>
          <span className="rounded-full bg-pink/12 px-2 py-0.5 text-[9.5px] font-bold text-pink">Ready for agent</span>
        </div>
        <div className="mt-3 space-y-2 text-[12px]">
          {[
            ["Budget", "£1.4M"],
            ["Location", "Notting Hill"],
            ["Timeline", "March 2026"],
            ["Type", "3-bed flat"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-border-soft/70 pb-1.5 last:border-0">
              <span className="text-muted-foreground">{k}</span>
              <span className="font-semibold text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CRM saved badge */}
      <div className="absolute left-6 bottom-24 w-[55%] rounded-2xl bg-white shadow-card p-3.5 border border-border-soft animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/15">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-green"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div className="leading-tight">
            <p className="text-[12.5px] font-bold text-foreground">Lead saved to CRM</p>
            <p className="text-[10.5px] text-muted-foreground">All fields auto-filled</p>
          </div>
        </div>
      </div>

      {/* Replies in seconds pill */}
      <div className="absolute right-4 top-3 rounded-full bg-white px-3 py-1.5 shadow-soft border border-border-soft animate-float-slow">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
          <span className="text-[11px] font-bold text-foreground">Replies in seconds</span>
        </div>
      </div>

      {/* Booking mini */}
      <div className="absolute right-2 bottom-6 w-[52%] rounded-2xl bg-white shadow-card p-3.5 border border-border-soft animate-float" style={{ animationDelay: "0.5s" }}>
        <p className="text-[10.5px] font-bold uppercase tracking-wider text-pink">Viewing request</p>
        <p className="mt-1 text-[13px] font-bold text-foreground">Sat, Feb 14 · 3:00 PM</p>
        <div className="mt-2 flex h-8 items-center justify-center rounded-lg bg-gradient-primary text-[11px] font-bold text-white">
          Book a time
        </div>
      </div>
    </div>
  );
}
