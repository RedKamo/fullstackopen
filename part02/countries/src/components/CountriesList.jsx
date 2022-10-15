import Country from "./Country";

const CountriesList = ({ searchByCountry }) => {
  return (
    <main>
      {searchByCountry.length >= 10 || searchByCountry.length === 0 ? (
        <p>
          `There are {searchByCountry.length} countries , So specify another
          filter`
        </p>
      ) : (
        searchByCountry.map((country, id) => (
          <Country key={id} country={country} />
        ))
      )}
    </main>
  );
};

export default CountriesList;
