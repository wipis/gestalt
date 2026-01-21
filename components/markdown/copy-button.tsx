"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const article = document.querySelector("article");
    if (article) {
      await navigator.clipboard.writeText(article.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline" size="icon-sm" onClick={handleCopy} />}
      >
        {copied ? <Check /> : <Copy />}
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied!" : "Copy page"}</TooltipContent>
    </Tooltip>
  );
}
