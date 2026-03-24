import { Main, Section, Container, Prose } from "@/components/ds";
import { ReferenceIndex, RefLink } from "@/components/markdown/ref";
import { MDXContent } from "@/components/markdown/mdx-content";

import { getReferenceUrlsForSlug } from "@/lib/post-reference-urls";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { postViewTransitionName } from "@/lib/view-transitions";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { Post } from ".velite";

import { Link } from "next-view-transitions";

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

  const referenceUrls = getReferenceUrlsForSlug(slug);

  return (
    <Main>
      <Section>
        <Container className="space-y-4 uppercase font-mono bg-foreground text-background rounded-3xl p-8">
          <h1 className="sr-only">{post.title}</h1>
          <h2>
            <span className="inline-flex text-blue-500">●</span>{" "}
            <span style={{ viewTransitionName: postViewTransitionName(post.slug) }}>
              {post.title}
            </span>
          </h2>
          {post.description && (
            <h3 className="text-zinc-500">{post.description}</h3>
          )}
          <div className="text-base mt-12 flex flex-wrap gap-4 items-center">
            {post.author && <span>by {post.author}</span>}
            {post.date && (
              <span>{new Date(post.date).toLocaleDateString()}</span>
            )}
            {post.tags && post.tags.length > 0 && (
              <span className="text-zinc-500">{post.tags.join(", ")}</span>
            )}
            <Link className="ml-auto" href="/">
              &larr; Back
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Prose>
            <MDXContent
              code={post.body}
              components={{
                Ref: (props: { n: number }) => (
                  <RefLink n={props.n} href={referenceUrls[props.n - 1]} />
                ),
                ReferenceIndex: () => <ReferenceIndex urls={referenceUrls} />,
              }}
            />
          </Prose>
        </Container>
      </Section>
    </Main>
  );
}
