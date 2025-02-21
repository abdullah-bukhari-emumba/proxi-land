"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    title: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // For now, we'll use mailto as a fallback
      const mailtoLink = `mailto:hello@proximality.ai?subject=Contact Form Submission from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ATitle: ${formData.title}`;
      window.location.href = mailtoLink;
      setFormData({ name: "", email: "", message: "", company: "", title: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      classname="max-w-[1140px] mx-auto lg:p-[64px] p-0"
    >
      <div className="grid md:grid-cols-2 gap-xl">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Logo />
            <h2 className="font-semibold">Get in touch</h2>
          </div>
          <div className="flex flex-col gap-md">
            <div className="flex gap-sm">
              <MailIcon className="fill-[#9188C3]" />
              <a className="text-primary" href="mailto:hello@proximality.ai">
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm mb-1.5 block">Your Full Name</label>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="text-black"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1.5 block">Company</label>
              <Input
                className="text-black"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm mb-1.5 block">Title</label>
              <Input
                className="text-black"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="text-sm mb-1.5 block">Your Email</label>
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="text-black"
            />
          </div>
          <div>
            <label className="text-sm mb-1.5 block">
              What would you like to build with Proximatly?
            </label>
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[120px] text-black"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Send Message
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};
