import { Reveal } from "./Reveal";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    ),
    title: "People message at the wrong time",
    text: "They ask about listings when your team is busy, offline, or already with clients.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
    ),
    title: "Not every inquiry is serious",
    text: "Some people ask questions with no budget, no timeline, and no real buying intent.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    ),
    title: "Agents repeat the same answers",
    text: "Availability, location, price, viewing times, property details — again and again.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    ),
    title: "Serious buyers wait too long",
    text: "The best leads need fast replies before they move on to another listing or agency.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The problem</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              Your team is not slow. <span className="text-gradient">The inbox is noisy.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-muted-foreground">
              Most property inquiries don't arrive neatly. They come while agents are in showings, after hours, during weekends, or from people who aren't ready to move. Serious buyers can get buried under repeated questions and weak conversations.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 rounded-3xl border border-primary/15 bg-primary-softer/70 p-6">
              <p className="text-[15.5px] font-semibold leading-relaxed text-foreground">
                "The hidden cost isn't one missed reply. It's the serious buyer buried under ten weak conversations."
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full rounded-3xl border border-border-soft bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-softer text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-white">
                  <span className="h-5 w-5 block">{p.icon}</span>
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
