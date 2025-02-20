import { FeatureCard } from "./feature-card";
import { SectionHeader } from "./section-header";
import { SectionWrapper } from "./section-wrapper";

export const CasesSection = () => {
  return (
    <SectionWrapper classname="bg-primary-light">
      <SectionHeader
        title="Use Case"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Marketing content workflow",
            icon: "📱",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title: "Social Media Marketing",
            icon: "💬",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title: "Email Campaigns",
            icon: "📧",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
        ].map((useCase, i) => (
          <FeatureCard
            key={i}
            title={useCase.title}
            description={useCase.description}
            icon={useCase.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
