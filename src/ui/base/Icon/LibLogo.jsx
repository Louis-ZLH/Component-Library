function LibLogo() {
  return (
    <svg
      width="220"
      height="50"
      viewBox="0 0 660 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#8A8AFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8A8AFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#7BD3FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7BD3FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="grad3" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#8A8AFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8A8AFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="grad4" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#7BD3FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7BD3FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="40" cy="80" r="14" fill="#8A8AFF" />
      <circle cx="80" cy="40" r="14" fill="#8A8AFF" />
      <circle cx="80" cy="120" r="14" fill="#7BD3FF" />
      <circle cx="120" cy="80" r="14" fill="#7BD3FF" />

      <circle cx="80" cy="40" r="36" fill="url(#grad1)" />
      <circle cx="80" cy="120" r="36" fill="url(#grad2)" />

      <path
        d="M54 74L70 50"
        stroke="#8A8AFF"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M54 86L70 110"
        stroke="#7BD3FF"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M94 50L110 74"
        stroke="#8A8AFF"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M94 110L110 86"
        stroke="#7BD3FF"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <text
        x="160"
        y="90"
        fontFamily="Inter, 'SF Pro Display', 'Helvetica Neue', sans-serif"
        fontSize="58"
        fontWeight="600"
        letterSpacing="-1"
        className="fill-black transition-colors duration-600 dark:fill-white"
      >
        Component
      </text>

      <text
        x="165"
        y="138"
        fontFamily="Inter, 'SF Pro Display', 'Helvetica Neue', sans-serif"
        fontSize="42"
        fontWeight="400"
        fill="#6F6F6F"
        letterSpacing="-0.4"
      >
        Library
      </text>
    </svg>
  );
}

export default LibLogo;
