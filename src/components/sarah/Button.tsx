import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-cta hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgba(244,91,212,0.5)] active:translate-y-0",
  ghost:
    "bg-white text-foreground border border-border-soft hover:bg-primary-softer hover:border-primary/20",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-surface-soft",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", size = "md", className = "", children, ...rest }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  ),
);
Button.displayName = "Button";
