const Search = ({ handleSearch, filterCountry }) => {
  return (
    <main>
      <h3>Search a country</h3>
      <input onChange={handleSearch} value={filterCountry} />
    </main>
  );
};

export default Search;
