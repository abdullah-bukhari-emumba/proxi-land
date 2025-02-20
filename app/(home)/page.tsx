import Link from "next/link";
import Image from "next/image";

import Hero from "./_components/hero";
import Header from "./_components/header";
import { PlatformCarousel } from "./_components/platform-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "./_components/section-wrapper";
import { SectionHeader } from "./_components/section-header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PlatformCarousel />
      {/* Use Cases */}
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
            <div key={i} className="bg-white p-6 rounded-xl border">
              <span className="text-2xl mb-4 block">{useCase.icon}</span>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Security Section */}
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
            <div key={i} className="text-left">
              <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="size-6 bg-purple-600 rounded-md" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="bg-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
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
            <Button className="bg-white text-purple-600 hover:bg-purple-50">
              Book a demo
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper classname="max-w-xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v3-sdHwI4P1UgpsGJWKFiosTTZPPY7gPy.svg"
            alt="Proximatly Logo"
            width={32}
            height={32}
          />
          <h2 className="font-semibold">Get in touch</h2>
        </div>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1.5 block">Your Full Name</label>
              <Input />
            </div>
            <div>
              <label className="text-sm mb-1.5 block">Title</label>
              <Input />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1.5 block">Company</label>
              <Input />
            </div>
            <div>
              <label className="text-sm mb-1.5 block">Your Company Email</label>
              <Input type="email" />
            </div>
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

        <div className="flex justify-between items-center mt-12 pt-8 border-t text-sm text-gray-500">
          <div>Copyright © Proximatly 2024. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
