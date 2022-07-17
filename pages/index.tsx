import { NextPage } from "next";
import { Divider } from "../components/Divider";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Divider title="Projects" />
      <Divider title="My Stack" />
      <Divider title="Contact" />
    </main>
  );
};

export default Home;
