import CountryDetail from "../../components/countryDetail/CountryDetail";
import { getBorders } from "../../utils/getBorders";
import { getData } from "../../utils/getData";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const countryDetails = await getData(`alpha/${id}`);
  const borders = await getBorders(countryDetails[0].borders);
  return {
    props: {
      countryDetails,
      borders,
    },
  };
}

const Country = ({ countryDetails, borders }) => {
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

export default Country;
