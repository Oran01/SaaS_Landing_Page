"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * CallToAction Component
 *
 * A horizontally animated call-to-action banner with looping marquee text.
 * On hover, the animation slows down to draw user attention.
 *
 * @component
 *
 * @returns The call-to-action section with infinite horizontal scroll
 */
export default function CallToAction() {
  // Track whether the user is hovering over the scrolling area
  const [isHovered, setIsHovered] = useState(false);

  // Store the animation controls returned by `animate()` for later manipulation
  const animation = useRef<AnimationPlaybackControls>();

  // `scope` is a ref to the motion container, and `animate` controls animations
  const [scope, animate] = useAnimate();

  /**
   * On mount, start an infinite linear scrolling animation from right to left.
   */
  useEffect(() => {
    animation.current = animate(
      scope.current, // Element to animate
      { x: "-50%" }, // Scroll half the width to the left
      { duration: 30, ease: "linear", repeat: Infinity } // Smooth infinite loop
    );
  }, []);

  /**
   * Adjust animation speed on hover for a more interactive experience.
   */
  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      {/* Wrap the animation area in a horizontally clipped container */}
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope} // Bind the scope to allow animation control
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Repeat the call-to-action phrase for a seamless scrolling effect */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
