import { twMerge } from "tailwind-merge";

/**
 * Pointer Component
 *
 * Renders a mouse pointer SVG icon with an optional colored label (tag).
 * Often used to indicate user positions in collaborative interfaces (like cursors or presence indicators).
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - The label to display near the pointer (e.g., user name or tag)
 * @param {"red" | "blue"} [props.color] - Optional color of the label badge (defaults to blue)
 *
 * @returns The pointer with a label positioned beside it
 */
export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;

  return (
    <div className="relative">
      {/* Mouse pointer icon (SVG from Feather Icons) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-white size-5"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>

      {/* Label positioned to the bottom-right of the pointer */}
      <div className="absolute top-full left-full">
        <div
          className={twMerge(
            "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
