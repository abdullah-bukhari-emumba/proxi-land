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
      <div
        id="usecases"
        className="flex flex-col gap-xl"
        style={{ maxWidth: "-webkit-fill-available" }}
      >
        <SectionHeader
          title="Use Cases"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
          centered
        />

        <Tabs
          defaultValue="marketing"
          className="flex flex-col gap-3xl max-w-fill-available"
          style={{ maxWidth: "-webkit-fill-available" }}
        >
          <div className="w-full overflow-x-auto md:overflow-visible xs:overflow-x-auto">
            <TabsList
              className="flex gap-xs rounded-full w-max md:w-fit mx-auto min-w-full md:min-w-0 xs: min-w-0 xs:max-w-xs xs:px-0 px-4 md:px-0"
              style={{ maxWidth: "-webkit-fill-available" }}
            >
              <TabsTrigger value="marketing" className="flex-shrink-0 xs:text-xs"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger value="sales" className="flex-shrink-0 xs:text-xs">
                Sales
              </TabsTrigger>
              <TabsTrigger value="hr" className="flex-shrink-0 xs:text-xs">
                HR
              </TabsTrigger>
              <TabsTrigger value="operations" className="flex-shrink-0 xs:text-xs">
                Operations
              </TabsTrigger>
              <TabsTrigger value="legal" className="flex-shrink-0 xs:text-xs">
                Legal
              </TabsTrigger>
              <TabsTrigger value="research" className="flex-shrink-0 xs:text-xs">
                Research
              </TabsTrigger>
            </TabsList>
          </div>

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
