import { cn } from "@/lib/utils";
import hljs from "highlight.js";
import { CodeCopyButton } from "./code-copy-button";

interface CodeProps {
  children: string;
  className?: string;
  language?: string;
}

export function Code({
  children,
  className,
  language = "typescript",
}: CodeProps) {
  const code = children.trim();

  const isSupported = language && hljs.getLanguage(language);
  const highlighted = isSupported
    ? hljs.highlight(code, { language }).value
    : hljs.highlightAuto(code).value;

  return (
    <div className="relative group">
      <CodeCopyButton code={code} />
      <pre
        className={cn(
          "overflow-x-auto rounded bg-muted/30 p-2 text-sm font-mono",
          className
        )}
      >
        <code
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
}
