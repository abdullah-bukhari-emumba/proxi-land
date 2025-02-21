import { ReactNode, RefObject } from "react";
import { Container } from "../../../components/layout/container";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  classname?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

export const SectionWrapper = ({
  id,
  children,
  classname,
  ref,
}: SectionWrapperProps) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn("py-[128px] min-h-[500px]", classname)}
    >
      <Container>{children}</Container>
    </section>
  );
};
