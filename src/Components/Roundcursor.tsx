"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MotionCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const baseSize = 20;
  const hoverScale = 1.5;
  const smallDotSize = 4;

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveHandler);
    const clickable = document.querySelectorAll("a, button, input, textarea");
    clickable.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div className="relative hidden lg:block">
      {/* Big animated circle */}
      <motion.div
        className="fixed top-0 left-0 z-60 rounded-full bg-[#ed24df] mix-blend-difference pointer-events-none border"
        animate={{
          x: position.x - baseSize / 2,
          y: position.y - baseSize / 2,
          scale: isHovering ? hoverScale : 1,
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
        style={{
          width: baseSize,
          height: baseSize,
        }}
      />

      {/* Small dot that always shares center with big circle */}
      <motion.div
        className="fixed top-0 left-0 z-60 rounded-full bg-white pointer-events-none"
        animate={{
          x: position.x - smallDotSize / 2,
          y: position.y - smallDotSize / 2,
        }}
        transition={{ duration: 0.2 }}
        style={{
          width: smallDotSize,
          height: smallDotSize,
        }}
      />
    </div>
  );
}
