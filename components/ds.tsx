import { cn } from "@/lib/utils";

type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
};

export const Section = ({ children, className, id, style }: DSProps) => (
  <section className={cn("py-6", className)} id={id} style={style}>
    {children}
  </section>
);

export const Container = ({ children, className, id, style }: DSProps) => (
  <div className={cn("max-w-2xl mx-auto px-4", className)} id={id} style={style}>
    {children}
  </div>
);

export const Layout = ({ children, className, style }: DSProps) => (
  <html lang="en" suppressHydrationWarning className={cn(className)} style={style}>
    {children}
  </html>
);

export const Main = ({ children, className, id, style }: DSProps) => (
  <main className={cn(className)} id={id} style={style}>
    {children}
  </main>
);

export const Prose = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
  style,
}: DSProps) => (
  <article
    className={cn(
      "prose prose-neutral dark:prose-invert max-w-none",
      "[&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:mb-3",
      "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3",
      "[&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-2",
      "[&_p]:mb-3",
      "[&_a]:underline [&_a]:underline-offset-4",
      "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3",
      "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3",
      "[&_blockquote]:border-l-2 [&_blockquote]:pl-3 [&_blockquote]:text-muted-foreground",
      "[&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm",
      "[&_pre]:mb-3",
      "[&_img]:rounded [&_img]:my-3",
      "[&_hr]:my-6 [&_hr]:border-border",
      className
    )}
    id={id}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    style={style}
  >
    {children}
  </article>
);
