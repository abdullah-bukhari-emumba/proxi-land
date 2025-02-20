import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "./section-wrapper";
import { Input } from "@/components/ui/input";

export const ContactForm = () => {
  return (
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
  );
};
