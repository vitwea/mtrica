export default function LogoFull({ className = "h-20 w-auto" }) {
  return (
    <svg
      viewBox="0 0 480 210"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="95" width="26" height="45" rx="4" />
      <rect x="38" y="70" width="26" height="70" rx="4" />
      <rect x="76" y="45" width="26" height="95" rx="4" />

      <path
        d="M4 88 C 30 60 55 35 80 21"
        fill="none"
        className="stroke-accent"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g transform="translate(80, 21) rotate(-32)">
        <path
          d="M-13 -9 L1 0 L-13 9"
          fill="none"
          className="stroke-accent"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <text
        x="120"
        y="140"
        fontFamily="var(--font-space-grotesk), Arial, sans-serif"
        fontSize="95"
        fontWeight="700"
        style={{ letterSpacing: "-2px" }}
      >
        trica
      </text>

      <text
        x="165"
        y="200"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="28"
        fontWeight="400"
        textAnchor="middle"
        style={{ wordSpacing: "26px" }}
      >
        Mide. Decide. Crece.
      </text>
      <circle cx="210" cy="80" r="8.5" className="fill-accent" />
    </svg>
  );
}