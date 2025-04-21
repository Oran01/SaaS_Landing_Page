"use client";

import Button from "@/components/Button";
import deignExample1Image from "@/assets/images/design-example-1.png";
import deignExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

/**
 * Hero Component
 *
 * This is the hero/landing section of the site, featuring:
 * - A call to action
 * - Animated design previews
 * - Animated collaborator pointers
 * - Custom cursor for enhanced interactivity
 *
 * @component
 * @returns The rendered hero section with animation and input form
 */
export default function Hero() {
  // Define animation controls for each animated element
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  /**
   * Animate all design and pointer elements on mount.
   * Each animation plays in sequence using framer-motion's `useAnimate`.
   */
  useEffect(() => {
    // Animate the left design mockup (fade and slide in)
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    // Animate left pointer (slide in and bounce)
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // Animate the right design with a delay
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    // Animate right pointer with delay and bounce
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }} // Custom cursor style
    >
      <div className="container relative">
        {/* Animated left design preview */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={deignExample1Image}
            alt="Design example 1 image"
            draggable="false"
          />
        </motion.div>

        {/* Animated left pointer for "Andrea" */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96  hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        {/* Animated right design preview */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-64 -top-16  hidden lg:block"
        >
          <Image
            src={deignExample2Image}
            alt="Design example 2 image"
            draggable="false"
          />
        </motion.div>

        {/* Animated right pointer for "Bryan" */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4  hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>

        {/* Funding badge */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5 seed round raised
          </div>
        </div>

        {/* Hero headline */}
        <h1 className="text-6xl md:7-xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>

        {/* Supporting subheading */}
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down. Layers combines powerful
          features with an intuitive interface that keep you in your creative
          flow.
        </p>

        {/* Email signup form */}
        <form className="flex border gap-2 border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-1 min-w-0 rounded-full text-white placeholder:text-white/50"
          />

          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
