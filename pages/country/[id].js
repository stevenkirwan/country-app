import CountryDetail from "../../components/countryDetail/CountryDetail";

// filter API to only return fields needed
const defaultEndpoint = `https://restcountries.com/v3.1/alpha/`;

async function getCountryDetails(query) {
  const res = await fetch(`${defaultEndpoint}${query}`);
  const data = await res.json();
  return data;
}

async function getBorders(codes) {
  if (codes) {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`
    );
    const json = await res.json();
    return json;
  }else{
    return [];
  }
}
export async function getServerSideProps({ query }) {
  const { id } = query;

  const countryDetails = await getCountryDetails(id);
  const borders = await getBorders(countryDetails[0].borders);
  return {
    props: {
      countryDetails,
      borders,
    },
  };
}

// A list of countries that should show at a minimum, name, flag and population
export default function country({ countryDetails, borders }) {
  return (
    <div>
      {countryDetails?.map((country) => {
          return (
            <CountryDetail key={country.cca2} data={country} borders={borders}/>
          );
        })}
    </div>
  );
}
