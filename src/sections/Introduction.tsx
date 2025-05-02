"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// Full introductory sentence, split into individual words
const text = `You&#39;re racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

/**
 * Introduction Component
 *
 * Displays an animated scroll-based introduction section. Words fade in progressively
 * as the user scrolls down the page, creating a narrative storytelling effect.
 *
 * @component
 * @returns The rendered introduction section with scroll animation
 */
export default function Introduction() {
  // Ref to the scroll target that will control the animation
  const scrollTarget = useRef<HTMLDivElement>(null);

  // Extract scroll progress (0 to 1) based on the scrollTarget's position in viewport
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"], // Animate while element enters and exits the viewport
  });

  // State to track which word is currently revealed
  const [currentWord, setCurrentWord] = useState(0);

  // Convert scroll progress into a number between 0 and total word count
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  // Update currentWord index on scroll progress change
  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        {/* Sticky container ensures text remains pinned during scroll animation */}
        <div className="sticky top-20 md:top-28 lg:top-40">
          {/* Section tag label */}
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>

          {/* Headline with scroll-driven word reveal */}
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15", // Dimmed by default
                    wordIndex < currentWord && "text-white" // Revealed as you scroll
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            {/* Final callout line in lime green */}
            <span className="text-lime-400 block">
              That's why we built Layers.
            </span>
          </div>
        </div>

        {/* Scroll target used to calculate scrollYProgress */}
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
