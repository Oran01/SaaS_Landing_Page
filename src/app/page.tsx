import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

/**
 * Home Page Component
 *
 * This component renders the main landing page by composing
 * multiple section components in a sequential layout.
 *
 * @returns The complete landing page structure
 */
export default function Home() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Hero section with main headline */}
      <Hero />

      {/* Animated ticker showcasing logo integrations */}
      <LogoTicker />

      {/* Introduction to the product or service */}
      <Introduction />

      {/* List of core features */}
      <Features />

      {/* Integration highlights with supported tools */}
      <Integrations />

      {/* Frequently Asked Questions */}
      <Faqs />

      {/* Call-to-action section encouraging user engagement */}
      <CallToAction />

      {/* Footer with links and legal info */}
      <Footer />
    </>
  );
}
