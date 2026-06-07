import { Reveal } from "./Reveal";

const demos = [
  {
    title: "Replies under 7 seconds.",
    text: "Late nights, vacations, packed schedules. It does not matter. Every inquiry is caught before the buyer has time to change their mind.",
    visual: "chat",
  },
  {
    title: "Answers and qualifies.",
    text: "Budgets, timelines, locations. Sarah catches the details automatically, so agents can focus on real buyers instead of guessing intent.",
    visual: "qual",
  },
  {
    title: "No more manual data entry.",
    text: "Clean lead data goes straight to your CRM, so no one is relying on late-night copy-paste or half-remembered chat notes.",
    visual: "crm",
  },
  {
    title: "Property links in 5 seconds.",
    text: "No more searching listings one by one or manually sending links. Matching properties are surfaced while the conversation is still hot.",
    visual: "listings",
  },
  {
    title: "Meetings booked in the chat.",
    text: "No endless back-and-forth trying to fix a calendar clash. Hot buyers can book a viewing while they are still ready to move.",
    visual: "book",
  },
  {
    title: "Routes to the right agent.",
    text: "No manual routing mistakes. Verified inquiries land with the exact agent who owns the listing.",
    visual: "route",
  },
] as const;

export function HowSarahHelps() {
  return (
    <section id="how" className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              This is what{" "}
              <span className="text-gradient">handles inquiries for them now.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-[26px] border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative h-44 overflow-hidden bg-gradient-primary">
                  <div aria-hidden className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
                  <DemoVisual kind={d.visual} />
                  <button
                    type="button"
                    aria-label={`Play demo: ${d.title}`}
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-primary shadow-soft transition-transform group-hover:scale-110"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-primary">Demo clip</span>
                </div>
                <div className="p-6">
                  <h3 className="text-[19px] font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{d.text}</p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">Replace with demo video</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoVisual({ kind }: { kind: typeof demos[number]["visual"] }) {
  const base = "absolute left-4 bottom-4 right-12 rounded-xl bg-white/95 p-3 shadow-soft text-foreground";
  if (kind === "chat") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
          <p className="text-[10.5px] font-bold">Sarah replied under 7s</p>
        </div>
        <p className="mt-1.5 text-[11.5px] text-muted-foreground">"What's your budget and timeline?"</p>
      </div>
    );
  }
  if (kind === "qual") {
    return (
      <div className={base}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Qualifying</p>
        <div className="mt-1.5 flex gap-1.5">
          {["Budget", "Location", "Timeline"].map((t) => <span key={t} className="rounded-md bg-primary-softer px-1.5 py-0.5 text-[9.5px] font-semibold text-primary">{t}</span>)}
        </div>
      </div>
    );
  }
  if (kind === "crm") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green/20"><span className="h-1.5 w-1.5 rounded-full bg-green" /></span>
          <p className="text-[10.5px] font-bold">CRM updated</p>
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">Clean fields saved</p>
      </div>
    );
  }
  if (kind === "listings") {
    return (
      <div className={base}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-pink">3 matched links</p>
        <div className="mt-1.5 flex gap-1.5">
          {[0, 1, 2].map((i) => <div key={i} className="h-8 flex-1 rounded-md bg-gradient-to-br from-primary-soft to-pink-soft" />)}
        </div>
      </div>
    );
  }
  if (kind === "book") {
    return (
      <div className={base}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Viewing booked</p>
        <p className="mt-1 text-[12px] font-bold">Sat 14 - 3:00 PM</p>
      </div>
    );
  }
  return (
    <div className={base}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Right agent</p>
      <p className="mt-1 text-[11.5px]">Agent Maya - Notting Hill</p>
    </div>
  );
}
