import { useEffect } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const calendarSrc =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0eytghlqFpXoisaKqwVKKiIZsffYEp78j0Up0ktrhSObyd5HDbQwH9lr3XQ3T8xHnnvqD92GeI?gv=true";

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
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-5 sm:px-6">
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
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-float"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-soft px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <Logo />
            <h2
              id="booking-title"
              className="mt-4 text-[28px] font-extrabold leading-[1.08] text-foreground sm:text-[38px]"
            >
              Book your Sarah setup call
            </h2>
            <p className="mt-2 max-w-2xl text-[14.5px] font-medium leading-relaxed text-muted-foreground sm:text-[16px]">
              Choose a 20-minute slot. We&apos;ll review your workflow before the call.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close booking popup"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-soft bg-white text-foreground shadow-soft transition-colors hover:bg-primary-softer"
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

        <div className="bg-gradient-to-br from-primary-softer via-white to-pink-soft p-3 sm:p-5">
          <div className="overflow-hidden rounded-[22px] border border-border-soft bg-white shadow-soft">
            <iframe
              src={calendarSrc}
              title="Sarah 3-Day Test Setup Call booking calendar"
              className="h-[680px] w-full sm:h-[720px]"
              style={{ border: 0 }}
            />
          </div>
          <p className="px-2 pt-3 text-center text-[13px] font-medium text-muted-foreground">
            Thanks. We&apos;ll review your workflow before the call.
          </p>
        </div>
      </section>
    </div>
  );
}
