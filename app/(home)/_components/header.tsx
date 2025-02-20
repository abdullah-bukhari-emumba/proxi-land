"use client";

import Link from "next/link";
import Logo from "../../../public/logo.svg";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <Container>
        <div className="flex px-24 h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            {/* <span className="font-semibold">Proximatly</span> */}
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-black hover:text-purple-600">
              Product
            </Link>
            <Link href="#" className="text-sm text-black hover:text-purple-600">
              Use Cases
            </Link>
            <Link href="#" className="text-sm text-black hover:text-purple-600">
              Security
            </Link>
            <Link href="#" className="text-sm text-black hover:text-purple-600">
              Contact
            </Link>
          </nav>
          <Button>Get in touch</Button>
        </div>
      </Container>
    </header>
  );
}
