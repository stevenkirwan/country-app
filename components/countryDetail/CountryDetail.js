import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Image from "next/image";
import * as Styled from "./CountryDetail.styled";
import Borders from "./Borders";

const CountryDetail = ({ data, borders }) => {
  const router = useRouter();
  return (
    <Styled.Wrapper>
      <Styled.Button onClick={() => router.back()}>
        <a>Go Back</a>
      </Styled.Button>
      {data && (
        <Styled.Content data-testid="Country__Details">
          {data.flags && (
            <Styled.ImgWrapper>
              <Image
                src={data.flags.svg ? data.flags.svg : data.flags.png}
                alt={data.name.common}
                width={300}
                height={200}
              />
            </Styled.ImgWrapper>
          )}
          <Styled.CountryDetail>
            {data?.name?.common && <h3>{data.name.common}</h3>}
            {data.capital && (
              <p>
                <strong>Capital: </strong> {data.capital}
              </p>
            )}
            <p>
              <strong>Population: </strong> {data.population}
            </p>
            {data.currencies && (
              <p>
                <strong>Currency: </strong> {Object.keys(data.currencies)[0]}
              </p>
            )}
            {data.languages && (
              <p>
                <strong>Languages: </strong>
                {Object.keys(data.languages)
                  .map(function (lang) {
                    return data.languages[lang];
                  })
                  .join(", ")}
              </p>
            )}
          </Styled.CountryDetail>
          {borders?.length !== 0 && <Borders borders={borders} />}
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};

CountryDetail.propTypes = {
  data: PropTypes.shape({
    flags: PropTypes.object,
    name: PropTypes.object.isRequired,
    capital: PropTypes.array,
    population: PropTypes.number,
    currencies: PropTypes.object,
    languages: PropTypes.object,
  }),
  borders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.object.isRequired,
      flags: PropTypes.object,
      population: PropTypes.number,
      cca2: PropTypes.string,
    })
  ).isRequired,
};

export default CountryDetail;
