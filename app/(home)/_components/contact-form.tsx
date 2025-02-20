import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "./section-wrapper";
import Logo from "../../../public/logo.svg";
import MailIcon from "../../../public/icons/mail-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import XIcon from "../../../public/icons/x-icon.svg";
import YoutubeIcon from "../../../public/icons/youtube-icon.svg";

export const ContactForm = () => {
  return (
    <SectionWrapper classname="max-w-[1140px] mx-auto lg:p-[64px] p-0">
      <div className="grid md:grid-cols-2 gap-xl">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Logo />
            <h2 className="font-semibold">Get in touch</h2>
          </div>
          <div className="flex flex-col gap-md">
            <div className="flex gap-sm">
              <MailIcon className="fill-[#9188C3]" />
              <a className="text-primary" href="#">
                hello@proximality.ai
              </a>
            </div>
            <div className="flex gap-sm">
              <a href="#">
                <LinkedinIcon />
              </a>
              <a href="#">
                <XIcon />
              </a>
              <a href="#">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-sm mb-1.5 block">Your Full Name</label>
            <Input />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1.5 block">Company</label>
              <Input />
            </div>
            <div>
              <label className="text-sm mb-1.5 block">Title</label>
              <Input />
            </div>
          </div>
          <div>
            <label className="text-sm mb-1.5 block">Your Full Name</label>
            <Input />
          </div>
          <div>
            <label className="text-sm mb-1.5 block">
              What would you like to build with Proximatly?
            </label>
            <Textarea className="min-h-[120px]" />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Send Message
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};
