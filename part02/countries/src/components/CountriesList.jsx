import Country from "./Country";

const CountriesList = ({ searchByCountry }) => {
  console.log("countryList", searchByCountry);
  return (
    <main>
      {searchByCountry.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
};

export default CountriesList;
