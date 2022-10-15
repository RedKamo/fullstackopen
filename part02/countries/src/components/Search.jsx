const Search = ({ handleSearch, filterCountry }) => {
  return (
    <main className="search">
      <input
        placeholder="Search a country..."
        onChange={handleSearch}
        value={filterCountry}
      />
    </main>
  );
};

export default Search;
