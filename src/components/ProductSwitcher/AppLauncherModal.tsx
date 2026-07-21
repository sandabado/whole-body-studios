"use client";

import { useEffect, useRef } from "react";
import { constellationApps, investorPortal } from "./consts";
import AppTile from "./AppTile";

interface AppLauncherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppLauncherModal({
  isOpen,
  onClose,
}: AppLauncherModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();

    const trapHandler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trapHandler);
    return () => document.removeEventListener("keydown", trapHandler);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-sm flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="constellation-title"
        className="relative z-10 w-full max-w-4xl p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            id="constellation-title"
            className="font-display text-xl text-bone tracking-wide text-center flex-1"
          >
            CONSTELLATION
          </h2>
          <div className="font-mono text-xs text-water uppercase tracking-widest">
            SYSTEM STATUS: ONLINE ●
          </div>
        </div>

        <div className="border-t border-mercury mb-6" />

        {/* Element grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {constellationApps.map((app, i) => (
            <div
              key={app.name}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              <AppTile app={app} />
            </div>
          ))}
        </div>

        <div className="border-t border-mercury my-6" />

        {/* Investor row */}
        <div className="flex justify-center">
          <div
            className="animate-fade-in-up opacity-0"
            style={{
              animationDelay: `${100 + constellationApps.length * 50}ms`,
            }}
          >
            <AppTile app={investorPortal} />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center font-mono text-xs text-ghost">
          So It Is Built. So It Holds. So It Is. 🍀
        </p>
      </div>

      {/* Close button (mobile) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-ghost hover:text-water transition-colors text-2xl"
        aria-label="Close constellation overlay"
      >
        ✕
      </button>
    </div>
  );
}
