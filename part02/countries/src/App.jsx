import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");

  const API = "https://restcountries.com/v3.1/all";

  const getCountries = () => {
    axios.get(API).then((res) => {
      const allCountries = res.data;
      setCountries(allCountries);
      console.log("nammmmmmeeee", allCountries);
    });
  };

  const handleSearch = (e) => {
    setFilterCountry(e.target.value);
  };

  const searchByCountry = !filterCountry
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterCountry.toLowerCase())
      );

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <h1>Countries Search</h1>
      <Search filterCountry={filterCountry} handleSearch={handleSearch} />
      <CountriesList searchByCountry={searchByCountry} />
    </div>
  );
};

export default App;
