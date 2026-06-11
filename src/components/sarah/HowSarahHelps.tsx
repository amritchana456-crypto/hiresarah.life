import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { HandUnderline } from "./HandUnderline";
import { Reveal } from "./Reveal";

const demos = [
  {
    title: "Start the chat. Replies in seconds. Filters out time-wasters instantly.",
    video: "/Start's conversation.mp4",
  },
  {
    title: "Every real buyer is captured and tracked.",
    video: "/CRM.mp4",
  },
  {
    title: "Buyers get the right listings instantly.",
    video: "/Listings.mp4",
  },
  {
    title: "Viewings get booked while interest is still high.",
    video: "/Calendar.mp4",
  },
] as const;

export function HowSarahHelps() {
  const [active, setActive] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Escape key closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const openModal = (i: number) => {
    setLoading(true);
    setActive(i);
  };

  return (
    <section id="how" className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[48px]">
              This is how they handle{" "}
              <HandUnderline>
                <span className="text-gradient">inquiries</span>
              </HandUnderline>{" "}
              now
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2">
          {demos.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 80} className="h-full">
              <div
                className="h-full cursor-pointer rounded-[28px] bg-gradient-primary p-[2px] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                onClick={() => openModal(i)}
              >
                <article className="group h-full overflow-hidden rounded-[26px] bg-gradient-to-b from-white to-purple-50">
                  <div className="relative">
                    <video
                      src={d.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-52 w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="rounded-full bg-white/90 p-4 shadow-lg">
                        <Play className="h-6 w-6 fill-current text-[#7357F6]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[19px] font-bold text-foreground">{d.title}</h3>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <p className="mb-3 text-center text-sm font-semibold text-white/80">
              {demos[active].title}
            </p>

            {/* Loading spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white" />
              </div>
            )}

            <video
              key={demos[active].video}
              src={demos[active].video}
              controls
              autoPlay
              playsInline
              onCanPlay={() => setLoading(false)}
              className="w-full rounded-2xl"
            />

            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
