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
      <Container className="space-y-2">
        <h1>brijr/web-starter</h1>
        <p className="text-muted-foreground">
          A minimal typescript website starter with next.js, velite, tailwind, and shadcn/ui.{" "}
        </p>
      </Container>
    </Section>
  );
};