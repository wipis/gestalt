"use client";

import * as runtime from "react/jsx-runtime";
import { Code } from "./code";
import React from "react";

const sharedComponents = {
  pre: ({ children }: { children: React.ReactNode }) => children as React.ReactElement,
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    if (!className) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    const language = className?.replace("language-", "");
    return <Code language={language}>{children as string}</Code>;
  },
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return <img src={src} alt={alt || ""} className="rounded my-4" />;
  },
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
