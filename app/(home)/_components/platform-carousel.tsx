"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "framer-motion";
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
    image: "/home/platform-overview-slide-workflow.png",
  },
  {
    id: 2,
    label: "GOVERNANCE",
    title: "Ensure compliance for your AI workforce",
    description:
      "Adhere to industry regulations and ethical AI standards through secure management of your AI workforce.",
    image: "/home/platform-overview-slide-governance.png",
  },
  {
    id: 3,
    label: "INTEGRATIONS",
    title: "Integrate with your data and SaaS agents",
    description:
      "Maximize the value of your existing investments in SaaS applications and data management platforms.",
    image: "/home/platform-overview-slide-integrations.png",
  },
];

export const PlatformCarousel = () => {
  const platformSectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isInView = useInView(platformSectionRef, { once: true });

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

    if (!isAnimating && isInView) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 2500);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAnimating, nextSlide, isInView]);

  return (
    <SectionWrapper id="platform" ref={platformSectionRef}>
      <div className="flex flex-col gap-3xl">
        <SectionHeader
          subtitle="Platform overview"
          title="Don't settle for complex AI platforms"
          description="Express your intent and have your Multi-Agentic workforce curated for you. Proximality is a cutting-edge platform that allows businesses to automate, optimize, and scale business workflows by just describing what they need."
        />
        {isInView && (
          <div className="relative">
            <div className="overflow-hidden rounded-md border border-primary shadow-lg p-sm">
              <div className="grid md:grid-cols-2 gap-3xl">
                <div className="flex flex-col md:gap-xs gap-lg justify-between md:p-xl p-sm order-2 md:order-1">
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
                      <div className="h-2 rounded-full overflow-hidden bg-primary-light w-full">
                        <div
                          className="h-full bg-gradient-2 transition-all duration-500 ease-in-out"
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
                <div className="relative aspect-video overflow-hidden rounded-sm order-1 md:order-2">
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
        )}
      </div>
    </SectionWrapper>
  );
};
