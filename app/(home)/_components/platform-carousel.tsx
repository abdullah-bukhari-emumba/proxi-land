"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeader } from "./section-header";
import { SectionWrapper } from "./section-wrapper";

const slides = [
  {
    id: 1,
    label: "WORKFLOWS",
    title: "Build complex AI workforce over conversations",
    description:
      "Describe your needs and our platform will build highly skilled and efficient agent to automate using an extensive library of tools and integrations.",
    image:
      "https://images.unsplash.com/photo-1739946544837-266f0d1d1590?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    label: "AUTOMATION",
    title: "Automate repetitive tasks with AI",
    description:
      "Let AI handle your routine tasks while you focus on strategic decisions and creative work.",
    image:
      "https://images.unsplash.com/photo-1735292626225-eb75b91f2ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    label: "INTEGRATION",
    title: "Seamless integration with your tools",
    description:
      "Connect with your existing workflow tools and enhance productivity without disrupting your current setup.",
    image:
      "https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const PlatformCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [isAnimating]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isAnimating) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAnimating, nextSlide]);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-3xl">
        <SectionHeader
          subtitle="Platform overview"
          title="Don't settle for complex AI platforms"
          description="Express your intent and have your Multi-Agent system created for
            you. Productivity is a cutting-edge platform that allows businesses
            to automate, optimize, and scale business solutions by just
            describing what they need."
        />
        <div className="relative">
          <div className="overflow-hidden rounded-md border border-primary shadow-lg p-sm">
            <div className="grid md:grid-cols-2 gap-3xl">
              <div className="flex flex-col gap-xs justify-between p-xl">
                <div className="flex flex-col gap-sm">
                  <p className="text-sm text-accent-1 uppercase">
                    {slides[currentSlide].label}
                  </p>
                  <h3 className="text-3xl">{slides[currentSlide].title}</h3>
                  <p className="text-accent-2 text-lg">
                    {slides[currentSlide].description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-sm">
                    <div className="h-1 bg-primary-light w-full">
                      <div
                        className="h-full bg-gradient-1 transition-all duration-500 ease-in-out"
                        style={{
                          width: `${
                            ((currentSlide + 1) / slides.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <button
                      onClick={prevSlide}
                      className="rounded-md p-sm transition-colors cursor-pointer hover:bg-primary-light"
                      disabled={isAnimating}
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous slide</span>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="rounded-md p-sm transition-colors cursor-pointer hover:bg-primary-light"
                      disabled={isAnimating}
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next slide</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="Platform screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
