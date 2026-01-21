import { Section, Container } from "@/components/ds";
import { formatDate } from "@/lib/mdx";
import { CopyButton } from "./copy-button";
import { BackButton } from "./back-button";

interface MetaProps {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export function Meta({ title, description, date, author }: MetaProps) {
  return (
    <Section>
      <Container className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h1>{title}</h1>
          <div className="flex gap-2">
            <BackButton />
            <CopyButton />
          </div>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
        {(date || author) && (
          <div className="text-muted-foreground">
            {date && <time dateTime={date}>{formatDate(date)}</time>}
            {date && author && <span> · </span>}
            {author && <span>{author}</span>}
          </div>
        )}
      </Container>
    </Section>
  );
}
