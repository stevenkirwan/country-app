import Link from "next/link";
import PropTypes from "prop-types";
import { Wrapper } from "../global/wrapper/Wrapper.styled";
import * as Styled from "./Cards.styled";

const Cards = ({ data }) => {
  return (
    <Wrapper>
      {!data || data?.message ? (
        <h3>Sorry, something went wrong please try again</h3>
      ) : (
        <Styled.Wrapper>
          {data?.map((country) => {
            const {
              name: { common },
              flags,
              capital,
              population,
              cca2,
            } = country;
            return (
              <Styled.Card key={cca2}>
                <Link href={`/country/${cca2}`}>
                  <a>
                    <Styled.Content>
                      <Styled.Flag src={flags.svg ? flags.svg : flags.png} />
                      <div>
                        <Styled.Country>{common}</Styled.Country>
                        {capital && <p>{capital}</p>}
                      </div>
                    </Styled.Content>
                    <p>Population: {population}</p>
                  </a>
                </Link>
              </Styled.Card>
            );
          })}
        </Styled.Wrapper>
      )}
    </Wrapper>
  );
};

Cards.propTypes = {
	data: PropTypes.array,
};

export default Cards;
