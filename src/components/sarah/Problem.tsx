import { HandUnderline } from "./HandUnderline";
import { Reveal } from "./Reveal";
import problemSvg from "../../../.svg/Problem.svg";

export function Problem() {
  return (
    <section id="problem" className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10">
        <div className="relative z-10">
          <Reveal>
            <h2 className="max-w-2xl text-[38px] font-extrabold leading-[1.08] text-foreground sm:text-[52px] lg:text-[64px]">
              First they'll text.
              <br />
              <span className="text-gradient">Then they ignore.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px] lg:text-[22px]">
              And your team spent <HandUnderline>30 minutes</HandUnderline> talking to ghosts.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[520px]">
          <img
            src={problemSvg}
            alt="Brand-colored illustration of a real estate agent working at a laptop"
            className="h-auto w-full"
            width={300}
            height={274}
          />
        </Reveal>
      </div>
    </section>
  );
}
