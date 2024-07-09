"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject } from "react";

export default function ExpandingBall({ anchorTo }: { anchorTo: RefObject<HTMLElement> }) {
  // Window dimensions + max size of the ball
  let dim = { w: 0, h: 0 };
  if (typeof window !== "undefined") {
    dim = { w: window.innerWidth, h: window.innerHeight };
  }
  const maxDia = Math.ceil(Math.sqrt((dim.w / 2) ** 2 + dim.h ** 2)) * 2;

  // Center the ball at middle of the the bottom on the screen
  const { scrollYProgress } = useScroll({ target: anchorTo, offset: ["0.25 end", "0.75 end"] });
  const spring = useSpring(scrollYProgress, { damping: 12, bounce: 0 });
  const dia = useTransform(spring, [0, 1], [0, maxDia]);
  const left = useTransform(() => dim.w / 2 - dia.get() / 2);
  const top = useTransform(spring, [0, 1], [dim.h, dim.h - maxDia / 2]);

  return <motion.div className="fixed bg-black rounded-full" style={{ top, left, width: dia, height: dia }} />;
}
