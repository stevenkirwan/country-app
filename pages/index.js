import Head from "next/head";
import Cards from "../components/cards/Cards";
import { getData } from "../utils/getData";

export async function getServerSideProps() {
  const data = await getData("all?fields=name,flags,population,capital,cca2");
  return {
    props: {
      data,
    },
  };
}

// A list of countries that should show at a minimum, name, flag and population
const Home = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Country App</title>
      </Head>

      <Cards data={data} />
    </div>
  );
};

export default Home;
