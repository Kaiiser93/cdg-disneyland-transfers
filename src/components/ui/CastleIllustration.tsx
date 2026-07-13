export default function CastleIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sky glow behind castle */}
      <ellipse cx="260" cy="200" rx="200" ry="160" fill="#C9A96E" fillOpacity="0.04" />
      <ellipse cx="260" cy="370" rx="180" ry="18" fill="#C9A96E" fillOpacity="0.18" />

      {/* Main walls */}
      <rect x="100" y="220" width="320" height="160" rx="3"
        fill="#0F1830" stroke="#C9A96E" strokeOpacity="0.45" strokeWidth="1.2" />

      {/* Central tower base */}
      <rect x="195" y="140" width="130" height="240" rx="3"
        fill="#0D1628" stroke="#C9A96E" strokeOpacity="0.55" strokeWidth="1.2" />

      {/* Central tower top section */}
      <rect x="205" y="95" width="110" height="60" rx="2"
        fill="#111D35" stroke="#C9A96E" strokeOpacity="0.65" strokeWidth="1.2" />

      {/* Central spire — gold */}
      <polygon points="260,18 218,95 302,95" fill="#C9A96E" fillOpacity="0.85" />
      <line x1="260" y1="18" x2="260" y2="4" stroke="#C9A96E" strokeWidth="2" />
      <polygon points="260,4 278,12 260,20" fill="#C9A96E" />

      {/* Left main tower */}
      <rect x="78" y="175" width="82" height="205" rx="3"
        fill="#0D1628" stroke="#C9A96E" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="84" y="143" width="70" height="42" rx="2"
        fill="#111D35" stroke="#C9A96E" strokeOpacity="0.5" strokeWidth="1" />
      <polygon points="119,82 90,143 148,143" fill="#C9A96E" fillOpacity="0.75" />

      {/* Right main tower */}
      <rect x="360" y="175" width="82" height="205" rx="3"
        fill="#0D1628" stroke="#C9A96E" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="366" y="143" width="70" height="42" rx="2"
        fill="#111D35" stroke="#C9A96E" strokeOpacity="0.5" strokeWidth="1" />
      <polygon points="401,82 372,143 430,143" fill="#C9A96E" fillOpacity="0.75" />

      {/* Small left tower */}
      <rect x="118" y="200" width="54" height="180" rx="2"
        fill="#0C1525" stroke="#C9A96E" strokeOpacity="0.3" strokeWidth="1" />
      <polygon points="145,153 122,200 168,200" fill="#C9A96E" fillOpacity="0.55" />

      {/* Small right tower */}
      <rect x="348" y="200" width="54" height="180" rx="2"
        fill="#0C1525" stroke="#C9A96E" strokeOpacity="0.3" strokeWidth="1" />
      <polygon points="375,153 352,200 398,200" fill="#C9A96E" fillOpacity="0.55" />

      {/* Battlements — main wall */}
      {[112, 143, 174, 268, 299, 330, 361].map((x) => (
        <rect key={x} x={x} y="212" width="22" height="16" rx="1"
          fill="#0F1830" stroke="#C9A96E" strokeOpacity="0.35" strokeWidth="1" />
      ))}

      {/* Arched gate */}
      <path d="M222 380 L222 292 Q260 264 298 292 L298 380 Z"
        fill="#060B16" stroke="#C9A96E" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="260" y1="266" x2="260" y2="380"
        stroke="#C9A96E" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="5 5" />

      {/* Windows — central tower, arched */}
      <rect x="244" y="153" width="32" height="44" rx="16"
        fill="#0A1020" stroke="#C9A96E" strokeOpacity="0.6" strokeWidth="1" />
      {/* Inner glow window */}
      <rect x="249" y="158" width="22" height="34" rx="11"
        fill="#C9A96E" fillOpacity="0.08" />

      <rect x="250" y="202" width="20" height="28" rx="10"
        fill="#C9A96E" fillOpacity="0.12" stroke="#C9A96E" strokeOpacity="0.4" strokeWidth="1" />

      {/* Windows — left tower */}
      <rect x="106" y="196" width="26" height="36" rx="13"
        fill="#0A1020" stroke="#C9A96E" strokeOpacity="0.45" strokeWidth="1" />
      <rect x="109" y="199" width="20" height="30" rx="10"
        fill="#C9A96E" fillOpacity="0.07" />
      <rect x="107" y="244" width="26" height="28" rx="4"
        fill="#0A1020" stroke="#C9A96E" strokeOpacity="0.3" strokeWidth="1" />

      {/* Windows — right tower */}
      <rect x="388" y="196" width="26" height="36" rx="13"
        fill="#0A1020" stroke="#C9A96E" strokeOpacity="0.45" strokeWidth="1" />
      <rect x="391" y="199" width="20" height="30" rx="10"
        fill="#C9A96E" fillOpacity="0.07" />
      <rect x="389" y="244" width="26" height="28" rx="4"
        fill="#0A1020" stroke="#C9A96E" strokeOpacity="0.3" strokeWidth="1" />

      {/* Diagonal hatching on gate */}
      <line x1="240" y1="310" x2="260" y2="290" stroke="#C9A96E" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="260" y1="310" x2="280" y2="290" stroke="#C9A96E" strokeOpacity="0.12" strokeWidth="1" />

      {/* Stars — large, scattered */}
      {[
        { cx: 42, cy: 55, r: 1.4, delay: '0s' },
        { cx: 478, cy: 42, r: 1.2, delay: '1.3s' },
        { cx: 28, cy: 148, r: 0.9, delay: '0.7s' },
        { cx: 498, cy: 128, r: 1.3, delay: '2.1s' },
        { cx: 58, cy: 248, r: 0.8, delay: '1.8s' },
        { cx: 493, cy: 218, r: 1.1, delay: '0.4s' },
        { cx: 18, cy: 318, r: 1.0, delay: '2.8s' },
        { cx: 508, cy: 308, r: 0.9, delay: '1.0s' },
        { cx: 152, cy: 48, r: 1.0, delay: '0.2s' },
        { cx: 372, cy: 44, r: 1.2, delay: '1.6s' },
        { cx: 82, cy: 108, r: 0.8, delay: '3.1s' },
        { cx: 440, cy: 98, r: 0.9, delay: '0.9s' },
      ].map(({ cx, cy, r }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="#C9A96E" />
          <circle cx={cx} cy={cy} r={r * 3} fill="#C9A96E" fillOpacity="0.12" />
        </g>
      ))}

      {/* 4-point sparkle near main spire */}
      <g>
        <path d="M290 32 L293 24 L296 32 L304 35 L296 38 L293 46 L290 38 L282 35 Z"
          fill="#C9A96E" fillOpacity="0.95" />
        <path d="M238 58 L240 52 L242 58 L248 60 L242 62 L240 68 L238 62 L232 60 Z"
          fill="#C9A96E" fillOpacity="0.75" />
        <path d="M330 68 L332 63 L334 68 L339 70 L334 72 L332 77 L330 72 L325 70 Z"
          fill="#C9A96E" fillOpacity="0.6" />
      </g>

      {/* Ground line */}
      <line x1="55" y1="380" x2="465" y2="380"
        stroke="#C9A96E" strokeOpacity="0.2" strokeWidth="1" />

      {/* Subtle light beam from spire */}
      <line x1="260" y1="18" x2="200" y2="0"
        stroke="#C9A96E" strokeOpacity="0.08" strokeWidth="20" />
      <line x1="260" y1="18" x2="320" y2="0"
        stroke="#C9A96E" strokeOpacity="0.08" strokeWidth="20" />
    </svg>
  );
}
