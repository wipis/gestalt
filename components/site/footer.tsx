import { Section, Container } from "@/components/ds";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Footer = () => {
  return (
    <footer className="border-t uppercase">
      <Section className="py-6">
        <Container className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-flex  text-blue-500">●</span> Gestalt Lab
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://wip.is"
                className="hover:text-foreground transition-colors"
              >
                WIP
              </a>
            </p>
          </div>
          <ThemeToggle />
        </Container>
      </Section>
    </footer>
  );
};
