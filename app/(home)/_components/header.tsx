'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
 
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container flex px-24 h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Proximatly Logo"
              width={128}
              height={128}
            />
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
          <Button className="bg-purple-600 hover:bg-purple-700">Get in touch</Button>
        </div>
      </header>
    )
}