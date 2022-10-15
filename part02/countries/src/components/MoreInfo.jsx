import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CityWeather from "./CityWeather";

const MoreInfo = ({
  moreInfo,
  name,
  capital,
  languages,
  flags,
  population,
}) => {
  const [weather, setWeather] = useState(null);
  const ENV = import.meta.env.VITE_API_KEY;
  //console.log(import.meta.env.VITE_API_KEY);
  const API = `http://api.weatherstack.com/current?access_key=${ENV}&query=${capital}`;

  const getWeather = () => {
    axios.get(API).then((res) => {
      const cityWeather = res.data.current;
      setWeather(cityWeather);
      //console.log(cityWeather);
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <main>
      {moreInfo && (
        <div key={name.common}>
          <h2>{name.common}</h2>
          <img src={flags.png} width="30%" alt={name.common} />
          <p>
            <b>Capital City:</b> {capital}
          </p>
          <p>
            <b>Population: </b> {population}
          </p>
          <b>Languages:</b>
          {Object.values(languages).map((lang, i) => (
            <p key={i}>{lang}</p>
          ))}
          <h4>the weather in {capital}</h4>
          <CityWeather weather={weather} />
        </div>
      )}
    </main>
  );
};

export default MoreInfo;
