import { PropsWithChildren } from "react";

import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhinav Robinson's Portfolio",
  description:
    "This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead. React NextJS Typescript Javascript Mongo Express NestJS GraphQL Solidity Hardhat HTML CSS TailwindCSS SASS/SCSS Rust Golang Python AWS GCP Azure Git",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://abhinavrobinson.dev",
    title: "Abhinav Robinson's Portfolio",
    description:
      "This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead. React NextJS Typescript Javascript Mongo Express NestJS GraphQL Solidity Hardhat HTML CSS TailwindCSS SASS/SCSS Rust Golang Python AWS GCP Azure Git",
    siteName: "Portfolio | Abhinav Robinson",
  },
  applicationName: "https://abhinavrobinson.dev",
  publisher: "Abhinav Robinson",
  robots: "index, follow",
  referrer: "no-referrer-when-downgrade",
  themeColor: "#000000",
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
    "React",
    "NextJS",
    "Typescript",
    "Javascript",
    "Mongo",
    "Express",
    "NestJS",
    "GraphQL",
    "Solidity",
    "Hardhat",
    "HTML",
    "CSS",
    "TailwindCSS",
    "SASS/SCSS",
    "Rust",
    "Golang",
    "Python",
    "AWS",
    "GCP",
    "Azure",
    "Git",
  ],
  category: "Software",
  colorScheme: "dark light",
  viewport: "initial-scale=1.0, width=device-width",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  metadataBase: new URL("https://www.linkedin.com/in/abhinavrobinson/"),
};

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
