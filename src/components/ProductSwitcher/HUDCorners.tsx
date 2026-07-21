interface HUDCornersProps {
  color: string; // tailwind border color class like "border-water" or "border-ghost"
}

export default function HUDCorners({ color }: HUDCornersProps) {
  return (
    <>
      {/* Top-left */}
      <div
        className={`absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 ${color}`}
      />
      {/* Top-right */}
      <div
        className={`absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 ${color}`}
      />
      {/* Bottom-left */}
      <div
        className={`absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 ${color}`}
      />
      {/* Bottom-right */}
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 ${color}`}
      />
    </>
  );
}
