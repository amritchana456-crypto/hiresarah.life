import { Reveal } from "./Reveal";
import problemSvg from "../../../.svg/Problem.svg";

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10">
        <div className="relative z-10">
          <Reveal>
            <h2 className="max-w-2xl text-[38px] font-extrabold leading-[1.08] text-foreground sm:text-[52px] lg:text-[64px]">
              People contact them.
              <br />
              They reply with links.
              <br />
              <span className="text-gradient">Then get ignored.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px] lg:text-[22px]">
              Most people are just browsing.
              <br />
              And your team spends hours finding that out.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[620px]">
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
