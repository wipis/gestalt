import { Section, Container } from "@/components/ds";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border-t">
      <Section className="py-6">
        <Container className="flex flex-col gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo width={16} />
            <p>&copy; {new Date().getFullYear()} Gestalt Labs</p>
          </div>
          <p className="max-w-md">
            Studying how humans and AI work together. Building software that
            reflects what&apos;s learned.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
