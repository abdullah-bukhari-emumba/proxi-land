import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureCard } from "./feature-card";
import { SectionHeader } from "./section-header";
import { SectionWrapper } from "./section-wrapper";
import ContentIcon from "../../../public/icons/content-icon.svg";
import ThumbsUpIcon from "../../../public/icons/thumbsup-icon.svg";
import MailIcon from "../../../public/icons/mail-icon.svg";

const tabs = {
  marketing: [
    {
      title: "Marketing content workflow",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
  sales: [
    {
      title: "Sales Automation",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
  hr: [
    {
      title: "Sales Automation",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
  operations: [
    {
      title: "Sales Automation",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
  legal: [
    {
      title: "Sales Automation",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
  research: [
    {
      title: "Sales Automation",
      icon: <ContentIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Lead Generation",
      icon: <ThumbsUpIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      title: "Pipeline Management",
      icon: <MailIcon />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ],
};

export const CasesSection = () => {
  return (
    <SectionWrapper id="usecase" classname="bg-primary-light">
      <div className="flex flex-col gap-xl">
        <SectionHeader
          title="Use Cases"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
          centered
        />

        <Tabs defaultValue="marketing" className="flex flex-col gap-3xl">
          <TabsList className="flex gap-sm rounded-full w-fit mx-auto">
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="hr">HR</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          {Object.entries(tabs).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2xl">
                {items.map((useCase, i) => (
                  <FeatureCard
                    key={i}
                    title={useCase.title}
                    description={useCase.description}
                    icon={useCase.icon}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SectionWrapper>
  );
};
