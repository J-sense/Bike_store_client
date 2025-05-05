export const Logo = () => (
  <svg
    className="h-14 md:h-16 transition-all hover:scale-105 active:scale-95"
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="12" stroke="#FACC15" strokeWidth="4" />
    <circle cx="90" cy="30" r="12" stroke="#FACC15" strokeWidth="4" />
    <line x1="30" y1="30" x2="60" y2="10" stroke="#FACC15" strokeWidth="3" />
    <line x1="60" y1="10" x2="90" y2="30" stroke="#FACC15" strokeWidth="3" />
    <line x1="60" y1="10" x2="60" y2="30" stroke="#FACC15" strokeWidth="3" />
    <line x1="45" y1="30" x2="60" y2="30" stroke="#FACC15" strokeWidth="3" />
    <text
      x="110"
      y="35"
      fill="#FACC15"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fontWeight="bold"
    >
      BikeStore
    </text>
  </svg>
);
