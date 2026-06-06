import { Reveal } from "./Reveal";

const reasons = [
  { title: "Speed", text: "Someone else got there first." },
  { title: "Low intent", text: "They were just checking. Not serious." },
  { title: "Comparing", text: "They were exploring options." },
];

export function WhyIgnored() {
  return (
    <section id="why-ignored" className="relative overflow-hidden py-28 sm:py-36">
      {/* Soft purple blob behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              Why do people <span className="text-gradient">ignore?</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-[16.5px] leading-relaxed text-muted-foreground">
              It's rarely about your message.
            </p>
          </Reveal>
        </div>

        {/* Reason cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="h-full rounded-[26px] border border-border-soft bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-[13px] font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[19px] font-bold text-foreground">{r.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bridge card */}
        <Reveal delay={300}>
          <div className="mx-auto mt-16 max-w-3xl rounded-[28px] border border-pink/20 bg-white p-7 shadow-card sm:p-9">
            <p className="text-[18px] font-semibold leading-snug text-foreground sm:text-[20px]">
              <span className="text-gradient">Elite agencies</span> don't lose them to any of this.
            </p>
            <p className="mt-3 text-[14.5px] text-muted-foreground">
              They reply instantly, qualify automatically, and never let a serious buyer slip
              through.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
