"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

/**
 * Array of brand logos to be shown in the ticker.
 * Each object includes a `name` (used as alt text and key) and its `image` source.
 */

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

/**
 * LogoTicker Component
 *
 * Displays a horizontally scrolling marquee of company logos to showcase brand trust.
 * The logos loop infinitely using a smooth linear animation via Framer Motion.
 *
 * @component
 * @returns The rendered scrolling ticker section
 */
export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        {/* Section title */}
        <h3 className="text-center text-white/50 text-xl">
          {" "}
          Already chosen by these market leaders
        </h3>

        {/* Ticker container with fade edges via CSS mask */}
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            // Animate the container to move left endlessly
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {/* Duplicate the logo list to enable seamless infinite scroll */}
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
