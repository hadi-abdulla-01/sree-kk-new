import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const InteractiveGradient = () => {
  const initialX =
    typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const initialY =
    typeof window !== "undefined" ? window.innerHeight / 2 : 0;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 40,
    mass: 0.8,
  });
  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 40,
    mass: 0.8,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      520px circle at ${springX}px ${springY}px,
      rgba(144, 180, 255, 0.28),
      transparent 70%
    )
  `;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: spotlight }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,214,137,0.18),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(163,196,243,0.16),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(195,214,255,0.18),transparent_60%)]"
      />
      <div className="absolute inset-0 backdrop-blur-[90px]" aria-hidden />
    </div>
  );
};
