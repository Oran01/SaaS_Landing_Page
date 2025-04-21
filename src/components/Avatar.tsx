import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Avatar Component
 *
 * A circular container used to wrap avatar images or icons.
 * It applies a border, padding, and background color to match the app's theme.
 *
 * @component
 * @param {HTMLAttributes<HTMLDivElement>} props - Standard HTML div props (className, style, onClick, etc.)
 * @param {string} props.className - Optional custom class names for styling
 * @param {React.ReactNode} props.children - Content to render inside the avatar (typically an <img> or icon)
 * @returns  A styled circular avatar container
 */
export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  // Destructure className and children from props, gather the rest in otherProps
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className
      )}
      {...otherProps}
    >
      {/* Render child elements inside the avatar (e.g., image or icon) */}
      {children}
    </div>
  );
}
