import Header from "./_components/header";
import { HeroSection } from "./_components/hero-section";
import { PlatformCarousel } from "./_components/platform-carousel";
import { SecuritySection } from "./_components/security-section";
import { CasesSection } from "./_components/cases-section";
import { CTASection } from "./_components/cta-section";
import { ContactForm } from "./_components/contact-form";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PlatformCarousel />
      <CasesSection />
      <SecuritySection />
      <CTASection />
      <ContactForm />
    </main>
  );
}
