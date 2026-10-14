"use client";

import { motion } from "framer-motion";

export function MotionSample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border px-4 py-3"
    >
      Bloco com motion
    </motion.div>
  );
}
