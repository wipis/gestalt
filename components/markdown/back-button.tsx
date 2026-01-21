"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function BackButton() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline", size: "icon-sm" }))}
          />
        }
      >
        <ArrowLeft />
      </TooltipTrigger>
      <TooltipContent>Back to home</TooltipContent>
    </Tooltip>
  );
}
