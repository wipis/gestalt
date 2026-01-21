import { Section, Container } from "@/components/ds";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border-t">
      <Section className="py-6">
        <Container className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo width={16} />
            <p>&copy; {new Date().getFullYear()} <a href="https://wip.is" className="hover:text-foreground transition-colors">WIP</a></p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
