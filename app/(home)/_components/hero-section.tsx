"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "./section-wrapper";
import heroImage from "../../../public/home/hero.png";

export const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SectionWrapper classname="pt-32 pb-md bg-primary-light">
      <Container classname="text-center flex flex-col gap-xl">
        <div className="flex flex-col justify-center items-center gap-md">
          <h1 className="leading-tight">
            Build AI Workforce
            <span className="block text-purple-600">at the speed of thought</span>
          </h1>
          <p className="max-w-2xl mx-auto">
            Simply describe what you need, and Proximality&#39;s platform will build a
            fully functional AI workforce that grows, performs, and helps with
            your business.
          </p>
          <Button variant="outline">Learn more</Button>
        </div>

        <div className="rounded-2xl overflow-hidden relative">
          {isPlaying ? (
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/6zHFNjK-QiQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div 
              className="relative cursor-pointer group" 
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <PlayIcon className="w-8 h-8 text-base-1 ml-1" />
                </div>
              </div>
              <Image
                src={heroImage}
                alt="Platform Dashboard"
                width={1200}
                height={675}
                className="w-full"
              />
            </div>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
};
