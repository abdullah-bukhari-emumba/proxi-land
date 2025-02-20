import { Container } from "@/components/layout/container";
import PlatformCarousel from "./_components/platform-carousel";
import Header from "./_components/header";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <PlatformCarousel />
    </Container>
  );
}
