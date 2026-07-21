"use client";

import { useState, useEffect } from "react";
import { ProductSwitcher } from "@/components/ProductSwitcher/ProductSwitcher";

async function fetchStudioStatus(): Promise<{
  status: string;
  location: string;
}> {
  try {
    const res = await fetch("/api/studio-status");
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return { status: "OFFLINE", location: "" };
  }
}

export default function Navbar() {
  const [studioStatus, setStudioStatus] = useState<{
    status: string;
    location: string;
  }>({ status: "ACTIVE", location: "WHOLE BODY STUDIOS" });

  useEffect(() => {
    fetchStudioStatus().then(setStudioStatus);
    const interval = setInterval(
      () => fetchStudioStatus().then(setStudioStatus),
      60000
    );
    return () => clearInterval(interval);
  }, []);

  // Night mode detection (10pm-6am local)
  const [isNight, setIsNight] = useState(false);
  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 22 || hour < 6);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isNight ? "bg-void/80" : "bg-void/60"
      } backdrop-blur-md border-b border-mercury`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Product Switcher */}
        <ProductSwitcher />

        {/* Right: Studio Status Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <span className="inline-block w-2 h-2 bg-water rounded-full animate-pulse-slow" />
            <span className="text-water">{studioStatus.status}</span>
            {studioStatus.location && (
              <span className="text-ghost">— {studioStatus.location}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
