import { useEffect } from "react";
import { Logo } from "./Logo";

const calendarSrc =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0eytghlqFpXoisaKqwVKKiIZsffYEp78j0Up0ktrhSObyd5HDbQwH9lr3XQ3T8xHnnvqD92GeI?gv=true";
const bookingPageUrl = "https://calendar.app.google/xTETLFK7rM1Dymuw5";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-3 py-4 sm:px-5 lg:px-6">
      <button
        type="button"
        aria-label="Close booking popup"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/35 backdrop-blur-md"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative flex max-h-[90vh] w-full max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-float sm:max-w-[calc(100vw-2rem)] sm:rounded-[28px] lg:max-h-[86vh] lg:max-w-[1160px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-soft px-4 py-3 sm:px-6 lg:px-7">
          <div className="min-w-0">
            <Logo />
            <h2
              id="booking-title"
              className="mt-3 text-[25px] font-extrabold leading-[1.08] text-foreground sm:text-[32px] lg:text-[34px]"
            >
              Book your Sarah setup call
            </h2>
            <p className="mt-2 max-w-2xl text-[13.5px] font-medium leading-relaxed text-muted-foreground sm:text-[15px]">
              Choose a 20-minute slot. We&apos;ll review your workflow before the call.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close booking popup"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-soft bg-white text-foreground shadow-soft transition-colors hover:bg-primary-softer sm:h-11 sm:w-11"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="grid min-h-0 flex-1 gap-3 overflow-y-auto bg-gradient-to-br from-primary-softer via-white to-pink-soft p-3 sm:p-4 lg:grid-cols-[0.34fr_0.66fr] lg:overflow-hidden">
          <aside className="rounded-[20px] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur sm:p-5 lg:p-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-softer px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              Booking guide
            </span>
            <h3 className="mt-4 text-[24px] font-extrabold leading-[1.08] text-foreground lg:text-[28px]">
              What to write in the form.
            </h3>
            <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-muted-foreground">
              Google collects the details. Use these examples while booking.
            </p>

            <dl className="mt-5 space-y-3">
              {[
                ["Role", "Agency manager, founder, sales lead"],
                ["Agency name", "Your agency name"],
                ["Main inquiry channel", "WhatsApp, portals, website forms"],
                ["Biggest inquiry problem", "Slow replies, weak leads, missed follow-ups"],
              ].map(([label, example]) => (
                <div
                  key={label}
                  className="rounded-[18px] border border-border-soft bg-white p-3.5"
                >
                  <dt className="text-[13px] font-bold text-foreground">{label}</dt>
                  <dd className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {example}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 rounded-[18px] bg-gradient-primary p-3.5 text-[13px] font-semibold leading-relaxed text-white shadow-soft">
              Thanks. We&apos;ll review your workflow before the call.
            </p>
          </aside>

          <div className="flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-border-soft bg-white shadow-soft">
            <iframe
              src={calendarSrc}
              title="Sarah 3-Day Test Setup Call booking calendar"
              className="h-[560px] w-full shrink-0 sm:h-[600px] lg:h-[58vh] lg:min-h-[520px] lg:max-h-[640px]"
              style={{ border: 0 }}
            />
            <div className="border-t border-border-soft px-4 py-3 text-center text-[13px] font-semibold text-muted-foreground lg:text-right">
              Having trouble filling the form?{" "}
              <a
                href={bookingPageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/80"
              >
                Open booking page in a new tab.
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
