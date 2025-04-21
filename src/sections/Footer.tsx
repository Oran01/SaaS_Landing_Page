import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

/**
 * List of navigation links shown in the footer.
 * Each link includes an `href` and display `label`.
 */

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

/**
 * Footer Component
 *
 * Renders the footer section of the landing page. Includes a logo and navigation links.
 * Adapts responsively for mobile and desktop views using Tailwind’s flex utilities.
 *
 * @component
 * @returns The rendered footer section
 */
export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        {/* Flex layout: stacks on mobile, row layout on medium screens and above */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* Company/brand logo */}
          <div>
            <Image src={logoImage} alt="Layers logo" />
          </div>

          {/* Navigation links */}
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
