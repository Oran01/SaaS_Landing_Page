import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Key Component
 *
 * A visual UI component that mimics a keyboard key.
 * Can be used to represent shortcut keys or keyboard actions in documentation or tutorials.
 *
 * @component
 * @param {HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes
 * @param {string} [props.className] - Optional additional Tailwind classes for styling
 * @param {React.ReactNode} [props.children] - The content inside the key (e.g., "Cmd", "Alt", "C")
 *
 * @returns A styled keyboard key-like UI element
 */
export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  // Destructure common props and gather any additional ones
  const { className, children, ...otherProps } = props;

  return (
    <div
      // Merge base styles with any custom className passed in
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex items-center outline-2 justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
      {...otherProps}
    >
      {/* Render the key label or icon inside */}
      {children}
    </div>
  );
}
