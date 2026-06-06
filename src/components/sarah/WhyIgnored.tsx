import { Reveal } from "./Reveal";
import lowIntentOptionsSvg from "../../../.svg/LowIntentOptions.svg";
import lowIntentPersonSvg from "../../../.svg/LowIntentPerson.svg";
import speedCatchSvg from "../../../.svg/SpeedCatch.svg";

function iconProps(className: string) {
  return {
    viewBox: "0 0 32 32",
    className,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: "2.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

function SpeedIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M17 3 L9 17 H15 L13 29 L23 14 H17 Z" />
    </svg>
  );
}

function LowIntentIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M8 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-9l-5 4v-4a4 4 0 0 1-4-4z" />
      <circle cx="14" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="22" cy="14" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ComparingIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="13" cy="16" r="8" />
      <circle cx="20" cy="16" r="8" />
    </svg>
  );
}

const reasons = [
  { title: "Speed", text: "Someone else got there first.", Icon: SpeedIcon },
  { title: "Low intent", text: "They were just checking. Not serious.", Icon: LowIntentIcon },
  { title: "Comparing", text: "They were exploring options.", Icon: ComparingIcon },
];

type Reason = (typeof reasons)[number];

function ReasonCard({ reason }: { reason: Reason }) {
  const illustratedReason =
    reason.title === "Speed"
      ? {
          src: speedCatchSvg,
          imageClassName: "h-full w-full object-contain p-0.5",
          width: 370,
          height: 285,
        }
      : reason.title === "Low intent"
        ? {
            src: lowIntentOptionsSvg,
            imageClassName: "h-full w-full object-contain p-3 sm:p-2 lg:p-3",
            width: 1920,
            height: 1080,
          }
        : reason.title === "Comparing"
          ? {
              src: lowIntentPersonSvg,
              imageClassName: "h-full w-full object-contain p-1",
              width: 500,
              height: 500,
            }
          : null;

  if (illustratedReason) {
    return (
      <div className="flex h-full flex-col rounded-[26px] border border-border-soft bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-5 lg:p-6">
        <div className="flex h-48 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-primary-softer via-white to-pink-soft sm:h-36 lg:h-44">
          <img
            src={illustratedReason.src}
            alt=""
            aria-hidden
            className={illustratedReason.imageClassName}
            width={illustratedReason.width}
            height={illustratedReason.height}
          />
        </div>
        <div className="mt-auto flex items-center gap-4 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-white">
            <reason.Icon className="h-[22px] w-[22px]" />
          </div>
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[16px] font-bold leading-snug text-foreground sm:text-[15px] lg:text-[16px]">
              {reason.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-[26px] border border-border-soft bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-white">
        <reason.Icon className="h-[22px] w-[22px]" />
      </div>
      <h3 className="mt-4 text-[19px] font-bold text-foreground">{reason.title}</h3>
      <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted-foreground">
        {reason.text}
      </p>
    </div>
  );
}

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
              Your team replied. <span className="text-gradient">They were never buying</span>
            </h2>
          </Reveal>
        </div>

        {/* Reason cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100} className="h-full">
              <ReasonCard reason={r} />
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
