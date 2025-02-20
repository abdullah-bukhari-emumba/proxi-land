'use client'

import Image from 'next/image';
import { Button } from '@/components/layout/button'

export default function Hero() {
 return (
    <section className="pt-32 pb-16 bg-violet-50">
    <div className="container text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build AI Workforce
        <span className="block text-purple-600">at the speed of thought</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Simply describe what you need, and Proximatlys platform will build a fully functional AI workforce that
        grows, performs, and helps with your business.
      </p>
      <Button className="border:  hover:bg-purple-700">Learn more</Button>

      <div className="mt-12 rounded-2xl overflow-hidden">
        <Image
          src="/../../../public/hero.png"
          alt="Platform Dashboard"
          width={1200}
          height={675}
          className="w-full"
        />
      </div>
    </div>
  </section>
 )   
}