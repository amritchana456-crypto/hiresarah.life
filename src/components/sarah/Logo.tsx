import { useId } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const rawId = useId().replace(/:/g, "");
  const gradientId = `sarah-logo-gradient-${rawId}`;
  const glowId = `sarah-logo-glow-${rawId}`;
  const shineId = `sarah-logo-shine-${rawId}`;
  const cutId = `sarah-logo-cut-${rawId}`;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <style>
        {`
          @keyframes sarah-logo-float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            42% { transform: translateY(-1.5px) rotate(-2deg); }
            70% { transform: translateY(0.5px) rotate(1.2deg); }
          }

          @keyframes sarah-logo-shimmer {
            0%, 100% { opacity: 0.12; transform: translateX(-14px); }
            46% { opacity: 0.34; transform: translateX(13px); }
            72% { opacity: 0.16; transform: translateX(18px); }
          }

          .sarah-logo-mark {
            transform-origin: 50% 50%;
            animation: sarah-logo-float 6.4s ease-in-out infinite;
          }

          .sarah-logo-shimmer {
            transform-origin: 50% 50%;
            animation: sarah-logo-shimmer 6.4s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .sarah-logo-mark,
            .sarah-logo-shimmer {
              animation: none;
            }
          }
        `}
      </style>

      <svg
        viewBox="0 0 72 96"
        className="sarah-logo-mark h-9 w-9 shrink-0 overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="14" x2="58" y1="10" y2="86">
            <stop stopColor="#7357F6" />
            <stop offset="0.52" stopColor="#8C5CF8" />
            <stop offset="1" stopColor="#F45BD4" />
          </linearGradient>
          <linearGradient id={shineId} x1="18" x2="54" y1="12" y2="84">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.58" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="7" stdDeviation="4" floodColor="#7357F6" floodOpacity="0.24" />
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2.5"
              floodColor="#F45BD4"
              floodOpacity="0.22"
            />
          </filter>
          <mask id={cutId} maskUnits="userSpaceOnUse">
            <rect width="72" height="96" fill="white" />
            <path d="M22 33.5 50 61.5" stroke="black" strokeLinecap="round" strokeWidth="6.5" />
          </mask>
        </defs>

        <g
          filter={`url(#${glowId})`}
          mask={`url(#${cutId})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M42.5 9.5 58 25Q61.5 28.5 58 32L46 44Q42.5 47.5 39 44L29.5 34.5Q27.5 32.5 25.5 34.5L16 44"
            stroke={`url(#${gradientId})`}
            strokeWidth="13"
          />
          <path
            d="M15 42.5 44 71.5Q46 73.5 48 71.5L56 63.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="13"
          />
          <path
            d="M29.5 86.5 14 71Q10.5 67.5 14 64L26 52Q29.5 48.5 33 52L42.5 61.5Q44.5 63.5 46.5 61.5L56 52"
            stroke={`url(#${gradientId})`}
            strokeWidth="13"
          />
          <path d="M20 48 49 19M23 77 52 48" stroke={`url(#${gradientId})`} strokeWidth="13" />
          <path
            className="sarah-logo-shimmer"
            d="M42.5 9.5 58 25Q61.5 28.5 58 32L46 44Q42.5 47.5 39 44L29.5 34.5Q27.5 32.5 25.5 34.5L16 44M15 42.5 44 71.5Q46 73.5 48 71.5L56 63.5M29.5 86.5 14 71Q10.5 67.5 14 64L26 52Q29.5 48.5 33 52L42.5 61.5Q44.5 63.5 46.5 61.5L56 52M20 48 49 19M23 77 52 48"
            stroke={`url(#${shineId})`}
            strokeWidth="6"
          />
        </g>
      </svg>

      <span className="text-[19px] font-bold tracking-tight text-foreground">Sarah</span>
    </div>
  );
}
