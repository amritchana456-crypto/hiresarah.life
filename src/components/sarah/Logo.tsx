export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-xl bg-gradient-primary shadow-soft" />
        <svg
          viewBox="0 0 32 32"
          className="absolute inset-0 h-full w-full p-1.5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 4 L18.5 13.5 L28 16 L18.5 18.5 L16 28 L13.5 18.5 L4 16 L13.5 13.5 Z" fill="white" stroke="none" />
        </svg>
      </div>
      <span className="text-[19px] font-bold tracking-tight text-foreground">Sarah</span>
    </div>
  );
}
