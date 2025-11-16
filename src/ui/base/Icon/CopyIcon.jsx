export function CopyIcon({ size = 20, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="6"
        y="3"
        width="9"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <rect
        x="3"
        y="6"
        width="9"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}
