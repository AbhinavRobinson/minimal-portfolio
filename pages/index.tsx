import { NextPage } from "next";
import Header from "../components/header";
import Contact from "../components/Contact";
import Stack from "../components/Stack";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
};

export default Home;
