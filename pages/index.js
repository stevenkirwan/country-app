import Head from "next/head";
import Cards from "../components/cards/Cards";

// filter API to only return fields needed
const defaultEndpoint = `${process.env.ENDPOINT}all?fields=name,flags,population,capital,cca2`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// A list of countries that should show at a minimum, name, flag and population
export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Country App</title>
      </Head>

     <Cards data={data}/>
    </div>
  );
}
