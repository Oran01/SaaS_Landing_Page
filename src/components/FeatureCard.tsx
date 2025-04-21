import { twMerge } from "tailwind-merge";

/**
 * FeatureCard Component
 *
 * A reusable card component used to display a feature with a title, description,
 * and optional media (e.g., an icon, image, or animation) in the aspect-ratio container.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.title - The title of the feature being described
 * @param {string} props.description - A short description of the feature
 * @param {React.ReactNode} [props.children] - Optional media content (image, icon, etc.)
 * @param {string} [props.className] - Optional custom classes to override or extend styling
 *
 * @returns A styled feature card
 */
export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  // Destructure the props
  const { title, description, children, className } = props;
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      {/* Aspect-ratio container for optional media/icon content */}
      <div className="aspect-video">{children}</div>

      {/* Textual content: title + description */}
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
}
