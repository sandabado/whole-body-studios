"use client";

import { ConstellationApp } from "./consts";
import HUDCorners from "./HUDCorners";

interface AppTileProps {
  app: ConstellationApp;
}

export default function AppTile({ app }: AppTileProps) {
  const isHere = app.status === "HERE";
  const isLocked = app.status === "LOCKED";
  const isActive = app.status === "ACTIVE";
  const isInvestor = app.status === "INVESTOR";

  const borderColor = isHere ? "border-water" : "border-mercury";
  const textColor = isLocked ? "text-ghost" : "text-bone";
  const opacity = isLocked ? "opacity-40" : "opacity-100";
  const cornerColor = isLocked ? "border-ghost" : "border-water";
  const cursor = isLocked || isHere ? "cursor-default" : "cursor-pointer";

  const handleClick = () => {
    if (isLocked || isHere) return;
    if (isInvestor) {
      window.open(app.url, "_blank", "noopener,noreferrer");
      return;
    }
    if (isActive) {
      window.location.href = app.url;
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLocked || isHere}
      aria-disabled={isLocked || isHere}
      tabIndex={isLocked || isHere ? -1 : 0}
      className={`relative w-40 h-40
        flex flex-col items-center justify-center gap-2
        bg-carbon border-2 ${borderColor} ${opacity}
        ${!isLocked && !isHere ? "hover:border-water hover:shadow-water-glow hover:scale-[1.02]" : ""}
        transition-all duration-200 ${cursor}
        group`}
    >
      <HUDCorners color={cornerColor} />

      <app.icon
        className="w-7 h-7"
        strokeWidth={1.5}
        style={{
          color: isHere
            ? "var(--color-water)"
            : isLocked
              ? "var(--color-ghost)"
              : "var(--color-bone)",
        }}
      />

      {/* Product name */}
      <span
        className={`font-display text-xs uppercase tracking-wider ${textColor}`}
      >
        {app.name}
      </span>

      {/* Status badge */}
      <span className="font-mono text-[9px] tracking-widest">
        {isHere && <span className="text-water">★ CURRENT</span>}
        {isLocked && <span className="text-ghost">{app.subtitle}</span>}
        {isInvestor && <span className="text-water">{app.subtitle}</span>}
        {isActive && <span className="text-water">{app.subtitle}</span>}
      </span>

      {/* Pulsing dot for HERE */}
      {isHere && (
        <span className="absolute top-2 right-2 w-2 h-2 bg-water rounded-full animate-pulse-slow" />
      )}
    </button>
  );
}
