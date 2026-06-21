import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "We already have a WhatsApp auto-reply. Why do I need Sarah?",
    a: "A generic \"we'll get back to you tomorrow\" message doesn't stop a buyer from contacting the next agency on Storia or OLX. Sarah actually holds a two-way conversation, captures their budget, and locks in their interest so they stop browsing your competitors.",
  },
  {
    q: "My agents hate chasing dead leads. How does Sarah stop this?",
    a: "She acts as an impenetrable wall. Sarah intercepts every inquiry, filters out the tire-kickers, and only passes the conversation to your team when the buyer proves they have the budget and timeline to act. You stop paying agents to do admin work.",
  },
  {
    q: "My team ignores every new software tool I buy. Why will they use this?",
    a: "Because there is nothing new to learn. No new logins, no training seminars, no complex dashboards. Sarah works in the background and drops clean, fully qualified leads directly into your agents' existing WhatsApp. They just check their phones and close.",
  },
  {
    q: "Will this create more manual data entry to get leads into our CRM?",
    a: "The exact opposite. Sarah structures the conversation data. Every qualified lead's details — budget, preferred area, timeline — are instantly summarized and pushed straight to your CRM or into a clean daily digest. The manual logging your team hates is gone.",
  },
  {
    q: "If the AI intercepts leads, do I lose control of my pipeline?",
    a: "You gain control. Sarah handles the grueling qualification, but you set the distribution rules. You decide if leads auto-route directly to the listing agent, or drop into a central manager chat for you to distribute manually. You hold the keys.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Soft background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary-soft/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[780px] px-5 sm:px-8">
        {/* Section header */}
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            Common questions
          </p>
          <h2 className="mt-3 text-center text-[32px] font-extrabold leading-tight text-foreground sm:text-[42px]">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>

        {/* Chat window */}
        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl border border-border-soft shadow-card overflow-hidden">
            {/* WhatsApp-style header bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-primary">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm leading-none">S</span>
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">Sarah</p>
                <p className="text-white/70 text-[11px] leading-tight flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages area */}
            <div className="bg-surface px-4 py-6 flex flex-col gap-6">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="flex flex-col gap-2">
                    {/* Question — incoming / left */}
                    <div className="max-w-[72%] self-start">
                      <p className="text-[11px] font-medium text-foreground/40 mb-1 ml-1">
                        You
                      </p>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-soft">
                        <p className="text-[14.5px] leading-relaxed text-foreground">
                          {faq.q}
                        </p>
                      </div>
                    </div>

                    {/* Answer — outgoing / right */}
                    <div className="max-w-[72%] self-end">
                      <p className="text-[11px] font-medium text-foreground/40 mb-1 mr-1 text-right">
                        Sarah
                      </p>
                      <div className="bg-gradient-primary rounded-2xl rounded-br-sm px-4 py-3 shadow-soft">
                        <p className="text-[14.5px] leading-relaxed text-white">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
