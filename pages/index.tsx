import { NextPage } from "next";
import { Divider } from "../components/Divider";
import Header from "../components/header";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Divider title="Projects" />
      <Divider title="My Stack" />
      <Contact />
    </main>
  );
};

export default Home;
