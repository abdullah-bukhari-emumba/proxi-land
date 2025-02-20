import { FeatureCard } from "./feature-card";
import { SectionHeader } from "./section-header";
import { SectionWrapper } from "./section-wrapper";

export const SecuritySection = () => {
  return (
    <SectionWrapper classname="text-center">
      <SectionHeader
        title="Oversee & Secure your AI Workforce with Confidence"
        description="We prioritize security and compliance, are GDPR ready, and put you in control of your data storage"
        subtitle="security"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "No training on your data",
            description:
              "Your data remains private and it's never utilized for model training purposes",
          },
          {
            title: "GDPR compliant",
            description:
              "We are GDPR compliant, ensuring top-tier security and privacy",
          },
          {
            title: "Choose where to store your data",
            description: "Choose from a list of regions to store your data",
          },
          {
            title: "Fine-grained access control",
            description:
              "Use granular permissions to manage your team's permissions securely and effectively",
          },
          {
            title: "Secure encryption",
            description:
              "Data is encrypted at rest and in transit using top-tier security protocols",
          },
          {
            title: "Security first",
            description:
              "Regular audits ensuring we don't need to flag issues or analyze of your flow but never stored",
          },
        ].map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
