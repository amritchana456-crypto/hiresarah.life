import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "We already use an auto-reply. Why do we need Sarah?",
    a: "An auto-reply says \"We are closed, call you tomorrow.\" That doesn't stop a buyer. They just open the next listing site and text your competitor. Sarah doesn't say \"wait.\" She texts them back, asks for their budget, and books the viewing right then so they stop looking.",
  },
  {
    q: "My agents waste too much time calling fake or dead leads. Does this stop?",
    a: "Yes. Your agents only get the lead after Sarah checks them. If a buyer has no budget, or won't reply to Sarah, your agents never waste a second talking to them. Your team only spends time on people who are ready to buy.",
  },
  {
    q: "My team hates new software. They will ignore this.",
    a: "They won't, because there is no software for them to learn. No new apps, no passwords, no training. Sarah works in the background. The second she finishes with a buyer, their name, budget, area, and timeline land straight in your CRM — clean, structured, ready. Your agents open the CRM and close. Nothing to hate.",
  },
  {
    q: "Do my agents have to type all this data into the CRM manually?",
    a: "No. Sarah does it for them. The second she finishes talking to a buyer, she takes their budget, area, and timeline, and pushes it straight into your CRM or a simple daily list. The typing your agents hate is gone.",
  },
  {
    q: "If Sarah answers the texts, do I lose control of who gets the leads?",
    a: "No, you get more control. Sarah just does the talking. You decide exactly where the clean leads go. You can send them all to yourself to hand out manually, or send them straight to the listing agent. You run the office.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Soft background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary-soft/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[820px] px-5 sm:px-8">
        {/* Section header */}
        <Reveal>
          <h2 className="text-[32px] font-extrabold leading-tight text-foreground sm:text-[42px]">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>

        {/* FAQ accordion */}
        <Reveal delay={120}>
          <div className="mt-14">
            <Accordion type="single" collapsible className="w-full border-t border-foreground/10">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-foreground/10">
                  <AccordionTrigger className="text-[17px] sm:text-[19px] font-bold text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] sm:text-[15.5px] leading-relaxed text-foreground/65 pb-6 pt-0">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
