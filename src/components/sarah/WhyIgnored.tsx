import { useEffect, useRef } from "react";
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
  { title: "Speed", text: "Another agency caught them before you did.", Icon: SpeedIcon },
  { title: "Low intent", text: "They were just browsing.", Icon: LowIntentIcon },
  { title: "Comparing", text: "Comparing options. Not choosing you.", Icon: ComparingIcon },
];

const elitePoints = [
  "They don’t waste top agents on window shoppers.",
  "They don’t wait until morning to reply.",
  "They don’t let a flooded inbox kill a deal.",
];

type Reason = (typeof reasons)[number];

function EliteManagersAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let animation: { destroy: () => void } | undefined;

    import("lottie-web/build/player/lottie_light").then((lottie) => {
      if (destroyed || !containerRef.current) return;

      animation = lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/elite-managers.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });
    });

    return () => {
      destroyed = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-lottie-elite
      aria-hidden
      className="flex h-full min-h-[220px] w-full max-w-[500px] scale-[1.14] items-center justify-center sm:scale-100"
    />
  );
}

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
              They looked like a buyer.{" "}<span className="text-gradient">But they weren't, because...</span>
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
          <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] border border-border-soft bg-white p-6 shadow-card sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
              <div className="mx-auto max-w-[500px] text-center lg:mx-0 lg:-translate-y-3 lg:text-left">
                <h3 className="text-[32px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[42px] lg:text-[46px]">
                  <span className="text-gradient">Some managers</span> figured this out.
                </h3>

                <ul className="mt-5 space-y-3.5 text-left sm:mt-6">
                  {elitePoints.map((point, i) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-white shadow-soft">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-x-soft origin-center"
                          style={{ animationDelay: `${i * 0.35}s` }}
                          aria-hidden
                        >
                          <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                      </span>
                      <span className="text-[15.5px] font-semibold leading-snug text-foreground sm:text-[16.5px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-[26px] border border-border-soft bg-gradient-to-br from-primary-softer via-white to-pink-soft p-3 sm:min-h-[320px] sm:p-7 lg:min-h-[360px]">
                <EliteManagersAnimation />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
