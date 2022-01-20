import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import * as Styled from "./CountryDetail.styled";

const Borders = ({ borders }) => {
  return (
    borders &&
    borders.length !== 0 && (
      <div data-testid="Borders">
        <Styled.BorderTitle>Bordering Countries</Styled.BorderTitle>
        <Styled.BorderWrapper>
          {borders.map((country) => {
            const {
              flags,
              name: { common },
              population,
              cca2,
            } = country;
            return (
              <Styled.BorderItem key={cca2}>
                <Link href={`/country/${cca2}`}>
                  <a>
                    <Image
                      src={flags.svg ? flags.svg : flags.png}
                      alt={common}
                      width={300}
                      height={200}
                    />
                    <p>{common}</p>
                    <p>Population: {population}</p>
                  </a>
                </Link>
              </Styled.BorderItem>
            );
          })}
        </Styled.BorderWrapper>
      </div>
    )
  );
};

Borders.propTypes = {
  borders: PropTypes.array,
};

export default Borders;
