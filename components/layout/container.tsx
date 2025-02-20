import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classname?: string;
}

export const Container = ({ children, classname }: ContainerProps) => {
  return (
    <main className={cn("container mx-auto px-sm", classname)}>{children}</main>
  );
};
