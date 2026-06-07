import { Reveal } from "./Reveal";

const demos = [
  {
    title: "Replies in seconds.",
    text: "Even at midnight, on weekends, or when every agent is slammed. The conversation never dies.",
  },
  {
    title: "Filters out time-wasters instantly.",
    text: "Budget, timeline, location — Sarah qualifies the conversation before any agent has to lift a finger.",
  },
  {
    title: "Every real buyer is captured and tracked.",
    text: "Clean lead data goes straight to your CRM, so no one is relying on late-night copy-paste or half-remembered chat notes.",
  },
  {
    title: "Buyers get the right listings instantly.",
    text: "No more searching listings one by one or manually sending links. Matching properties are surfaced while the conversation is still hot.",
  },
  {
    title: "Viewings get booked while interest is still high.",
    text: "No endless back-and-forth trying to fix a calendar clash. Hot buyers can book a viewing while they are still ready to move.",
  },
] as const;

export function HowSarahHelps() {
  return (
    <section id="how" className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              This is what catches leads{" "}
              <span className="text-gradient">before they disappear.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6">
          {demos.map((d, i) => {
            const colSpan = "lg:col-span-2";
            const colStart =
              i === 3 ? "lg:col-start-2" : i === 4 ? "lg:col-start-4" : "";
            return (
              <Reveal key={d.title} delay={(i % 3) * 80} className={`${colSpan} ${colStart}`}>
                <article className="group h-full overflow-hidden rounded-[26px] border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="relative h-44 overflow-hidden bg-gradient-primary">
                    <div aria-hidden className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[19px] font-bold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
