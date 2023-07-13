"use client";

import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";
import Stack from "../components/Stack";

config.autoAddCss = false;

function Page() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main>
        <Hero />
        <Projects />
        <Stack />
        <OpenSource />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default Page;
