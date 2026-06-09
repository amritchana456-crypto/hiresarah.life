import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface HandUnderlineProps {
  children: ReactNode;
  className?: string;
  underlineClassName?: string;
}

export function HandUnderline({
  children,
  className = "",
  underlineClassName = "",
}: HandUnderlineProps) {
  const gradientId = useId().replace(/:/g, "");
  const ref = useRef<HTMLSpanElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mainStrokeStyle: CSSProperties = {
    strokeDasharray: 1,
    strokeDashoffset: drawn ? 0 : 1,
    transition: "stroke-dashoffset 820ms cubic-bezier(0.65, 0, 0.35, 1)",
    transitionDelay: drawn ? "200ms" : "0ms",
  };

  const echoStrokeStyle: CSSProperties = {
    strokeDasharray: 1,
    strokeDashoffset: drawn ? 0 : 1,
    transition: "stroke-dashoffset 620ms cubic-bezier(0.65, 0, 0.35, 1)",
    transitionDelay: drawn ? "280ms" : "0ms",
  };

  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap pb-[0.08em] ${className}`}>
      {children}
      <svg
        viewBox="0 0 120 14"
        preserveAspectRatio="none"
        aria-hidden
        className={`pointer-events-none absolute -bottom-[0.12em] left-0 h-[0.38em] w-full overflow-visible ${underlineClassName}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="120" y1="7" y2="7">
            <stop stopColor="#7357F6" />
            <stop offset="1" stopColor="#F45BD4" />
          </linearGradient>
        </defs>
        <path
          d="M3 9.2C18 5.4 30.5 10.8 45.5 8.1C62.5 5.1 81.5 4.6 117 8.4"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.2"
          pathLength={1}
          style={mainStrokeStyle}
        />
        <path
          d="M5 10.8C20 8.2 35.5 11.2 51 9.4C70 7.1 88 6.9 115 9.7"
          fill="none"
          opacity="0.22"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          pathLength={1}
          style={echoStrokeStyle}
        />
      </svg>
    </span>
  );
}
