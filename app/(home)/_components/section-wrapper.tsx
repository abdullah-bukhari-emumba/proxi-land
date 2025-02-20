import { ReactNode } from "react";
import { Container } from "../../../components/layout/container";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  classname?: string;
}

export const SectionWrapper = ({
  children,
  classname,
}: SectionWrapperProps) => {
  return (
    <section className={cn("py-[128px] min-h-[500px]", classname)}>
      <Container>{children}</Container>
    </section>
  );
};
