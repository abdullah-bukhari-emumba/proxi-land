'use client'

import Image from "next/image";
import Link from "next/link";
 
import { Button } from "@/components/layout/button"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/../../../public/logo.svg"
              alt="Proximatly Logo"
              width={32}
              height={32}
            />
            <span className="font-semibold">Proximatly</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm hover:text-purple-600">
              Product
            </Link>
            <Link href="#" className="text-sm hover:text-purple-600">
              Use Cases
            </Link>
            <Link href="#" className="text-sm hover:text-purple-600">
              Security
            </Link>
            <Link href="#" className="text-sm hover:text-purple-600">
              Contact
            </Link>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">Get in touch</Button>
        </div>
      </header>
    )
}