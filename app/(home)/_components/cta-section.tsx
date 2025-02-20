import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./section-wrapper";
import CTAVector from "../../../public/home/cta-vector.svg";

export const CTASection = () => {
  return (
    <SectionWrapper>
      <div className="bg-primary rounded-2xl py-3xl px-xl lg:px-[128px] text-base-1 relative overflow-hidden grid md:grid-cols-2">
        <div className="flex flex-col gap-xl items-start relative z-20 bg-primary max-w-[400px]">
          <div className="flex flex-col gap-md">
            <h2>Build your Agentic worforce with ease</h2>
            <p>
              Ready to discover how Proximatly can help your business scale with
              AI? Lets talk.
            </p>
          </div>
          <Button variant="secondary">Book a demo</Button>
        </div>
        <div className="relative md:block hidden z-10">
          <CTAVector className="absolute -top-[70px] -right-[130px]" />
        </div>
      </div>
    </SectionWrapper>
  );
};
