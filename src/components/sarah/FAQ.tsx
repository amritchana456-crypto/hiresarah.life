import { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="relative py-20 sm:py-28">
      {/* Soft background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary-soft/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[780px] px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            Common questions
          </p>
          <h2 className="mt-3 text-center text-[32px] font-extrabold leading-tight text-foreground sm:text-[42px]">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border-soft">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-all duration-200 ${
                      isOpen ? "border-l-[3px] border-primary pl-4" : "pl-0"
                    }`}
                  >
                    <span
                      className={`text-[15.5px] font-bold leading-snug transition-colors duration-200 sm:text-[16.5px] ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-[18px] w-[18px]" />
                      ) : (
                        <Plus className="h-[18px] w-[18px]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className={`pb-5 text-[14.5px] leading-relaxed text-foreground/80 sm:text-[15px] ${isOpen ? "pl-4" : ""}`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
