export function Crest({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="32" cy="32" r="30" fill="#132257" />
      <circle cx="32" cy="32" r="28" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="33" cy="46" r="7.5" stroke="#FFFFFF" strokeWidth="1.3" />
      <path
        d="M26.2 46h13.6M33 38.8v14.4M28.2 41.2l9.6 9.6M37.8 41.2l-9.6 9.6"
        stroke="#FFFFFF"
        strokeWidth="0.7"
      />
      <path
        d="M22 38c2-8 8-12 14-10 2-6 8-7 10-2 5 1 6 7 2 10-1 6-8 8-14 6-6 1-12-1-12-4z"
        fill="#FFFFFF"
      />
      <path
        d="M30 27c0-5 2-8 3-4 1-5 3-6 4-2"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M44 33l6 2-6 2z" fill="#FFFFFF" />
      <circle cx="40.5" cy="32.5" r="0.9" fill="#132257" />
    </svg>
  );
}

export function Avatar({
  name,
  size = "lg",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  const dim =
    size === "lg" ? "h-20 w-20 text-2xl" : size === "md" ? "h-11 w-11 text-sm" : "h-8 w-8 text-[11px]";
  return (
    <div
      className={`relative shrink-0 ${dim} rounded-full bg-[conic-gradient(from_210deg,#132257,#4c6cb3,#ffffff,#132257)] p-[3px]`}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-navy text-gold font-display font-semibold tracking-wide">
        {initials}
      </div>
    </div>
  );
}
