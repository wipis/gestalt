import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Layout, Main } from "@/components/ds";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/site/footer";
import { Google_Sans_Code } from "next/font/google";

import { siteConfig } from "@/lib/site";

import type { Metadata } from "next";

import "./globals.css";
import "./hljs.css";

import { cn } from "@/lib/utils";

const fontMono = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-imported-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@bridgertower",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <Layout className={fontMono.variable}>
        <body
          className={cn(
            "min-h-screen bg-background font-mono antialiased w-screen flex flex-col text-lg leading-tight tracking-tight",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main className="flex-1">{children}</Main>
            <Footer />
            <Toaster position="top-center" />
          </ThemeProvider>
        </body>
      </Layout>
    </ViewTransitions>
  );
}
