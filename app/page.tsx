import { Main, Section, Container } from "@/components/ds";
import { List } from "@/components/posts/list";

import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <List posts={posts} />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="space-y-4 text-4xl bg-muted rounded-xl p-8">
        <h1 className="font-medium">Gestalt Labs</h1>
        <p className="text-muted-foreground">
          Applying design and AI to build systems that drive business outcomes.
        </p>
        <p className="text-sm text-muted-foreground mt-12">
          by{" "}
          <a
            href="https://bridger.to"
            className="underline hover:text-foreground"
          >
            Bridger Tower
          </a>
        </p>
      </Container>
    </Section>
  );
};
