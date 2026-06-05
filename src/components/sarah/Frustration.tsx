import { Reveal } from "./Reveal";

const steps = [
  { time: "9:14 AM", title: "Inquiry comes in", text: "Buyer asks about a property with missing details." },
  { time: "9:15 AM", title: "Agent is busy", text: "In a showing, driving, on a call, or off-shift." },
  { time: "9:42 AM", title: "Same questions start again", text: "Budget, location, bedrooms, timeline, viewing preference." },
  { time: "10:30 AM", title: "Manual admin follows", text: "Details copied into CRM, property links searched manually." },
  { time: "Later", title: "Lead may go cold", text: "A serious buyer waits while low-quality messages take attention." },
];

export function Frustration() {
  return (
    <section id="frustration" className="relative overflow-hidden py-28 sm:py-36">
      {/* Soft purple blob behind */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-pink">Daily frustration</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              The day gets messy before the{" "}
              <span className="text-gradient">serious buyer</span> even speaks to your team.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-[16.5px] leading-relaxed text-muted-foreground">
              One person asks for property links. Another asks if the price is negotiable. Someone wants a viewing at 11 PM. Your agents were hired to close deals — but too much of the day becomes receptionist work.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical guide */}
          <div aria-hidden className="absolute left-[26px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-pink/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ul className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} as="li">
                <div className={`relative flex items-start gap-5 sm:gap-8 ${i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}>
                  <div className="relative z-10 mt-1 flex h-13 w-13 shrink-0 items-center justify-center sm:mx-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-white shadow-soft" />
                    <div className="relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-primary text-white text-[13px] font-bold" style={{ width: 52, height: 52 }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 sm:max-w-[42%] sm:ml-0">
                    <div className="rounded-2xl border border-border-soft bg-white p-5 shadow-soft transition-all hover:shadow-card hover:-translate-y-0.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{s.time}</p>
                      <h3 className="mt-1.5 text-[17px] font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Highlight card */}
        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl rounded-[28px] border border-pink/20 bg-white p-7 shadow-card sm:p-9">
            <p className="text-[18px] font-semibold leading-snug text-foreground sm:text-[20px]">
              The hidden cost is not one missed reply. It's the{" "}
              <span className="text-gradient">serious buyer buried</span> under ten weak conversations.
            </p>
            <p className="mt-3 text-[14.5px] text-muted-foreground">
              Sarah removes the messy first layer — so your team only steps in when it matters.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
