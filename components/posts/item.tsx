import Link from "next/link";
import { formatDate } from "@/lib/mdx";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
}

export const Item = ({ slug, title, date }: PostItemProps) => (
  <li>
    <Link href={`/${slug}`} className="block group">
      <div className="flex justify-between items-baseline gap-3">
        <div className="min-w-0 flex-1 flex gap-1">
          <h3 className="group-hover:underline group-hover:underline-offset-4 decoration-muted-foreground decoration-dotted">{title}</h3>
        </div>
        <time dateTime={date} className="text-muted-foreground shrink-0">
          {formatDate(date)}
        </time>
      </div>
    </Link>
  </li>
);
