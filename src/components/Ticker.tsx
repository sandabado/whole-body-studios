"use client";

import { useEffect, useState } from "react";

interface TickerItem {
  text: string;
  isSystemLog: boolean;
}

const defaultItems: TickerItem[] = [
  { text: "SANDĀBĀDO • VOL. 1 — RECORDING", isSystemLog: false },
  { text: "SYS: SYNC LEAD GENERATED — BRAND CAMPAIGN", isSystemLog: true },
  { text: "LIVING EARTH • COMPILATION — MIXING", isSystemLog: false },
  { text: "SARAH VEYA • MEMORY EP — MASTERING", isSystemLog: false },
  { text: "SYS: VINYL PRESSING CONFIRMED — 300 UNITS", isSystemLog: true },
  { text: "MARCUS REED • UNTITLED — WRITING", isSystemLog: false },
  {
    text: "SYS: APPLICATION RECEIVED — GENRE: SOUL BLUES",
    isSystemLog: true,
  },
];

export default function Ticker() {
  const [items, setItems] = useState<TickerItem[]>(defaultItems);

  useEffect(() => {
    fetch("/api/ticker")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setItems(data);
        }
      })
      .catch(() => {});
  }, []);

  const doubled = [...items, ...items]; // seamless loop

  return (
    <div className="relative z-10 border-y border-mercury bg-carbon/80 backdrop-blur-sm py-3 overflow-hidden ticker-container">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-xs uppercase tracking-widest mx-8 ${
              item.isSystemLog ? "text-ghost" : "text-water"
            }`}
          >
            {item.text}
            <span className="mx-4 text-mercury">→</span>
          </span>
        ))}
      </div>
    </div>
  );
}
