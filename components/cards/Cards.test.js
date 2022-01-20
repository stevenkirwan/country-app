import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "./Cards";

test("Should render error message as no data is being passed", () => {
  render(<Cards />);
  // get the error message
  const error = screen.getByRole("heading", { level: 3 });
  // expect the error message to be rendered
  expect(error).toHaveTextContent(
    "Sorry, something went wrong please try again"
  );
});

test("Should render a list of countries", () => {
  const data = [
    {
      flags: {
        png: "https://flagcdn.com/w320/pg.png",
        svg: "https://flagcdn.com/pg.svg",
      },
      name: {
        common: "Papua New Guinea",
        official: "Independent State of Papua New Guinea",
        nativeName: {
          eng: {
            official: "Independent State of Papua New Guinea",
            common: "Papua New Guinea",
          },
          hmo: {
            official: "Independen Stet bilong Papua Niugini",
            common: "Papua Niu Gini",
          },
          tpi: {
            official: "Independen Stet bilong Papua Niugini",
            common: "Papua Niugini",
          },
        },
      },
      cca2: "PG",
      capital: ["Port Moresby"],
      population: 8947027,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/bv.png",
        svg: "https://flagcdn.com/bv.svg",
      },
      name: {
        common: "Bouvet Island",
        official: "Bouvet Island",
        nativeName: {
          nor: { official: "Bouvetøya", common: "Bouvetøya" },
        },
      },
      cca2: "BV",
      capital: [],
      population: 0,
    },
  ];
  render(<Cards data={data} />);
  // get the list by role
  const list = screen.getByRole("list");
  expect(list).toBeTruthy();
});
