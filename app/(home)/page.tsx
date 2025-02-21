import { HeroSection } from "./_components/hero-section";
import { PlatformCarousel } from "./_components/platform-carousel";
import { SecuritySection } from "./_components/security-section";
import { CTASection } from "./_components/cta-section";
import { ContactForm } from "./_components/contact-form";
import { CasesSection } from "./_components/cases-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PlatformCarousel />
      <CasesSection />
      <SecuritySection />
      <CTASection />
      <ContactForm />
    </main>
  );
}
