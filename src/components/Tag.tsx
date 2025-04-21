import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Tag Component
 *
 * A stylized label/tag UI element commonly used to highlight categories, statuses, or keywords.
 * It includes a star-like Unicode symbol (✶) by default and wraps children as the tag label.
 *
 * @component
 * @param {HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes (className, onClick, etc.)
 * @param {string} [props.className] - Optional additional Tailwind classes for styling
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the tag (e.g., label text)
 *
 * @returns A styled tag with an icon and label
 */
export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;

  return (
    <div
      // Merge base styles with any custom class names passed in
      className={twMerge(
        "inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
      {...otherProps}
    >
      {/* Decorative star symbol */}
      <span>&#10038;</span>

      {/* Render the provided label or tag content */}
      <span className="text-sm">{children}</span>
    </div>
  );
}
