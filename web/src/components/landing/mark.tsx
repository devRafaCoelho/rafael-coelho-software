export function Mark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <g
        fill="none"
        stroke="#e8edf5"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 19V11a6 6 0 0 1 6-6h8" />
        <path d="M59 45v8a6 6 0 0 1-6 6h-8" />
      </g>
      <g transform="translate(33 32) scale(0.92) translate(-33 -32)">
        <path
          fill="#e8edf5"
          fillRule="evenodd"
          d="M18 49V15h13c10.5 0 17 4.5 17 11 0 6.2-6.2 10.8-16.5 11.2L45.5 49h-8.3L26.2 37.4V49Zm8.8-28.8h4.4c5.4 0 8.6 2.4 8.6 5.8s-3.2 5.8-8.6 5.8h-4.4Z"
        />
        <path fill="#39ff88" d="M33.5 36.2 45.5 49h-8.3L26.2 37.4l7.3-1.2Z" />
      </g>
    </svg>
  );
}
