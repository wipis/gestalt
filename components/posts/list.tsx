import { Section, Container } from "@/components/ds";
import { Item } from "@/components/posts/item";

import type { Post } from "#site/content";

export const List = ({ posts }: { posts: Post[] }) => {
  return (
    <Section>
      <Container className="space-y-2">
        <h2 className="text-muted-foreground">Posts</h2>
        {posts.length > 0 ? (
          <ul className="grid gap-1.5" >
            {posts.map((post) => (
              <Item
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
              />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
      </Container>
    </Section>
  );
};
