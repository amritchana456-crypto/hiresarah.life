import { useId } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const rawId = useId().replace(/:/g, "");
  const gradientId = `sarah-logo-gradient-${rawId}`;
  const glowId = `sarah-logo-glow-${rawId}`;
  const shineId = `sarah-logo-shine-${rawId}`;

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
            0%, 100% { opacity: 0.18; transform: translateX(-10px); }
            45% { opacity: 0.46; transform: translateX(10px); }
            70% { opacity: 0.22; transform: translateX(16px); }
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
        viewBox="0 0 64 64"
        className="sarah-logo-mark h-9 w-9 shrink-0 overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="8" x2="56" y1="10" y2="54">
            <stop stopColor="#7357F6" />
            <stop offset="0.48" stopColor="#8C5CF8" />
            <stop offset="1" stopColor="#F45BD4" />
          </linearGradient>
          <linearGradient id={shineId} x1="12" x2="52" y1="14" y2="50">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.72" />
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
        </defs>

        <g filter={`url(#${glowId})`} strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M40 9.5 55 24.5 44.5 35 29 19.5 20 28.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
          />
          <path
            d="M24 54.5 9 39.5 19.5 29 35 44.5 44 35.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
          />
          <path
            d="M31.8 20.6 43.9 32.7M20.3 31.3 32.4 43.4"
            stroke="white"
            strokeOpacity="0.84"
            strokeWidth="3.2"
          />
          <g className="sarah-logo-shimmer">
            <path
              d="M40 9.5 55 24.5 44.5 35 29 19.5 20 28.5"
              stroke={`url(#${shineId})`}
              strokeWidth="6.2"
            />
            <path
              d="M24 54.5 9 39.5 19.5 29 35 44.5 44 35.5"
              stroke={`url(#${shineId})`}
              strokeWidth="6.2"
            />
          </g>
        </g>
      </svg>

      <span className="text-[19px] font-bold tracking-tight text-foreground">Sarah</span>
    </div>
  );
}
