import { Container } from "./layout/container";

export const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between md:flex-nowrap flex-wrap gap-sm items-center mt-12 py-lg border-t text-sm">
        <div>Copyright © Proximality 2025. All rights reserved.</div>
        <div className="flex gap-sm sm:flex-row flex-col">
          <a href="#" className="text-primary">
            Terms of Service
          </a>
          <a href="#" className="text-primary">
            Privacy Policy
          </a>
        </div>
      </div>
    </Container>
  );
};
