import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Load the Inter font from Google Fonts with custom configuration.
 *
 * - `variable` allows access via CSS variable (--font-inter)
 * - `subsets` specifies supported character sets (e.g., Latin)
 * - `display: swap` improves perceived performance by swapping fonts as they load
 * - `axes` enables font optical sizing axis (opsz)
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

/**
 * Metadata applied to the root of the application.
 *
 * This includes default title and description.
 */
export const metadata: Metadata = {
  title: "SaaS Landing Page",
  description: "Created with the help of Frontend Tribe",
};

/**
 * The root layout component that wraps all pages of the application.
 *
 * @component
 * @param {Object} props - The props object
 * @param {React.ReactNode} props.children - The child components rendered inside the layout
 * @returns The HTML structure for the app layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
