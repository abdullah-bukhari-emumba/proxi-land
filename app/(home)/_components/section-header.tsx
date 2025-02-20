"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export const SectionHeader = ({
  title,
  description,
  subtitle,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-md max-w-[800px] mx-auto",
        centered ? "items-center text-center" : ""
      )}
    >
      {subtitle && (
        <p className="text-sm text-accent-1 uppercase">{subtitle}</p>
      )}
      <h2 className="leading-normal">{title}</h2>
      <p className="text-accent-2 max-w-[500px] mx-auto">{description}</p>
    </div>
  );
};
