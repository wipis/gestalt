import { Main, Section, Container, Prose } from "@/components/ds";
import { MDXContent } from "@/components/markdown/mdx-content";
import { Meta } from "@/components/markdown/meta";
import { siteConfig } from "@/lib/site";

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { Post } from ".velite";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  const url = `${siteConfig.url}/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <Main>
      <Meta
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        tags={post.tags}
        slug={post.slug}
      />
      <Section>
        <Container>
          <Prose>
            <MDXContent code={post.body} />
          </Prose>
        </Container>
      </Section>
    </Main>
  );
}
