"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CeremonialEntrance() {
  const [showEntrance, setShowEntrance] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Skip on returning visits (sessionStorage)
    const visited = sessionStorage.getItem("wbs-visited");
    if (visited) {
      setDone(true);
      return;
    }
    setShowEntrance(true);
    sessionStorage.setItem("wbs-visited", "true");

    const timer = setTimeout(() => {
      setShowEntrance(false);
      setDone(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (done && !showEntrance) return null;

  return (
    <AnimatePresence>
      {showEntrance && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-void flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-water text-6xl font-display"
          >
            🜄
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-1/4 font-mono text-xs text-water uppercase tracking-widest"
          >
            The shape that remembers.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
