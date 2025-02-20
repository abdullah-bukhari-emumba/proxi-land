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
    <div className={`flex items-start gap-md text-left ${className}`}>
      {icon && <span className="rounded-sm p-sm bg-primary">{icon}</span>}
      <div className="flex flex-col gap-sm">
        <h6 className="font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};
