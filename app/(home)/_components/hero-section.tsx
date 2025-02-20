"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "./section-wrapper";
import heroImage from "../../../public/hero.png";

export const HeroSection = () => {
  return (
    <SectionWrapper classname="pt-32 pb-md bg-primary-light">
      <Container classname="text-center flex flex-col gap-xl">
        <div className="flex flex-col justify-center items-center gap-md">
          <h1 className="leading-tight">
            Build AI Workforce
            <span className="block text-purple-600">
              at the speed of thought
            </span>
          </h1>
          <p className="max-w-2xl mx-auto">
            Simply describe what you need, and Proximatlys platform will build a
            fully functional AI workforce that grows, performs, and helps with
            your business.
          </p>
          <Button variant="outline">Learn more</Button>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src={heroImage}
            alt="Platform Dashboard"
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};
