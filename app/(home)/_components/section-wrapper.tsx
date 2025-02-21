import { ReactNode } from "react";
import { Container } from "../../../components/layout/container";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  classname?: string;
}

export const SectionWrapper = ({
  id,
  children,
  classname,
}: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("py-[128px] min-h-[500px]", classname)}>
      <Container>{children}</Container>
    </section>
  );
};
