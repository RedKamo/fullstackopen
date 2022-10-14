const Filter = ({ handleSearchContact, filterSearch }) => {
  return (
    <main className="filter">
      <input
        onChange={handleSearchContact}
        value={filterSearch}
        placeholder="search contact..."
      />
    </main>
  );
};

export default Filter;
