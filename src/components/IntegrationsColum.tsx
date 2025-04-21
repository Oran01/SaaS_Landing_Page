"use client";

import { type IntegrationType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

/**
 * IntegrationColum Component
 *
 * Displays a vertically scrolling list of integrations in a looped animation.
 * Includes a smooth up-down (ping-pong) motion and staggered fade-in effects for each item.
 *
 * @component
 * @param {Object} props - Component props
 * @param {IntegrationType} props.integrations - Array of integration objects with `name`, `icon`, and `description`
 * @param {string} [props.className] - Optional class names to extend or override the default layout
 * @param {boolean} [props.reverse] - If true, scrolls from top to bottom instead of bottom to top
 *
 * @returns The animated integrations column
 */
export default function IntegrationColum(props: {
  integrations: IntegrationType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;

  return (
    // Controls the vertical scroll direction (reverse scroll if `reverse` is true)
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 30, // Slow loop for smooth animation
        repeat: Infinity, // Infinite scroll
        repeatType: "mirror", // Scrolls back and forth (up then down)
        ease: [0.445, 0.05, 0.55, 0.95], // easeInOutSine
      }}
      className={twMerge(
        "flex flex-col gap-4 pb-4 will-change-transform", // Optimize for GPU rendering
        className
      )}
    >
      {/* Duplicate the list to make the looping animation seamless */}
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name + i}
              initial={{ opacity: 0, y: 20 }} // Slide in from below
              animate={{ opacity: 1, y: 0 }} // Fade and settle into place
              transition={{
                delay: index * 0.15, // Staggered appearance
                duration: 0.6,
                ease: "easeOut",
              }}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
