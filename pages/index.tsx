import { NextPage } from "next";
import Contact from "../components/Contact";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Head from "next/head";
import OpenSource from "../components/OpenSource";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <NextSeo
        title="Portfolio | Abhinav Robinson"
        description="This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead. React NextJS Typescript Javascript Mongo Express NestJS GraphQL Solidity Hardhat HTML CSS TailwindCSS SASS/SCSS Rust Golang Python AWS GCP Azure Git"
        canonical="https://abhinavrobinson.dev"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://abhinavrobinson.dev",
          title: "Abhinav Robinson's Portfolio",
          description:
            "This is the portfolio website of Abhinav Robinson. Abhinav is a senior software developer / engineer and technical lead , developer lead. React NextJS Typescript Javascript Mongo Express NestJS GraphQL Solidity Hardhat HTML CSS TailwindCSS SASS/SCSS Rust Golang Python AWS GCP Azure Git",
          site_name: "Portfolio | Abhinav Robinson",
        }}
      />
      <Hero />
      <Projects />
      <Stack />
      <OpenSource />
      <Contact />
    </main>
  );
};

export default Home;
