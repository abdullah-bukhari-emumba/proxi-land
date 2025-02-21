"use client";

// import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 120;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth"
    });
} else {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
};

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-light backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {["Product", "Use Cases", "Security", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase().replace(" ", ""))}
                className="text-sm transition-colors text-black hover:text-primary"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button 
            className="hidden md:flex"
            onClick={() => handleNavClick("contact")}
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            className="md:hidden bg-transparent shadow-none text-black border-none px-[10px] py-sm hover:bg-primary hover:text-base-1"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <XIcon className="!text-xl" />
            ) : (
              <MenuIcon className="!text-xl" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg p-6"
          >
            <ul className="flex flex-col gap-6">
              {["Product", "Use Cases", "Security", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase().replace(" ", ""))}
                    className="text-sm transition-colors text-black hover:text-primary"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button 
                className="w-full"
                onClick={() => handleNavClick("contact")}
              >
                Get in touch
              </Button>
            </div>
          </motion.nav>
        )}
      </Container>
    </header>
  );
};
