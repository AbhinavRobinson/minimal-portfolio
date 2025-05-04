import { PropsWithChildren } from "react";

import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Abhinav Robinson",
  description:
    "This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://abhinavrobinson.dev",
    title: "Abhinav Robinson",
    description:
      "This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead.",
    siteName: "Portfolio | Abhinav Robinson",
  },
  applicationName: "https://abhinavrobinson.dev",
  publisher: "Abhinav Robinson",
  robots: "index, follow",
  referrer: "no-referrer-when-downgrade",
  authors: [
    {
      name: "Abhinav Robinson",
      url: "https://abhinavrobinson.dev",
    },
  ],
  keywords: [
    "Abhinav Robinson",
    "Abhinav",
    "Robinson",
    "Portfolio",
    "Software",
    "Developer",
    "Engineer",
    "Technical",
    "Lead",
    "Typescript",
    "Javascript",
    "Express",
    "NestJS",
    "GraphQL",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Rust",
    "Golang",
    "Python",
    "Django",
    "Flask",
    "GraphQL",
    "Frontend",
    "Backend",
    "Full Stack",
  ],
  category: "Software",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  metadataBase: new URL("https://www.linkedin.com/in/abhinavrobinson/"),
  themeColor: "#000000",
  colorScheme: "light",
  viewport: "width=device-width, initial-scale=1",
};
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
