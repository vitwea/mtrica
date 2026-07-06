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
        d="M4 78 C 24 50 52 26 78 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M62 8 L100 0 L92 38 Z" />

      <text
        x="120"
        y="140"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="115"
        fontWeight="700"
      >
        trica
      </text>

      <text
        x="210"
        y="200"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="28"
        fontWeight="400"
        textAnchor="middle"
        style={{ wordSpacing: "32px" }}
      >
        Mide. Decide. Crece.
      </text>
    </svg>
  );
}
