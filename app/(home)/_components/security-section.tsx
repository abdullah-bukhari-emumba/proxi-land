import { FeatureCard } from "./feature-card";
import { SectionHeader } from "./section-header";
import { SectionWrapper } from "./section-wrapper";
import ThunderIcon from "../../../public/icons/thunder-icon.svg";

const cards = [
  {
    title: "No training on your data",
    icon: <ThunderIcon />,
    description:
      "Your data remains private and it’s never utilized for model training purposes.",
  },
  {
    title: "GDPR Compliant",
    icon: <ThunderIcon />,
    description:
      "We are GDPR compliant, ensuring top-tier data security and privacy.",
  },
  {
    title: "Choose where to store your data",
    icon: <ThunderIcon />,
    description: "Choose from a list of regions to store your data.",
  },
  {
    title: "Role based access control",
    icon: <ThunderIcon />,
    description:
      "Fine-grained access controls to manage your team’s permissions securely and efficiently.",
  },
  {
    title: "Secure encryption",
    icon: <ThunderIcon />,
    description:
      "Robust secure encryption (AES-256) for data at rest and TLS for data in transit.",
  },
  {
    title: "Security first",
    icon: <ThunderIcon />,
    description:
      "We never store anything we don’t need to. The inputs or outputs of your tools are never stored.",
  },
];

export const SecuritySection = () => {
  return (
    <SectionWrapper classname="text-center">
      <div className="flex flex-col gap-3xl">
        <SectionHeader
          title="Oversee & Secure your AI Workforce with Confidence"
          description="We prioritize security and compliance, are GDPR ready, and put you in control of your data storage"
          subtitle="security"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2xl">
          {cards.map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
