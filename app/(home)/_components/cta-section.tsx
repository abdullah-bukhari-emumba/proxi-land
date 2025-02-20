import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./section-wrapper";

export const CTASection = () => {
  return (
    <SectionWrapper>
      <div className="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 size-80 bg-white rounded-full transform rotate-45" />
          <div className="absolute -left-20 -bottom-20 size-80 bg-white rounded-full" />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-bold mb-4">
            Build your Agentic
            <br />
            worforce with ease
          </h2>
          <p className="mb-8 text-purple-100">
            Ready to discover how Proximatly can help your
            <br />
            business scale with AI? Lets talk.
          </p>
          <Button className="bg-white text-primary hover:bg-purple-50">
            Book a demo
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
