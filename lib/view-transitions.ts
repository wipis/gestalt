/** Stable CSS `view-transition-name` for a post slug (custom-ident safe). */
export function postViewTransitionName(slug: string): string {
  return `post-${slug.replace(/\//g, "-")}`;
}
