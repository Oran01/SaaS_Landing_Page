import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

/**
 * Tailwind utility classes for the Button component using CVA (Class Variance Authority).
 *
 * This setup defines base styles and applies variants for:
 * - `variant`: changes visual styling (primary, secondary)
 * - `size`: optional smaller size
 */
const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400", // Lime background with dark text
      secondary: "border-white text-white bg-transparent", // Transparent background with white border/text
    },
    size: {
      sm: "h-10", // Smaller button height
    },
  },
});

/**
 * Button Component
 *
 * A reusable and styleable button component built with Tailwind CSS and CVA for variants.
 *
 * @component
 * @param {Object} props - Component props
 * @param {"primary" | "secondary"} props.variant - Defines the visual style of the button
 * @param {"sm"} [props.size] - Optional button size modifier
 * @param {string} [props.className] - Additional class names to merge with default styles
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props.otherProps - Standard button HTML attributes (onClick, type, etc.)
 *
 * @returns A styled button element
 */
export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  // Extract custom variant props and standard HTML button props
  const { variant, className, size, ...otherProps } = props;

  return (
    <button
      // Apply the appropriate Tailwind styles based on variant/size/className
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
