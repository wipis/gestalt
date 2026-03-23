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
      <Container className="space-y-4 uppercase font-mono bg-foreground text-background rounded-3xl p-8">
        <h1 className="sr-only">Gestalt Labs</h1>
        <h2>
          Welcome to <span className="inline-flex  text-orange-500">●</span>{" "}
          Gestalt Labs
        </h2>
        <h3 className="text-muted">
          Applying design and AI to build systems that drive business outcomes.
        </h3>
        <p className="text-base  mt-12">
          by <a href="https://bridger.to">Bridger Tower</a>
        </p>
      </Container>
    </Section>
  );
};
