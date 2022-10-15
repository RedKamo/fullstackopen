import Country from "./Country";

const CountriesList = ({ searchByCountry }) => {
  return (
    <main className="countriesList">
      {searchByCountry.length >= 10 || searchByCountry.length === 0 ? (
        <p className="countriesList__message">
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
