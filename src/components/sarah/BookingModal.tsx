import { FormEvent, useEffect, useState } from "react";
import { HandUnderline } from "./HandUnderline";
import { Logo } from "./Logo";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData = {
  name: "",
  email: "",
  agencyName: "",
  role: "",
  mainInquiryChannel: "",
  mainProblem: "",
};

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "you@agency.com",
    type: "email",
  },
  {
    id: "agencyName",
    label: "Agency name",
    placeholder: "Your agency",
    type: "text",
  },
  {
    id: "role",
    label: "Role",
    placeholder: "Agency manager, founder, sales lead",
    type: "text",
  },
] as const;

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const webhookUrl = import.meta.env.VITE_N8N_LEAD_WEBHOOK_URL;
    if (!webhookUrl) {
      setStatus("error");
      setErrorMessage("The lead form is not connected yet. Please try again later.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: "sarah_landing_page",
          name: formData.name.trim(),
          email: formData.email.trim(),
          agencyName: formData.agencyName.trim(),
          role: formData.role.trim(),
          mainInquiryChannel: formData.mainInquiryChannel.trim(),
          mainProblem: formData.mainProblem.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while sending your details. Please try again.");
    }
  };

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
              Help us{" "}
              <HandUnderline>
                <span className="text-gradient font-extrabold">understand</span>
              </HandUnderline>{" "}
              your lead flow.
            </h2>
            <p className="mt-2 max-w-2xl text-[13.5px] font-medium leading-relaxed text-muted-foreground sm:text-[15px]">
              Share a few details about your agency&apos;s inquiries so we can see whether Sarah can
              help before we set anything up.
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

        <div className="min-h-0 flex-1 overflow-y-auto bg-gradient-to-br from-primary-softer via-white to-pink-soft p-3 sm:p-4">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex min-h-0 w-full max-w-[1120px] flex-col rounded-[20px] border border-border-soft bg-white p-4 shadow-soft sm:p-5 lg:p-7"
          >
            {status === "success" ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-white shadow-soft">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-[28px] font-extrabold leading-tight text-foreground">
                  Thanks. We&apos;ve got your details.
                </h3>
                <p className="mt-3 max-w-md text-[15px] font-medium leading-relaxed text-muted-foreground">
                  We&apos;ll review your inquiry flow and follow up with next steps.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-[14px] font-bold text-white shadow-cta transition-all hover:-translate-y-0.5"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-4">
                  {formFields.map((field) => (
                    <label key={field.id} className="block">
                      <span className="text-[13px] font-bold text-foreground">
                        {field.label}
                      </span>
                      <input
                        required
                        type={field.type}
                        value={formData[field.id]}
                        onChange={(event) => updateField(field.id, event.target.value)}
                        placeholder={field.placeholder}
                        className="mt-2 h-12 w-full rounded-[16px] border border-border-soft bg-white px-4 text-[14px] font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary"
                      />
                    </label>
                  ))}

                  <label className="block">
                    <span className="text-[13px] font-bold text-foreground">
                      Main inquiry channel
                    </span>
                    <input
                      required
                      type="text"
                      value={formData.mainInquiryChannel}
                      onChange={(event) =>
                        updateField("mainInquiryChannel", event.target.value)
                      }
                      placeholder="WhatsApp, portals, website forms, social DMs"
                      className="mt-2 h-12 w-full rounded-[16px] border border-border-soft bg-white px-4 text-[14px] font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-bold text-foreground">
                      Main problem
                    </span>
                    <textarea
                      required
                      value={formData.mainProblem}
                      onChange={(event) => updateField("mainProblem", event.target.value)}
                      placeholder="Tell us what wastes the most time with your inquiries."
                      className="mt-2 min-h-[112px] w-full resize-none rounded-[18px] border border-border-soft bg-white px-4 py-3 text-[14px] font-medium leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary lg:min-h-[48px]"
                    />
                  </label>
                </div>

                {status === "error" && (
                  <p className="mt-4 rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-semibold leading-relaxed text-red-700">
                    {errorMessage}
                  </p>
                )}

                <div className="mt-5 flex flex-col gap-3 border-t border-border-soft pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12.5px] font-medium leading-relaxed text-muted-foreground">
                    Your details go straight to our lead review sheet.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-[14px] font-bold text-white shadow-cta transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? "Sending..." : "Submit details"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
