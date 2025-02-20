import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className = "",
}: FeatureCardProps) => {
  return (
    <div className={`flex gap-md text-left ${className}`}>
      {icon && <span className="rounded-xs p-xs">{icon}</span>}
      <div className="flex flex-col gap-sm">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
