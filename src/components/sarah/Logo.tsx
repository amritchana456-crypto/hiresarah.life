export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} role="img" aria-label="Sarah">
      <svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="44" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7357F6" />
            <stop offset="1" stopColor="#F45BD4" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="22" fill="url(#logo-grad)" />
        <text
          x="22"
          y="30"
          textAnchor="middle"
          fill="white"
          fontSize="26"
          fontFamily="'Orbitron', sans-serif"
          fontWeight="700"
        >
          S
        </text>
      </svg>

      <svg viewBox="0 0 86 18" width="86" height="18" aria-hidden="true">
        <defs>
          <linearGradient id="text-grad" x1="0" y1="0" x2="86" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7357F6" />
            <stop offset="1" stopColor="#F45BD4" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="14"
          fill="url(#text-grad)"
          fontSize="13"
          fontFamily="'Orbitron', sans-serif"
          fontWeight="700"
          letterSpacing="3.5"
        >
          SARAH
        </text>
      </svg>
    </div>
  );
}
